// Get the parts of the page that we need.
var grid = document.getElementById("trainingGrid");
var searchBox = document.getElementById("caseSearch");
var difficultyBox = document.getElementById("difficultyFilter");
var noResults = document.getElementById("noResults");

// Show the practice cases.
function showCases() {
    if (grid == null) {
        return;
    }

    var searchWord = "";
    var selectedLevel = "all";

    if (searchBox != null) {
        searchWord = searchBox.value.toLowerCase();
    }

    if (difficultyBox != null) {
        selectedLevel = difficultyBox.value;
    }

    var output = "";
    var count = 0;

    for (var i = 0; i < trainingCases.length; i++) {
        var oneCase = trainingCases[i];
        var caseText = (oneCase.title + " " + oneCase.summary + " " + oneCase.type).toLowerCase();

        if (caseText.indexOf(searchWord) !== -1 &&
            (selectedLevel == "all" || selectedLevel == oneCase.level)) {

            count = count + 1;

            output = output +
                '<article class="case-card">' +
                '<div class="case-card-top"><span class="tag">' + oneCase.id.toUpperCase() + '</span>' +
                '<span class="difficulty">' + oneCase.level.toUpperCase() + '</span></div>' +
                '<img class="case-image" src="images/' + oneCase.image + '" alt="' + oneCase.imageAlt + '">' +
                '<h2>' + oneCase.title + '</h2>' +
                '<p>' + oneCase.summary + '</p>' +
                '<div class="card-bottom"><span>' + oneCase.clues.length + ' clues · quiz</span>' +
                '<a href="training-case.html?id=' + oneCase.id + '">Open file →</a></div>' +
                '</article>';
        }
    }

    grid.innerHTML = output;

    if (noResults != null) {
        if (count == 0) {
            noResults.classList.remove("hidden");
        } else {
            noResults.classList.add("hidden");
        }
    }
}

// Run the search when the user types or changes difficulty.
if (searchBox != null) {
    searchBox.addEventListener("input", showCases);
}
if (difficultyBox != null) {
    difficultyBox.addEventListener("change", showCases);
}

showCases();

// Read the case ID from the web address.
var detail = document.getElementById("caseDetail");

if (detail != null) {
    var address = window.location.search;
    var caseId = "ci-001";

    if (address.indexOf("id=") != -1) {
        caseId = address.split("id=")[1].split("&")[0];
    }

    var currentCase = null;

    // Find the selected case.
    for (var j = 0; j < trainingCases.length; j++) {
        if (trainingCases[j].id == caseId) {
            currentCase = trainingCases[j];
        }
    }

    if (currentCase == null) {
        detail.innerHTML = '<div class="case-detail-panel"><h1>Case not found</h1>' +
            '<a class="button" href="training-cases.html">Back to cases</a></div>';
    } else {
        var peopleHTML = "";
        var cluesHTML = "";
        var optionsHTML = "";

        // Show the people involved.
        for (var p = 0; p < currentCase.people.length; p++) {
            peopleHTML = peopleHTML +
                '<article class="suspect"><div class="avatar">' +
                currentCase.people[p][0].charAt(0) + '</div><div><h3>' +
                currentCase.people[p][0] + '</h3><p class="muted">' +
                currentCase.people[p][1] + '</p><p>' +
                currentCase.people[p][2] + '</p></div></article>';
        }

        // Show the evidence clues.
        for (var k = 0; k < currentCase.clues.length; k++) {
            cluesHTML = cluesHTML +
                '<div class="clue-card"><b>Evidence ' + (k + 1) + ' / ' +
                currentCase.clues[k][0] + '</b><p>' +
                currentCase.clues[k][1] + '</p></div>';
        }

        // Show the answer choices.
        for (var q = 0; q < currentCase.options.length; q++) {
            optionsHTML = optionsHTML +
                '<label class="quiz-option"><input type="radio" name="answer" value="' +
                q + '" required><span>' + currentCase.options[q] + '</span></label>';
        }

        detail.innerHTML =
            '<section class="page-intro compact"><p class="eyebrow">FICTIONAL TRAINING FILE / ' +
            currentCase.id.toUpperCase() + '</p><h1>' + currentCase.title + '.</h1><p>' +
            currentCase.type + ' · Difficulty: ' + currentCase.level + '</p></section>' +
            '<div class="disclaimer">FICTIONAL CASE — names, events and evidence are invented.</div>' +
            '<div class="case-detail-grid"><section>' +
            '<div class="case-detail-panel"><h2>Case summary</h2><p>' + currentCase.story +
            '</p><img class="case-image" src="images/' + currentCase.image +
            '" alt="' + currentCase.imageAlt + '"></div>' +
            '<div class="case-detail-panel"><p class="eyebrow">PERSONS OF INTEREST</p>' +
            '<h2>People involved</h2><div class="suspect-grid">' + peopleHTML + '</div></div>' +
            '<div class="case-detail-panel"><p class="eyebrow">RECOVERED MATERIAL</p>' +
            '<h2>Evidence board</h2>' + cluesHTML + '</div>' +
            '<div class="case-detail-panel"><p class="eyebrow">FINAL DEDUCTION</p>' +
            '<h2>' + currentCase.question + '</h2><button type="button" class="button button-outline" id="hintButton">Show hint</button>' +
            '<p id="hintBox" class="hint-box hidden">' + currentCase.hint + '</p>' +
            '<form method="post" action="save_progress.php">' + optionsHTML +
            '<input type="hidden" name="case_id" value="' + currentCase.id + '">' +
            '<input type="hidden" name="correct_answer" value="' + currentCase.answer + '">' +
            '<button class="button" type="submit">Submit answer →</button></form>' +
            '<div id="quizResult" class="quiz-result hidden"></div></div></section>' +
            '<aside><div class="case-detail-panel"><p class="eyebrow">CASE DETAILS</p>' +
            '<div class="detail-row"><span>Case ID</span><b>' + currentCase.id.toUpperCase() + '</b></div>' +
            '<div class="detail-row"><span>Difficulty</span><b>' + currentCase.level + '</b></div>' +
            '<div class="detail-row"><span>Evidence items</span><b>' + currentCase.clues.length + '</b></div>' +
            '<div class="detail-row"><span>Mode</span><b>Practice quiz</b></div>' +
            '<a class="button full" href="training-cases.html">All practice cases</a></div>' +
            '<div class="note"><b>Investigator reminder</b><p>Use the evidence to support your answer.</p></div></aside></div>';

        // Show or hide the hint.
        var hintButton = document.getElementById("hintButton");
        hintButton.addEventListener("click", function () {
            var hint = document.getElementById("hintBox");
            hint.classList.toggle("hidden");
        });

        // Show the result after PHP saves the answer.
        if (address.indexOf("result=correct") != -1 ||
            address.indexOf("result=incorrect") != -1) {
            var result = document.getElementById("quizResult");
            result.classList.remove("hidden");

            if (address.indexOf("result=correct") != -1) {
                result.innerHTML = "<b>Correct deduction!</b><p>" +
                    currentCase.explanation + "</p><p class='success'>Progress saved to your profile.</p>";
            } else {
                result.innerHTML = "<b>Not quite. Review the evidence.</b><p>" +
                    currentCase.explanation + "</p><p class='success'>Your attempt was saved to your profile.</p>";
            }
        }
    }
}
