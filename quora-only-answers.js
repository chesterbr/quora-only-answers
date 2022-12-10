// ==UserScript==
// @name        quora-only-answers
// @namespace   chester.me
// @match       http://hayageek.com/greasemonkey-tutorial/
// @grant       none
// @version     1.0
// @author      @chesterbr
// @description Changes the filter drop-down in Quora questions from "All related (n)" to "Answers (n)", avoiding the annoying "related" questions/answers.
// @include     https://www.quora.com/*
// @noframes
// ==/UserScript==
function clickDropdown() {
    var dropdownCandidates = Array.from(document.querySelectorAll("button"));
    for (var _i = 0, dropdownCandidates_1 = dropdownCandidates; _i < dropdownCandidates_1.length; _i++) {
        var dropdown = dropdownCandidates_1[_i];
        if (dropdown.innerText.startsWith("All related")) {
            dropdown.click();
            return true;
        }
    }
    return false;
}
function clickAnswers() {
    if (!attemptToClickAnswers()) {
        window.setTimeout(clickAnswers, 100);
    }
}
var MAX_ATTEMPTS = 50;
var attemptCount = 0;
function attemptToClickAnswers() {
    var menuItems = Array.from(document.querySelectorAll("div"));
    for (var _i = 0, menuItems_1 = menuItems; _i < menuItems_1.length; _i++) {
        var menuItem = menuItems_1[_i];
        if (menuItem.innerText.startsWith("Answers (")) {
            window.setTimeout(function () {
                menuItem.click();
            }, 100);
            return true;
        }
    }
    // Menu item did not render yet; keep trying until we reach the limit
    attemptCount++;
    return attemptCount > MAX_ATTEMPTS;
}
/////// Main entry point
if (clickDropdown()) {
    clickAnswers();
}
