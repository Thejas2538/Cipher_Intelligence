// Search and filter the case files
var search = document.getElementById("caseSearch");
var filter = document.getElementById("difficultyFilter");
var cards = document.querySelectorAll(".case-card");

function showCases() {
  for (var i = 0; i < cards.length; i++) {
    var name = cards[i].innerText.toLowerCase();
    var word = search.value.toLowerCase();
    var level = cards[i].getAttribute("data-difficulty");

    if (name.includes(word) && (filter.value === "all" || filter.value === level)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

if (search && filter) {
  search.addEventListener("input", showCases);
  filter.addEventListener("change", showCases);
}

// Check the selected answer
var solveForm = document.getElementById("solveForm");
if (solveForm) {
  solveForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var answer = document.querySelector('input[name="suspect"]:checked').value;
    var result = document.getElementById("answerResult");

    if (answer === "Mira") {
      result.innerHTML = "Correct! Mira moved the blueprint. The printer record is the clue.";
    } else {
      result.innerHTML = "Not quite. Check the clues and try again.";
    }
    result.classList.remove("hidden");
  });
}


