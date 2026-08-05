<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if(
    !empty($data->name) &&
    !empty($data->email) &&
    !empty($data->message)
){
    $query = "INSERT INTO contact_messages
            SET
                name = :name,
                email = :email,
                company = :company,
                interest = :interest,
                message = :message,
                created_at = :created_at";
                
    $stmt = $db->prepare($query);
    
    $name = htmlspecialchars(strip_tags($data->name));
    $email = htmlspecialchars(strip_tags($data->email));
    $company = isset($data->company) ? htmlspecialchars(strip_tags($data->company)) : null;
    $interest = isset($data->interest) ? htmlspecialchars(strip_tags($data->interest)) : 'other';
    $message = htmlspecialchars(strip_tags($data->message));
    $created_at = date('Y-m-d H:i:s');
    
    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":company", $company);
    $stmt->bindParam(":interest", $interest);
    $stmt->bindParam(":message", $message);
    $stmt->bindParam(":created_at", $created_at);
    
    if($stmt->execute()){
        http_response_code(201);
        echo json_encode(array("message" => "Message was sent successfully."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to send message."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to send message. Data is incomplete."));
}
?>
