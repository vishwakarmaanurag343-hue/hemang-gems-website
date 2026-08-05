<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

require_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$id = isset($_GET['id']) ? $_GET['id'] : die();

$query = "SELECT p.*, c.name as category_name, c.slug as category_slug 
          FROM products p 
          LEFT JOIN categories c ON p.category_id = c.id 
          WHERE p.id = :id
          LIMIT 0,1";

$stmt = $db->prepare($query);
$stmt->bindParam(':id', $id);
$stmt->execute();

$num = $stmt->rowCount();

if($num > 0) {
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
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

    // Fetch specifications
    $spec_query = "SELECT spec_name, spec_value FROM product_specs WHERE product_id = :id";
    $spec_stmt = $db->prepare($spec_query);
    $spec_stmt->bindParam(':id', $id);
    $spec_stmt->execute();
    
    $specs = array();
    while($spec_row = $spec_stmt->fetch(PDO::FETCH_ASSOC)) {
        array_push($specs, $spec_row['spec_value']); // just values for simplicity to match frontend array
    }
    
    $product_item = array(
        "id" => $id,
        "name" => $name,
        "category" => $category_name,
        "category_slug" => $category_slug,
        "price" => $price,
        "description" => html_entity_decode($description),
        "specs" => $specs,
        "images" => $images
    );
    
    http_response_code(200);
    echo json_encode($product_item);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "Product not found."));
}
?>
