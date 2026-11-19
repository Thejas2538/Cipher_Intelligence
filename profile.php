<?php
require_once 'auth.php';
require_login();
$user = current_user($pdo);
if (!$user) { session_destroy(); header('Location: login.php'); exit; }
$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $bio = trim($_POST['bio'] ?? '');
    if ($name !== '') {
        $update = $pdo->prepare('UPDATE users SET name = ?, bio = ? WHERE id = ?');
        $update->execute([$name, $bio, $_SESSION['user_id']]);
        $message = 'Profile updated successfully.';
        $user = current_user($pdo);
    } else { $message = 'Name cannot be empty.'; }
}
$initials = strtoupper(substr($user['name'], 0, 1));
$progressStmt = $pdo->prepare('SELECT COUNT(*) AS completed_cases, SUM(correct) AS correct_cases, COALESCE(SUM(score), 0) AS total_score FROM case_progress WHERE user_id = ?');
$progressStmt->execute([$_SESSION['user_id']]);
$progress = $progressStmt->fetch();
$completedStmt = $pdo->prepare('SELECT case_id, correct, score, completed_at FROM case_progress WHERE user_id = ? ORDER BY completed_at DESC');
$completedStmt->execute([$_SESSION['user_id']]);
$completedCases = $completedStmt->fetchAll();
?>
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Investigator Profile | Cipher Intelligence</title><link rel="stylesheet" href="css/style.css"><style>.profile-edit{max-width:700px;margin:25px auto;padding:25px;background:#17191d;border:1px solid #34383f;border-radius:12px}.profile-edit label{display:block;margin:14px 0 6px}.profile-edit input,.profile-edit textarea{width:100%;padding:12px;background:#0e1013;border:1px solid #444;color:#fff;border-radius:6px}.profile-edit button{margin-top:18px;cursor:pointer}.success{color:#8ee0a1}.profile-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:20px}</style></head><body><header class="site-header"><a class="brand" href="index.html"><span class="brand-mark">C</span> CIPHER <b>INTELLIGENCE</b></a><nav><a href="index.html">Home</a><a href="cases.html">Case Files</a><a href="training-cases.html">Practice Cases</a><a href="real-cases.html">Real Cases</a><a href="profile.php">Profile</a><a href="logout.php">Logout</a></nav></header><main><section class="page-intro compact"><p class="eyebrow">PERSONNEL DATABASE / PROFILE</p><h1>Investigator <span>profile.</span></h1><p>Your account details are saved in the Cipher Intelligence database.</p></section><section class="profile-card"><div class="profile-avatar"><?= htmlspecialchars($initials) ?></div><div><p class="eyebrow">INVESTIGATOR ID / <?= htmlspecialchars($user['investigator_id']) ?></p><h2><?= htmlspecialchars($user['name']) ?></h2><p class="muted"><?= htmlspecialchars($user['email']) ?> · Joined <?= date('F Y', strtotime($user['created_at'])) ?></p><p><?= htmlspecialchars($user['bio'] ?? '') ?></p></div><span class="tag">ACTIVE</span></section><section class="profile-edit"><p class="eyebrow">INVESTIGATION RECORD</p><h2>Your progress</h2><div class="detail-row"><span>Cases attempted</span><b><?= (int)($progress['completed_cases'] ?? 0) ?> / 15</b></div><div class="detail-row"><span>Correct deductions</span><b><?= (int)($progress['correct_cases'] ?? 0) ?></b></div><div class="detail-row"><span>Total points</span><b><?= (int)($progress['total_score'] ?? 0) ?></b></div><?php if ($completedCases): ?><h3>Completed case files</h3><ul><?php foreach ($completedCases as $case): ?><li><?= htmlspecialchars(strtoupper($case['case_id'])) ?> — <?= $case['correct'] ? 'Correct' : 'Attempted' ?> (<?= (int)$case['score'] ?> points)</li><?php endforeach; ?></ul><?php else: ?><p class="muted">No cases recorded yet. Sign in and submit an answer in a practice case to start tracking progress.</p><?php endif; ?></section><section class="profile-edit"><p class="eyebrow">EDIT PERSONNEL RECORD</p><h2>Update profile</h2><?php if ($message): ?><p class="success"><?= htmlspecialchars($message) ?></p><?php endif; ?><form method="post"><label>Investigator name</label><input name="name" maxlength="100" required value="<?= htmlspecialchars($user['name']) ?>"><label>Short bio</label><textarea name="bio" rows="4" maxlength="500"><?= htmlspecialchars($user['bio'] ?? '') ?></textarea><button class="button" type="submit">Save changes →</button></form><div class="profile-actions"><a class="button button-outline" href="training-cases.html">Solve practice cases</a><a class="text-link" href="logout.php">Logout</a></div></section></main><footer><span>© 2026 CIPHER INTELLIGENCE</span><span>PERSONNEL / <?= htmlspecialchars($user['investigator_id']) ?></span></footer></body></html>
