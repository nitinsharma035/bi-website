<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => "error", "message" => "Invalid Request Method Context."]);
    exit;
}

// Multipart FormData strings extract karein
$name = isset($_POST['name']) ? htmlspecialchars(strip_tags($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) : '';
$phone = isset($_POST['phone']) ? htmlspecialchars(strip_tags($_POST['phone'])) : '';
$portfolio = isset($_POST['portfolio']) ? htmlspecialchars(strip_tags($_POST['portfolio'])) : 'N/A';
$message = isset($_POST['message']) ? htmlspecialchars(strip_tags($_POST['message'])) : 'N/A';

if (empty($name) || !$email || empty($phone)) {
    echo json_encode(["status" => "error", "message" => "Required data inputs are empty or malformed."]);
    exit;
}

// File system attachment handling validation matrix
if (!isset($_FILES['resume']) || $_FILES['resume']['error'] !== UPLOAD_ERR_OK) {
    echo json_encode(["status" => "error", "message" => "Resume document stream upload failed or missing."]);
    exit;
}

$fileTmpPath = $_FILES['resume']['tmp_name'];
$fileName = $_FILES['resume']['name'];
$fileSize = $_FILES['resume']['size'];
$fileType = $_FILES['resume']['type'];

// Extension restrictions enforcement check
$fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
if ($fileExtension !== 'pdf') {
    echo json_encode(["status" => "error", "message" => "Invalid file format framework. PDF format only."]);
    exit;
}

// Target routing configuration 
$to = "nitins.beingingenious@gmail.com";
// $to = "marketing@beingingenious.in";
$cc_email = "nitins.beingingenious@gmail.com";
$bcc_email = "nitins.beingingenious@gmail.com";

$subject = "Job Application: Product Designer Profile - " . $name;

// Read asset bytes stream securely
$fileData = file_get_contents($fileTmpPath);
$encodedContent = chunk_split(base64_encode($fileData));
$boundary = md5(time());

// Multipurpose Internet Mail Extensions (MIME) multipart multi-layer header strings building
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "From: Careers Desk <marketing@beingingenious.in>" . "\r\n";
$headers .= "Reply-To: {$email}" . "\r\n";
$headers .= "Cc: " . $cc_email . "\r\n";
$headers .= "Bcc: " . $bcc_email . "\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"" . $boundary . "\"" . "\r\n";

// HTML Layout Template 
$body = "--" . $boundary . "\r\n";
$body .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
$body .= "Content-Transfer-Encoding: 7bit" . "\r\n\r\n";

$body .= "
<html>
<body style='font-family: Arial, sans-serif; background-color: #f7f9fc; padding: 20px; color: #333;'>
    <div style='max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #eee; overflow: hidden;'>
        <div style='background: linear-gradient(to right, #0A95DC, #830FBC); padding: 20px; text-align: center; color: white;'>
            <h2 style='margin: 0; font-size: 20px;'>New Career Application Caught</h2>
        </div>
        <div style='padding: 24px;'>
            <p><strong>Applicant Name:</strong> {$name}</p>
            <p><strong>Email Coordinate:</strong> {$email}</p>
            <p><strong>Phone Number:</strong> {$phone}</p>
            <p><strong>Portfolio Link:</strong> <a href='{$portfolio}' target='_blank' style='color: #0A95DC; text-decoration: none;'>{$portfolio}</a></p>
            <hr style='border: 0; border-top: 1px solid #eee; margin: 20px 0;'>
            <p><strong>Cover Letter / Applicant Message:</strong></p>
            <p style='background-color: #fafafa; padding: 15px; border-left: 4px solid #830FBC; border-radius: 4px; font-style: italic; white-space: pre-wrap;'>{$message}</p>
        </div>
        <div style='background-color: #fafafa; padding: 12px; text-align: center; font-size: 11px; color: #999; border-top: 1px solid #eee;'>
            Applicant Attachment Cached: {$fileName}
        </div>
    </div>
</body>
</html>
\r\n";

// Attachment File Injection Boundary Block
$body .= "--" . $boundary . "\r\n";
$body .= "Content-Type: application/octet-stream; name=\"" . $fileName . "\"\r\n";
$body .= "Content-Description: " . $fileName . "\r\n";
$body .= "Content-Disposition: attachment; filename=\"" . $fileName . "\"; size=" . $fileSize . ";\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n\r\n";
$body .= $encodedContent . "\r\n";
$body .= "--" . $boundary . "--";

// Send out call 
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["status" => "success", "message" => "Application and PDF attachment delivered."]);
} else {
    echo json_encode(["status" => "error", "message" => "System execution failed during delivery lifecycle."]);
}
?>
