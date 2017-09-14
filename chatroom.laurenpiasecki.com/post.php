<?php
session_start();
if(isset($_SESSION['name'])) {
    $text = $_POST['text'];

    $fp = fopen("log.html", 'a');
    fwrite($fp, "<div class='msgln'>(" . date("F j, Y, g:i A") . ") <b>" . $_SESSION['name'] . "</b>: " . stripslashes(htmlspecialchars($text)) . "<br></div>");
    fclose($fp);

    $doc = new DOMDocument('1.0', "utf-8");
    $doc->preserveWhiteSpace = false;
    $doc->formatOutput = true;
    $doc->load("convo.xml");
    $root = $doc->documentElement;
    $date = $doc->createElement("date", date("F j, Y, g:i A"));
    $root->appendChild($date);
    $user = $doc->createElement("user", $_SESSION['name']);
    $root->appendChild($user);
    $message = $doc->createElement("message", $text);
    $root->appendChild($message);
    $doc->save("convo.xml");
}
session_destroy();
?>