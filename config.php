<?php
// Local XAMPP database connection.
$host = 'localhost';
$dbname = 'cipher_intelligence';
$username = 'root';
$password = ''; // Default XAMPP password. Set this if you changed it.

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    exit('Database connection failed. Check that MySQL is running and database.sql was imported.');
}
?>
