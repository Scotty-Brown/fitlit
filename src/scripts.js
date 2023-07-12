// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// Imports:
import userData from './data/users';
// importing the object that has 1 key-value pair of users: []

import userHydrationData from './data/hydration'

import './css/styles.css'
import './images/turing-logo.png';

import { 
  displayRandomUser, 
  displayAverageSteps,
  displayHydrationStats,
  displayFriendList,
} from './domUpdates';

import {
  getUserData,
  getAvgSteps,
  getAvgDailyOunces,
  getOzByDay,
  calculateWeeklyOunces
} from './dataModel';

// importing functionality from .domUpdates
// ./ is a relative path, the module is in the same directory as the current module file


// Query Selectors:
var userInfoContainer = document.querySelector('.user-info');
var welcomeHeading = document.querySelector('.welcome-heading');
var activityContainer = document.querySelector('.average-steps')
var friendList = document.querySelector('.friend-list')
var hydrationStats = document.querySelector('.hydration-stats')


// event listener:
window.addEventListener('load', () => {
  displayRandomUser()
  displayAverageSteps()
  getAvgDailyOunces(1)
  calculateWeeklyOunces(1)
  displayHydrationStats()
  displayFriendList()
});

export {
  // query selectors:
  userInfoContainer,
  activityContainer,
  welcomeHeading,
  friendList,
  hydrationStats,
}
