<?php

$db = new mysqli("localhost", "laure_wordpres_e", "Int3rn3t", "laurenpi_wordpress_6");

if ($db->connect_error) {
    die('Error : ('. $db->connect_errno .') '. $db->connect_error);
}
