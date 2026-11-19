<?php
require_once __DIR__ . '/config.php';

// Only accept form submissions.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: about.html');
    exit;
}

$name = trim($_POST['visitorName'] ?? '');
$email = trim($_POST['visitorEmail'] ?? '');
$message = trim($_POST['visitorMessage'] ?? '');

// Validate the submitted values before saving.
if (
    $name === '' || strlen($name) > 100 ||
    $email === '' || strlen($email) > 190 || !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    $message === '' || strlen($message) > 2000
) {
    header('Location: about.html?feedback=error#feedbackForm');
    exit;
}

try {
    $stmt = $pdo->prepare(
        'INSERT INTO feedback (visitor_name, visitor_email, message)
         VALUES (:name, :email, :message)'
    );

    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':message' => $message
    ]);

    header('Location: about.html?feedback=success#feedbackForm');
    exit;
} catch (PDOException $e) {
    // Keep database details out of the public page.
    error_log('Feedback save failed: ' . $e->getMessage());
    header('Location: about.html?feedback=error#feedbackForm');
    exit;
}
?>
