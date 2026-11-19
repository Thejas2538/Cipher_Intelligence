<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
require_once __DIR__ . '/config.php';

function require_login() {
    if (empty($_SESSION['user_id'])) {
        header('Location: login.php');
        exit;
    }
}

function current_user($pdo) {
    if (empty($_SESSION['user_id'])) return null;
    $stmt = $pdo->prepare('SELECT id, investigator_id, name, email, bio, created_at FROM users WHERE id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    return $stmt->fetch();
}
?>
