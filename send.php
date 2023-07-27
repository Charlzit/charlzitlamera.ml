<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

if (isset($_POST['send'])) {
    $name = htmlentities($_POST['name']);
    $email = htmlentities($_POST['email']);
    $subject = htmlentities($_POST['subject']);
    $message = htmlentities($_POST['message']);

    try {
        $mail = new PHPMailer(true);

        // Enable SMTP debugging (0 = off, 1 = client messages, 2 = client and server messages).
        $mail->SMTPDebug = 0;

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'charlzlamera97@gmail.com'; // Replace with your Gmail username
        $mail->Password = 'jxabzhekjgazkzfi'; // Replace with your Gmail password
        $mail->SMTPSecure = 'tls'; // Use 'tls' for port 587 or 'ssl' for port 465
        $mail->Port = 587; // Use 587 for TLS or 465 for SSL
        $mail->isHTML(true);
        $mail->setFrom($email, $name);
        $mail->addAddress('charlzlamera97@gmail.com');
        $mail->Subject = "$email ($subject)";
        $mail->Body = $message;
        $mail->send();

        echo '
        <script>
            alert("Sent Successfully");
            document.location.href = "index.html";
        </script>
        ';
        exit();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
