import './css/styles.css'
import './images/a-step-in-the-right-direction.jpg'
import './images/stretching-exercises.png'
import './images/run.png'

import { 
  renderPageLoad,
  renderActivityData,
  activityNotesButton
} from './domUpdates';

import {
  promises,
  fetchUserData,
} from './apiCalls'


import { generateRandomUser } from './data-model/user-data';


var dailyStepsContainer = document.querySelector('.daily-steps-container')
var dailyActiveMinContainer = document.querySelector('.daily-active-min-container')
var dailyMilesContainer = document.querySelector('.daily-miles-container')
var activityNotes = document.querySelector('.display-notes-container')
// var activityForm = document.getElementById('activity-notes-id')
var activityNotesInputContainer = document.querySelector('.activity-notes-container')


let dataModel = {}


// Event listener:
window.addEventListener('load', () => {
  Promise.all(promises)
  .then(results => {
    dataModel.user = results[0]
    dataModel.activity = results[3]
    dataModel.hydration = results[1]
    dataModel.sleep = results[2]
    dataModel.currentUser = generateRandomUser(dataModel.user)
    console.log('dataModel', dataModel)
    console.log('cu', dataModel.currentUser)
  })
  .then(data => {
    renderPageLoad(dataModel)
    renderActivityData(dataModel)
  })
  .catch(error => console.log('ERROR', error))
})


document.addEventListener('click', (e) => {
  e.preventDefault()
  const targetElement = e.target;
  if (targetElement.id === 'activity-details-submit') {
    
    const flightsOfStairs = document.getElementById("input-stairs").value
    const minutesActive = document.getElementById("input-minutes").value
    const numSteps = document.getElementById("input-steps").value
    
    let newActivityData = {
      userID: dataModel.currentUser.id,
      date: '2023/07/02',
      flightsOfStairs: flightsOfStairs,
      minutesActive: minutesActive,
      numSteps: numSteps
    }
    
    const submitform = document.getElementById('activity-form')
    
    dailyStepsContainer.classList.remove('hidden')
    dailyActiveMinContainer.classList.remove('hidden')
    dailyMilesContainer.classList.remove('hidden')
    submitform.classList.add('hidden')


    postActivityData(newActivityData)
    console.log('udm', dataModel)
  }
});

const postActivityData = (newActivityData) => {
  return fetch(`http://localhost:3001/api/v1/activity`, {
      method: "POST",
      body: JSON.stringify(newActivityData),
      headers: {
          "Content-Type": "application/json"
      }
  })
  .then(response => response.json())
  .then(data => {
      fetchUserData('activity')
      .then(data => {
          dataModel.activity = data
          renderActivityData(dataModel)

      })
  })
}

activityNotesButton.addEventListener('click', () => {
  // console.log('HERE:  Hello')
  
  let activityNotesType = document.getElementById('activity-notes-type-id').value
  let activityNotesDesc = document.getElementById('activity-notes-desc-id').value

  // const notesObject = {
  //   activityType: activityNotesType,
  //   activityNotes: activityNotesDesc,
  // }



  let notesObject = {
    activityType: [],
    activityNotes: []
  }

  notesObject.activityType.push(activityNotesType)  
  notesObject.activityNotes.push(activityNotesDesc)

  window.localStorage.setItem(dataModel.currentUser.id, JSON.stringify(notesObject))
  renderActivityNotes()

  activityNotesInputContainer.innerHTML = ''
  activityNotesInputContainer.innerHTML = `
  <img class="replacement-form-image" src="images/run.png" alt="a step in the right direction logo">
  <img class="replacement-form-image" src="images/run.png" alt="a step in the right direction logo">
  <img class="replacement-form-image" src="images/run.png" alt="a step in the right direction logo">
  `
  

  // activityForm.reset()
})


const renderActivityNotes = () => {
 
  // let keys = Object.keys(localStorage)
  // console.log('keys: ', keys)
  const user = JSON.parse(localStorage.getItem(`${dataModel.currentUser.id}`))
  activityNotes.innerText = `Notes: \n ${user.activityType}: ${user.activityNotes}`
}