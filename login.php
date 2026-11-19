<?php
require_once 'auth.php';
if (!empty($_SESSION['user_id'])) { header('Location: profile.php'); exit; }
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = strtolower(trim($_POST['email'] ?? ''));
    $password = $_POST['password'] ?? '';
    $stmt = $pdo->prepare('SELECT id, password FROM users WHERE email = ?');
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    if ($user && password_verify($password, $user['password'])) {
        session_regenerate_id(true);
        $_SESSION['user_id'] = (int)$user['id'];
        header('Location: profile.php'); exit;
    }
    $error = 'Incorrect email or password.';
}
?>
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Login | Cipher Intelligence</title><link rel="stylesheet" href="css/style.css"><style>.auth-wrap{max-width:520px;margin:50px auto;padding:28px;background:#17191d;border:1px solid #34383f;border-radius:12px}.auth-wrap label{display:block;margin:15px 0 6px}.auth-wrap input{width:100%;padding:12px;background:#0e1013;border:1px solid #444;color:#fff;border-radius:6px}.auth-wrap button{margin-top:20px;width:100%;cursor:pointer}.error{color:#ff7777}.auth-links{margin-top:18px}</style></head><body><header class="site-header"><a class="brand" href="index.html"><span class="brand-mark">C</span> CIPHER <b>INTELLIGENCE</b></a><nav><a href="index.html">Home</a><a href="cases.html">Case Files</a><a href="training-cases.html">Practice Cases</a><a href="real-cases.html">Real Cases</a></nav></header><main><section class="auth-wrap"><p class="eyebrow">SECURE PERSONNEL ACCESS</p><h1>Investigator <span>login.</span></h1><?php if ($error): ?><p class="error"><?= htmlspecialchars($error) ?></p><?php endif; ?><form method="post"><label>Email</label><input type="email" name="email" required value="<?= htmlspecialchars($_POST['email'] ?? '') ?>"><label>Password</label><input type="password" name="password" required><button class="button" type="submit">Login →</button></form><p class="auth-links">New investigator? <a class="text-link" href="register.php">Create an account</a></p></section></main></body></html>
