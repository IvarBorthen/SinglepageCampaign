<?php

set_include_path(get_include_path() . PATH_SEPARATOR . '/var/www/html/frameworks/ZendFramework-1.11.11-minimal/library');
require_once("Zend/Mail.php");
require_once("Zend/Mail/Transport/Smtp.php");
if(!empty($_REQUEST['contactform'])){
    $name = $_REQUEST['name']; // Make sure this is correct if you change the HTML form
    $email = $_REQUEST['email']; // Make sure this is correct if you change the HTML form
    $company = $_REQUEST['company']; // Make sure this is correct if you change the HTML form

    $messagehtml='<html><head><style>
                     table.email{
                     font-family:"Arial, sans-serif";
                     font-size:1.1em;
                     margin: 0cm 0cm 0pt;
                     }
                </style>
                </head>
                <body>
                    Navn: '.$name.'<br />
                    E-post: '.$email.'<br />
                    Bedrift: '.$company.'<br />
                </body>
                </html>';
    $suc = true;
    $config = array('auth' => 'login',
                'username' => '***@****.***', // UPDATE TO YOUR USERNAME
                'password' => '****', // UPDATE PASSWORD
                'port'=>25);
    $mail = new Zend_Mail('UTF-8');
    $tr1 = new Zend_Mail_Transport_Smtp('***.****.****', $config); // UPDATE REQUIRED

    $mail->setBodyText(utf8_encode($messagehtml));
    $mail->setBodyHtml($messagehtml);
    $mail->setFrom("**********@*****.***", "*****.***"); // send mail from REQUIRED

    $mail->addTo("*****@*****.***"); // send mail to REQUIRED
    
    $mail->addBcc("*****@*****.***"); // Optional

    $mail->setSubject('Subject text'); // Enter your subject text

    $mail->send($tr1);
}

?>

<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Title header</title>
    </head>
    <body>
        <?php
            echo 'Name: '.$name.'<br>';
            echo 'Email: '.$email.'<br>';
            echo 'Company: '.$company.'<br>';
        ?>
    </body>
</html>
