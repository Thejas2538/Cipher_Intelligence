CIPHER INTELLIGENCE – LOCAL XAMPP SETUP
======================================

PROJECT FEATURES
- Main website built with HTML, CSS and simple JavaScript.
- 10 fictional practice cases with clues, hints, evidence illustrations and quiz answers.
- Separate real-case archive with links to official information sources.
- PHP registration, login, logout and editable investigator profile.
- MySQL database stores investigator accounts.

REQUIREMENTS
- XAMPP with Apache, PHP and MySQL/MariaDB.
- A modern browser.

INSTALL ON MAC
1. Extract the project folder into XAMPP/htdocs.
   Common location: /Applications/XAMPP/htdocs/Cipher_Intelligence
2. Open XAMPP and start Apache Web Server and MySQL Database.
3. Visit http://localhost/phpmyadmin
4. Click Import, choose this project's database.sql file, then click Go.
   The SQL file creates the cipher_intelligence database and users table.
5. Open http://localhost/Cipher_Intelligence/
6. Click Profile or visit /register.php to create an account.
7. Log in. Your profile details are stored in MySQL.

DATABASE SETTINGS
The connection settings are in config.php.
Default XAMPP settings are host=localhost, database=cipher_intelligence,
username=root and an empty password. If you set a MySQL root password,
update the $password value in config.php.

IMPORTANT
- Open the website through http://localhost/...; do not double-click PHP files.
- Do not upload real passwords or private database credentials to GitHub.
- GitHub Pages cannot run PHP/MySQL. GitHub can store this source code, but
  online PHP login requires a PHP + MySQL hosting provider.
- Fictional practice cases are invented for this project. Real-case pages are
  educational summaries and link to official sources.

PROGRESS TRACKING UPDATE
1. Keep this folder in XAMPP's htdocs directory.
2. Open http://localhost/phpmyadmin and select the cipher_intelligence database.
3. Click Import and import the updated database.sql included with this version. It creates the case_progress table without deleting existing users.
4. Log in to Cipher Intelligence before solving practice cases.
5. Submit an answer on a practice case. The page should show 'Progress saved to your investigator profile.'
6. Open Profile to see attempted cases, correct deductions and points.
Progress is saved per logged-in account. A correct answer earns 100 points; an incorrect submitted answer records the case as attempted with 0 points. Reattempting a case can improve its saved score.


BEGINNER JAVASCRIPT UPDATE
- Practice cases have been reduced to 10.
- JavaScript uses basic variables, functions, for loops and if statements.
- The quiz is a normal HTML form. PHP checks the answer and saves progress to MySQL.
- There is no fetch(), Promise, async/await, JSON request or URLSearchParams in the practice-case code.
- To save progress, log in before submitting a practice case.
