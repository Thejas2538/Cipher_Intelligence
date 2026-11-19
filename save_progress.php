<?php
require_once __DIR__ . '/auth.php';

// The answer is sent using a normal HTML form.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: training-cases.html');
    exit;
}

// A user must log in before progress can be saved.
if (empty($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

$caseId = $_POST['case_id'] ?? '';
$answer = $_POST['answer'] ?? '';
$correctAnswer = $_POST['correct_answer'] ?? '';

// Check that the case ID and answer are valid.
if (!preg_match('/^ci-(00[1-9]|010)$/', $caseId) ||
    !is_numeric($answer) || !is_numeric($correctAnswer)) {
    exit('Invalid answer. Please go back and try again.');
}

$correct = ((int)$answer === (int)$correctAnswer) ? 1 : 0;
$score = $correct ? 100 : 0;

try {
    $sql = "INSERT INTO case_progress
            (user_id, case_id, completed, correct, score, completed_at)
            VALUES (?, ?, 1, ?, ?, NOW())
            ON DUPLICATE KEY UPDATE
            completed = 1,
            correct = GREATEST(correct, VALUES(correct)),
            score = GREATEST(score, VALUES(score)),
            completed_at = IF(VALUES(score) >= score, NOW(), completed_at)";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([$_SESSION['user_id'], $caseId, $correct, $score]);

    // Return to the same case and show the result.
    $result = $correct ? 'correct' : 'incorrect';
    header('Location: training-case.html?id=' . $caseId . '&result=' . $result);
    exit;
} catch (PDOException $e) {
    exit('Could not save progress. Check that database.sql has been imported.');
}
?>
