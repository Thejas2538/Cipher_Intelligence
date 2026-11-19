<?php
require_once __DIR__ . '/config.php';

try {
    $stmt = $pdo->query(
        'SELECT visitor_name, visitor_email, message, submitted_at
         FROM feedback
         ORDER BY submitted_at DESC, id DESC'
    );
    $feedbackEntries = $stmt->fetchAll();
} catch (PDOException $e) {
    error_log('Feedback dashboard error: ' . $e->getMessage());
    $feedbackEntries = [];
    $loadError = true;
}

function escapeOutput($value) {
    return htmlspecialchars((string)$value, ENT_QUOTES, 'UTF-8');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visitor Feedback | Cipher Intelligence</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        .feedback-dashboard { max-width: 1100px; margin: 0 auto; padding: 48px 5% 70px; }
        .feedback-heading { margin-bottom: 30px; }
        .feedback-heading h1 span { color: #d34a4f; }
        .feedback-count { color: #bdbdbd; margin-top: 10px; }
        .feedback-list { display: grid; gap: 17px; }
        .feedback-entry {
            background: linear-gradient(145deg, #202224, #181a1d);
            border: 1px solid #49383a;
            border-left: 4px solid #b43b43;
            border-radius: 10px;
            padding: 22px;
            box-shadow: 0 10px 25px rgba(0,0,0,.16);
        }
        .feedback-entry-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap; margin-bottom: 16px; }
        .feedback-entry h2 { font-size: 20px; text-align: left; margin: 0 0 6px; }
        .feedback-email, .feedback-date { color: #bdbdbd; font-size: 14px; overflow-wrap: anywhere; }
        .feedback-date { text-align: right; }
        .feedback-message { color: #eeeeee; line-height: 1.7; white-space: pre-wrap; overflow-wrap: anywhere; margin: 0; }
        .feedback-empty { background: #202224; border: 1px solid #49383a; border-radius: 10px; padding: 30px; color: #c7c7c7; }
        .admin-nav-link { color: #ff777d !important; }
        .admin-nav-link:hover { color: #ffffff !important; }
        @media (max-width: 600px) {
            .feedback-dashboard { padding: 32px 5% 50px; }
            .feedback-date { text-align: left; }
            .feedback-entry { padding: 18px; }
        }
    </style>
</head>
<body>
<header class="site-header">
    <a class="brand" href="index.html"><span class="brand-mark">C</span> CIPHER <b>INTELLIGENCE</b></a>
    <nav>
        <a href="index.html">Home</a>
        <a href="cases.html">Case Files</a>
        <a href="training-cases.html">Practice Cases</a>
        <a href="real-cases.html">Real Cases</a>
        <a href="profile.php">Profile</a>
        <a href="about.html">About</a>
        <a href="admin-feedback.php" class="admin-nav-link">Admin Feedback</a>
    </nav>
</header>

<main class="feedback-dashboard">
    <section class="feedback-heading">
        <p class="eyebrow">ADMINISTRATION / VISITOR MESSAGES</p>
        <h1>Visitor <span>feedback.</span></h1>
        <p class="feedback-count">
            <?php echo count($feedbackEntries); ?>
            <?php echo count($feedbackEntries) === 1 ? 'message' : 'messages'; ?> received
        </p>
    </section>

    <?php if (!empty($loadError)): ?>
        <div class="feedback-empty">Feedback could not be loaded. Check that MySQL is running and the feedback table exists.</div>
    <?php elseif (empty($feedbackEntries)): ?>
        <div class="feedback-empty">No feedback has been submitted yet.</div>
    <?php else: ?>
        <section class="feedback-list" aria-label="Submitted feedback">
            <?php foreach ($feedbackEntries as $entry): ?>
                <article class="feedback-entry">
                    <div class="feedback-entry-top">
                        <div>
                            <h2><?php echo escapeOutput($entry['visitor_name']); ?></h2>
                            <div class="feedback-email"><?php echo escapeOutput($entry['visitor_email']); ?></div>
                        </div>
                        <time class="feedback-date"><?php echo escapeOutput(date('d M Y, h:i A', strtotime($entry['submitted_at']))); ?></time>
                    </div>
                    <p class="feedback-message"><?php echo escapeOutput($entry['message']); ?></p>
                </article>
            <?php endforeach; ?>
        </section>
    <?php endif; ?>
</main>

<footer>
    <span>© 2026 CIPHER INTELLIGENCE</span>
    <span>ADMIN / FEEDBACK</span>
</footer>
</body>
</html>
