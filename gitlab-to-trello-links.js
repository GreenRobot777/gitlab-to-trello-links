// ==UserScript==
// @name         GitLab + Trello integration
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add link to Trello card if exist '#00' pattern in the commit title on GitLab commit page
// @author       GreenRobot
// @include        *://gitlab.com/*/commit/*
// @updateURL       https://raw.githubusercontent.com/profitlanding/gitlab-to-trello-links/master/gitlab-to-trello-links.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var trello_board = 'K2fhoIX4';
    var commit_title = document.getElementsByClassName('commit-title');
    var message = commit_title[0].innerHTML;
    var m = message.match(/#\s?[0-9]+/g);
    if(!m){
        // JS Regex is stupid
        m = message.match(/#[0-9]+/g);
    }
    var cardNumber = m[0].replace(/#\s?/g, '').trim();
    console.log("CardNumber : " + cardNumber);
    commit_title[0].innerHTML = message.replace(/#\s?[0-9]+/g, '<a href=https://trello.com/c/' + trello_board + '/' + cardNumber + ' target="_blank">' + m + '</a>').trim();
})();
