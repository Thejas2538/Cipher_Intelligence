<?php
require_once 'auth.php';
if (!empty($_SESSION['user_id'])) { header('Location: profile.php'); exit; }
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = strtolower(trim($_POST['email'] ?? ''));
    $password = $_POST['password'] ?? '';
    if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($password) < 6) {
        $error = 'Enter your name, a valid email and a password with at least 6 characters.';
    } else {
        $check = $pdo->prepare('SELECT id FROM users WHERE email = ?');
        $check->execute([$email]);
        if ($check->fetch()) {
            $error = 'An account with this email already exists.';
        } else {
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $insert = $pdo->prepare('INSERT INTO users (investigator_id, name, email, password, bio) VALUES (?, ?, ?, ?, ?)');
            $investigatorId = 'CI-' . strtoupper(bin2hex(random_bytes(3)));
            $insert->execute([$investigatorId, $name, $email, $hash, 'New investigator']);
            $_SESSION['user_id'] = (int)$pdo->lastInsertId();
            header('Location: profile.php'); exit;
        }
    }
}
?>
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Register | Cipher Intelligence</title><link rel="stylesheet" href="css/style.css"><style>.auth-wrap{max-width:520px;margin:50px auto;padding:28px;background:#17191d;border:1px solid #34383f;border-radius:12px}.auth-wrap label{display:block;margin:15px 0 6px}.auth-wrap input,.auth-wrap textarea{width:100%;padding:12px;background:#0e1013;border:1px solid #444;color:#fff;border-radius:6px}.auth-wrap button{margin-top:20px;width:100%;cursor:pointer}.error{color:#ff7777}.auth-links{margin-top:18px}</style></head><body><header class="site-header"><a class="brand" href="index.html"><span class="brand-mark">C</span> CIPHER <b>INTELLIGENCE</b></a><nav><a href="index.html">Home</a><a href="cases.html">Case Files</a><a href="training-cases.html">Practice Cases</a><a href="real-cases.html">Real Cases</a></nav></header><main><section class="auth-wrap"><p class="eyebrow">PERSONNEL DATABASE</p><h1>Create investigator <span>account.</span></h1><?php if ($error): ?><p class="error"><?= htmlspecialchars($error) ?></p><?php endif; ?><form method="post"><label>Full name</label><input name="name" required maxlength="100" value="<?= htmlspecialchars($_POST['name'] ?? '') ?>"><label>Email</label><input type="email" name="email" required value="<?= htmlspecialchars($_POST['email'] ?? '') ?>"><label>Password (minimum 6 characters)</label><input type="password" name="password" minlength="6" required><button class="button" type="submit">Create account →</button></form><p class="auth-links">Already registered? <a class="text-link" href="login.php">Login here</a></p></section></main></body></html>
