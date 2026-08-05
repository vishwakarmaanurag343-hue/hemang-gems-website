<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$category = isset($_GET['category']) ? $_GET['category'] : 'all';

if($category !== 'all') {
    $query = "SELECT p.*, c.name as category_name, c.slug as category_slug 
              FROM products p 
              LEFT JOIN categories c ON p.category_id = c.id 
              WHERE c.slug = :category
              ORDER BY p.id ASC";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':category', $category);
} else {
    $query = "SELECT p.*, c.name as category_name, c.slug as category_slug 
              FROM products p 
              LEFT JOIN categories c ON p.category_id = c.id 
              ORDER BY p.id ASC";
    $stmt = $db->prepare($query);
}

$stmt->execute();
$num = $stmt->rowCount();

if($num > 0) {
    $products_arr = array();
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        
        // Fetch images
        $img_query = "SELECT image_url FROM product_images WHERE product_id = :id ORDER BY is_primary DESC";
        $img_stmt = $db->prepare($img_query);
        $img_stmt->bindParam(':id', $id);
        $img_stmt->execute();
        
        $images = array();
        while($img_row = $img_stmt->fetch(PDO::FETCH_ASSOC)) {
            array_push($images, $img_row['image_url']);
        }
        
        $product_item = array(
            "id" => $id,
            "name" => $name,
            "category" => $category_slug,
            "category_name" => $category_name,
            "price" => $price,
            "description" => html_entity_decode($description),
            "image" => !empty($images) ? $images[0] : null,
            "images" => $images
        );
        
        array_push($products_arr, $product_item);
    }
    
    http_response_code(200);
    echo json_encode($products_arr);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "No products found."));
}
?>
