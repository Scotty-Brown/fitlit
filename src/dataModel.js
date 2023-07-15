var currentUser

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.users.length)
}

const generateRandomUser = (array) =>{
  const randomUserIndex = getRandomIndex(array)
  const userDataInfo = getUserData(randomUserIndex, array)
  currentUser = userDataInfo
  return currentUser
}

const getUserData = ((userId, dataList) => {
  let filteredById = dataList.users.find(user => user.id === userId);
  return filteredById
});

const getTodaysDate = ((id, dataList) => {
  let today;

  if (dataList.hydrationData) {
    today = dataList.hydrationData.filter(log => log.userID === id);
    
  } else if (dataList.sleepData) {
    today = dataList.sleepData.filter(log => log.userID === id);
    

  } else if(dataList.activityData) {
    today = dataList.activityData.filter(log => log.userID === id);
    
  }

  today = today[today.length - 1]
  return today.date
});

const getAvgSteps = (dataList) => {
let sumOfSteps = dataList.users.reduce((sum, user) => {
  sum += user.dailyStepGoal
  return sum
  }, 0)
    return sumOfSteps / dataList.users.length
}

const getAvgDailyOunces = (id, dataList) => {
const usersDailyHydrationLog = dataList.hydrationData
let numOfEntries = []
const userHydrationStats = usersDailyHydrationLog.reduce((accum, userObj) => {
  if (userObj.userID === id) {
    numOfEntries.push(userObj.userID)
    accum += userObj.numOunces
  }
  return accum
}, 0)
return userHydrationStats / numOfEntries.length
}

const getOzByDay = (id, day, dataList) => {
  const usersDailyHydrationLog = dataList.hydrationData
  const usersDailyOz = usersDailyHydrationLog.find(log => log.userID === id && log.date === day)
  if(usersDailyOz) {
    return usersDailyOz.numOunces
    }
}

const calculateWeeklyOunces = (id, dataList) => {
  const usersDailyHydrationLog = dataList.hydrationData
  let userWaterEntries = usersDailyHydrationLog.filter((entry) => {
    return entry.userID === id
  })
  
  const lastSevenDays = userWaterEntries.slice(-7)

  const weeklyHydrationInfo = lastSevenDays.reduce ((accu, curr) => {
    accu.ounces.push(curr.numOunces)
    accu.dates.push(curr.date)
    return accu
  }, {ounces: [], dates: []})
  
  return weeklyHydrationInfo
}

const sleepAmountByDay = (id, day, dataList) => {
  const usersDailySleepLog = dataList.sleepData
  const usersDailySleepAmount = usersDailySleepLog.find(log => log.userID === id && log.date === day)
  if(usersDailySleepAmount) {
    return usersDailySleepAmount.hoursSlept
  }
}

const sleepQualityByDay = (id, day, dataList) => {
  const usersDailySleepLog = dataList.sleepData
  const usersDailySleepQuality = usersDailySleepLog.find(log => log.userID === id && log.date === day)
    if(usersDailySleepQuality) {
      return usersDailySleepQuality.sleepQuality
    }
}

const calculateUserAvgDailyHoursSlept = (id, dataList) => {
    const usersDailySleepLog = dataList.sleepData
    let entries = []
    const userSleepStats = usersDailySleepLog.reduce((accum, userObj) => {
      if (userObj.userID === id) {
        entries.push(userObj.userID)
        accum += userObj.hoursSlept
      }
      return accum
    }, 0)
    let userAvgSleep = userSleepStats / entries.length
    return userAvgSleep.toFixed(2)
  }

const calculateUserAvgSleepQuality = (id, dataList) => {
    const usersDailySleepQualityLog = dataList.sleepData
    let entries = []
    const userSleepQualityStats = usersDailySleepQualityLog.reduce((accum, userObj) => {
      if (userObj.userID === id) {
        entries.push(userObj.userID)
        accum += userObj.sleepQuality
      }
      return accum
    }, 0)
    let userAvgSleepQual = userSleepQualityStats / entries.length
    
    return userAvgSleepQual.toFixed(2)
  }

// function breakDownToWeeklyStatsArray(id, dataList, startDate) {

//   const  makeWeeklyArray = () => {
//   let sleepDataByID = dataList.sleepData.filter((entry) => entry.userID === id)

//   let startDateEntry = sleepDataByID.find((log) => log.date === startDate)
//   let entryPosition = sleepDataByID.indexOf(startDateEntry)

//   let weeklyUserData = sleepDataByID.slice(entryPosition, entryPosition + 7)
//   return weeklyUserData
//   }
//   return makeWeeklyArray
// }

const breakDownToWeeklyStatsArray = (id, dataList, startDate) => {
  const makeWeeklyArray = () => {
    const todaysDate = getTodaysDate(id, dataList);
    const sleepDataByID = dataList.sleepData.filter((entry) => entry.userID === id);

    const startDateEntry = sleepDataByID.find((log) => log.date === startDate && todaysDate !== startDate);
    if (startDateEntry) {
      const entryPosition = sleepDataByID.indexOf(startDateEntry);
      const weeklyUserData = sleepDataByID.slice(entryPosition, entryPosition + 7);
      console.log('weeklyUserData: ', weeklyUserData)
      return weeklyUserData;
    }

    const todaysDateEntry = sleepDataByID.find((log) => log.date === startDate && todaysDate === startDate);
    if (todaysDateEntry) {
      const entryPosition = sleepDataByID.indexOf(todaysDateEntry);
      const weeklyUserData = sleepDataByID.slice(entryPosition - 7, entryPosition);
      console.log('weeklyUserData: ', weeklyUserData)
      return weeklyUserData;
    }

    return []; // Return an empty array if no matching entries are found
  };

  return makeWeeklyArray;
};

const getWeeklySleepQualityStats = (id, dataList, startDate) => {
  const currentUserWeeklySleepData = breakDownToWeeklyStatsArray(id, dataList, startDate)
  const weeklyUserData = currentUserWeeklySleepData()

  let sleepQualityWeeklyStats = weeklyUserData.reduce((a, c) => {
      a.day.push(c.date)
      a.sleepQuality.push(c.sleepQuality)
    return a
  }, {day: [], sleepQuality: []})

  return sleepQualityWeeklyStats
}

const getWeeklySleepStats = (id, dataList, startDate) => {
    let currentUserWeeklySleepData = breakDownToWeeklyStatsArray(id, dataList, startDate)
    let weeklyUserData = currentUserWeeklySleepData()
  
    let sleepHoursWeeklyStats = weeklyUserData.reduce((a, c) => {
      a.day.push(c.date)
      a.sleepHours.push(c.hoursSlept)
    return a
  }, {day: [], sleepHours: []})
  
    return sleepHoursWeeklyStats
  }

const calculateDailyMilesWalked = (id, day, dataList1, dataList2) => {
  const userLog = dataList1.users
  const userStrideData = userLog.find(log => id === log.id)
  const userStride = userStrideData.strideLength

  const activityLog = dataList2.activityData
  const userStepData = activityLog.find(log => log.userID === id && log.date === day)
  const userDailyStep = userStepData.numSteps
  const walkedMiles = (userStride * userDailyStep)/5280
  return walkedMiles.toFixed(2)
}

const calculateMinutesActive = (id, day, dataList) => {
  const activityLog = dataList.activityData
  const activeMinutes = activityLog.find(log => log.userID === id && log.date === day)
  return activeMinutes.minutesActive
}

const checkIfStepGoalWasMade = (id, day, dataList1, dataList2) => {
  const userLog = dataList1.users
  const userData = userLog.find(log => id === log.id)
  const userStepGoal = userData.dailyStepGoal

  const activityLog = dataList2.activityData
  const userStepData = activityLog.find(log => log.userID === id && log.date === day)
  const userDailyStep = userStepData.numSteps
  
  if(userDailyStep >= userStepGoal) {
    return true
  }
}

const getDailySteps = (id, day, dataList) => {
  const activityLog = dataList.activityData 
  const dailySteps = activityLog.find(log => log.userID === id && log.date === day)

  return dailySteps.numSteps
}

export {
  getUserData,
  getAvgSteps,
  getAvgDailyOunces,
  getOzByDay,
  calculateWeeklyOunces,
  getRandomIndex,
  generateRandomUser,
  sleepAmountByDay, 
  sleepQualityByDay,
  calculateDailyMilesWalked,
  calculateUserAvgDailyHoursSlept,
  calculateUserAvgSleepQuality,
  getWeeklySleepStats,
  calculateMinutesActive,
  checkIfStepGoalWasMade,
  getWeeklySleepQualityStats,
  getTodaysDate,
  getDailySteps,
  breakDownToWeeklyStatsArray
}