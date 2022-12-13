// ==UserScript==
// @name        quora-only-answers
// @namespace   chester.me
// @match       https://www.quora.com/*
// @grant       none
// @version     1.0
// @author      @chesterbr
// @supportURL  https://github.com/chesterbr/quora-only-answers/issues
// @license     MIT
// @description Changes the filter drop-down in Quora questions from "All related (n)" to "Answers (n)", avoiding the annoying "related" questions/answers.
// @noframes
// ==/UserScript==

function clickDropdown() {
  var dropdownCandidates = Array.from(document.querySelectorAll("button"))
  for (var dropdown of dropdownCandidates) {
    if (dropdown.innerText.startsWith("All related")) {
      dropdown.click()
      return true
    }
  }
  return false
}

function clickAnswers() {
  if (!attemptToClickAnswers()) {
    window.setTimeout(clickAnswers, 100)
  }
}

const MAX_ATTEMPTS = 50
var attemptCount = 0
function attemptToClickAnswers() {
  var menuItems = Array.from(document.querySelectorAll("div"))
  for (var menuItem of menuItems) {
    if (
      menuItem.innerText.startsWith("Answer (") ||
      menuItem.innerText.startsWith("Answers (")
    ) {
      window.setTimeout(() => {
        menuItem.click()
      }, 100)
      return true
    }
  }
  // Menu item did not render yet; keep trying until we reach the limit
  attemptCount++
  return attemptCount > MAX_ATTEMPTS
}

/////// Main entry point

if (clickDropdown()) {
  clickAnswers()
}
