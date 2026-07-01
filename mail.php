<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => "error", "message" => "Invalid Request Method Context."]);
    exit;
}

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (!empty($data['name']) && !empty($data['email']) && !empty($data['phone']) && !empty($data['message'])) {
    
    $name = htmlspecialchars(strip_tags($data['name']));
    $email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
    $phone = htmlspecialchars(strip_tags($data['phone']));
    $business = !empty($data['businessName']) ? htmlspecialchars(strip_tags($data['businessName'])) : 'N/A';
    $serviceCode = htmlspecialchars(strip_tags($data['services']));
    $message = htmlspecialchars(strip_tags($data['message']));

    if (!$email) {
        echo json_encode(["status" => "error", "message" => "Invalid Email format architecture."]);
        exit;
    }

    $serviceLabels = [
        "branding"  => "Brand Strategy & Identity",
        "influncer" => "Influencer Marketing",
        "web-dev"   => "Web Design & Development",
        "motion"    => "3D & Motion Visual Content",
        "social"    => "Social Media Management",
        "marketing" => "Digital Marketing"
    ];
    $serviceName = isset($serviceLabels[$serviceCode]) ? $serviceLabels[$serviceCode] : $serviceCode;

    // ================= EMAIL DESTINATIONS (Configure your IDs) =================
    $to = "nitins.beingingenious@gmail.com";
    // $to = "marketing@beingingenious.in";           // Primary Recipient
    // $cc_email = "tanv@beingingenious.in";   // CC Email Target 
    // $bcc_email = "nitins.beingingenious@gmail.com"; // BCC Blind Tracking Email Target

    $subject = "New Corporate Business Lead from: " . $name;
    
    // HTML Template Body Content
    $email_content = "
    <html>
    <head>
        <title>New Digital Architecture Form Lead</title>
    </head>
    <body style='font-family: Arial, sans-serif; background-color: #f7f9fc; padding: 20px; color: #333;'>
        <div style='max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #eee; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.02);'>
            <div style='background: linear-gradient(to right, #0A95DC, #830FBC); padding: 20px; text-align: center; color: white;'>
                <h2 style='margin: 0; font-size: 22px;'>New Business Inquiry Caught</h2>
            </div>
            <div style='padding: 24px; background-color: #ffffff;'>
                <p style='margin-top: 0;'><strong>Client Name:</strong> {$name}</p>
                <p><strong>Email Identity:</strong> {$email}</p>
                <p><strong>Phone Coordinates:</strong> {$phone}</p>
                <p><strong>Company Profile Name:</strong> {$business}</p>
                <p><strong>Required Architecture:</strong> <span style='color: #830FBC; font-weight: bold;'>{$serviceName}</span></p>
                <hr style='border: 0; border-top: 1px solid #eee; margin: 20px 0;'>
                <p><strong>Project Vision Requirements Statement:</strong></p>
                <p style='background-color: #fafafa; padding: 15px; border-left: 4px solid #0A95DC; border-radius: 4px; font-style: italic; white-space: pre-wrap;'>{$message}</p>
            </div>
            <div style='background-color: #fafafa; padding: 15px; text-align: center; font-size: 11px; color: #999; border-top: 1px solid #eee;'>
                Automated System Tracker • Operational Server Node
            </div>
        </div>
    </body>
    </html>
    ";

    // ================= SECURE COMPREHENSIVE MAIL HEADERS BLOCK =================
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Lead Tracker <no-reply@beingingenious.in>" . "\r\n";
    $headers .= "Reply-To: {$email}" . "\r\n";
    
    // Carbon Copy (CC) Header inject kiya
    $headers .= "Cc: " . $cc_email . "\r\n";
    
    // Blind Carbon Copy (BCC) Header inject kiya
    $headers .= "Bcc: " . $bcc_email . "\r\n";

    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(["status" => "success", "message" => "Message data cached and transmitted."]);
    } else {
        echo json_encode(["status" => "error", "message" => "PHP system mail framework execution failed."]);
    }

} else {
    echo json_encode(["status" => "error", "message" => "Required data properties are missing from request payload."]);
}
?>
