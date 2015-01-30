<?php session_start();
$_SESSION['company'] = $_GET['company'];//เก็บค่าของภาษาไว้ใน SESSION
header('location:index.php');
?>