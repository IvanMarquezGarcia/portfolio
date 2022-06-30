<?php
    if($_POST["message"]) {
        mail(
            "ivanmarquezgarcia00@gmail.com", "Portfolio Contact",
            $_POST["message"]. "From: " . $_POST["email"]
        );
    }
?>
