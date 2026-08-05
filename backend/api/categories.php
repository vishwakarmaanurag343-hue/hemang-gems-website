<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$query = "SELECT * FROM categories ORDER BY id ASC";
$stmt = $db->prepare($query);
$stmt->execute();

$num = $stmt->rowCount();

if($num > 0) {
    $categories_arr = array();
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        
        $category_item = array(
            "id" => $id,
            "name" => $name,
            "slug" => $slug,
            "image_url" => $image_url
        );
        
        array_push($categories_arr, $category_item);
    }
    
    http_response_code(200);
    echo json_encode($categories_arr);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "No categories found."));
}
?>
