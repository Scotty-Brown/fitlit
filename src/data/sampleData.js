const sampleData = { users: [
  {
  "id": 1,
  "name": "Trystan Gorczany",
  "address": "9484 Lucas Flat, West Kittymouth WA 67504",
  "email": "Taurean_Pollich31@gmail.com",
  "strideLength": 4,
  "dailyStepGoal": 7000,
  "friends": [
    5,
    43,
    46,
    11
  ]
  },
  {
  "id": 2,
  "name": "Tyreek VonRueden",
  "address": "623 Koelpin Skyway, Lake Luigichester MN 77576-1678",
  "email": "Nicolette_Halvorson43@yahoo.com",
  "strideLength": 4.5,
  "dailyStepGoal": 9000,
  "friends": [
    13,
    19,
    3
  ]
  },
  {
  "id": 3,
  "name": "Colt Rohan",
  "address": "48010 Balistreri Harbor, Cleobury IN 43317",
  "email": "Wilford.Barton@gmail.com",
  "strideLength": 2.7,
  "dailyStepGoal": 3000,
  "friends": [
    31,
    16,
    15,
    7
  ]
  }]
}

  const sampleDataHydration = { hydrationData: [
    {
      "userID": 1,
      "date": "2023/03/24",
      "numOunces": 28
    },
    {
      "userID": 2,
      "date": "2023/03/24",
      "numOunces": 35
    },
    {
      "userID": 3,
      "date": "2023/03/24",
      "numOunces": 95
    },
    {
      "userID": 1,
      "date": "2023/06/10",
      "numOunces": 74
    },
    {
      "userID": 2,
      "date": "2023/03/24",
      "numOunces": 47
    },
  ]}

  const weeklyDataSample = {
    hydrationData: [
      {
        "userID": 1,
        "date": "2023/03/20",
        "numOunces": 28
      },
      {
        "userID": 1,
        "date": "2023/03/21",
        "numOunces": 35
      },
      {
        "userID": 1,
        "date": "2023/03/22",
        "numOunces": 95
      },
      {
        "userID": 1,
        "date": "2023/03/23",
        "numOunces": 74
      },
      {
        "userID": 1,
        "date": "2023/03/24",
        "numOunces": 47
      },
      {
        "userID": 1,
        "date": "2023/03/25",
        "numOunces": 86
      },
      {
        "userID": 1,
        "date": "2023/03/26",
        "numOunces": 74
      },
      {
        "userID": 1,
        "date": "2023/03/27",
        "numOunces": 36
      },
      {
        "userID": 1,
        "date": "2023/03/28",
        "numOunces": 40
      },
      {
        "userID": 1,
        "date": "2023/03/29",
        "numOunces": 49
      },
      {
        "userID": 1,
        "date": "2023/03/30",
        "numOunces": 48
      },
      {
        "userID": 2,
        "date": "2023/03/20",
        "numOunces": 24
      },
      {
        "userID": 2,
        "date": "2023/03/21",
        "numOunces": 97
      },
      {
        "userID": 2,
        "date": "2023/03/22",
        "numOunces": 45
      },
      {
        "userID": 2,
        "date": "2023/03/23",
        "numOunces": 100
      },
      {
        "userID": 2,
        "date": "2023/03/24",
        "numOunces": 81
      },
      {
        "userID": 2,
        "date": "2023/03/25",
        "numOunces": 26
      },
      {
        "userID": 2,
        "date": "2023/03/26",
        "numOunces": 61
      },
      {
        "userID": 2,
        "date": "2023/03/27",
        "numOunces": 43
      },
      {
        "userID": 2,
        "date": "2023/03/28",
        "numOunces": 71
      },
      {
        "userID": 2,
        "date": "2023/03/29",
        "numOunces": 71
      },
      {
        "userID": 2,
        "date": "2023/03/30",
        "numOunces": 71
      }
  ]}

  const sampleActivityData = { activityData: [
    {userID: 1, 
    date: '2023/03/20', 
    numSteps: 7362, 
    minutesActive: 261, 
    flightsOfStairs: 26
  },
    {
      userID: 1, 
    date: '2023/03/21', 
    numSteps: 3049, 
    minutesActive: 125, 
    flightsOfStairs: 43
  },
    {
      userID: 1, 
    date: '2023/03/22', 
    numSteps: 12970, 
    minutesActive: 282, 
    flightsOfStairs: 38},
    {
      userID: 1, 
      date: '2023/03/23', 
      numSteps: 8934, 
      minutesActive: 294, 
      flightsOfStairs: 19
    },
    {
      userID: 1, 
      date: '2023/03/24', 
      numSteps: 8443, 
      minutesActive: 136, 
      flightsOfStairs: 43
    },
    {
      userID: 1, 
      date: '2023/03/25', 
      numSteps: 13297, 
      minutesActive: 116, 
      flightsOfStairs: 13
    },
    {
      userID: 1, 
      date: '2023/03/26', 
      numSteps: 7765, 
      minutesActive: 74, 
      flightsOfStairs: 31
    },
    {
      userID: 1, 
      date: '2023/03/27', 
      numSteps: 7255, 
      minutesActive: 42, 
      flightsOfStairs: 28
    },
    {
      userID: 1, 
      date: '2023/03/28', 
      numSteps: 3801, 
      minutesActive: 41, 
      flightsOfStairs: 20
    },
    {
      userID: 1, 
      date: '2023/03/29', 
      numSteps: 2145, 
      minutesActive: 168, 
      flightsOfStairs: 1
    },
    {
      userID: 1, 
      date: '2023/03/30', 
      numSteps: 5491, 
      minutesActive: 172, 
      flightsOfStairs: 26
    },
    {
      userID: 2, 
      date: '2023/03/20', 
      numSteps: 11616, 
      minutesActive: 56, 
      flightsOfStairs: 36
    },
    {
      userID: 2, 
      date: '2023/03/21', 
      numSteps: 11755, 
      minutesActive: 169, 
      flightsOfStairs: 12},
    {
      userID: 2, 
      date: '2023/03/22', 
      numSteps: 5752, 
      minutesActive: 156, 
      flightsOfStairs: 50
    },
    {
      userID: 2, 
      date: '2023/03/23', 
      numSteps: 8520, minutesActive: 70, flightsOfStairs: 24},
    {
      userID: 2, 
      date: '2023/03/24', 
      numSteps: 12102, 
      minutesActive: 155, 
      flightsOfStairs: 31
    },
    {
      userID: 2, 
      date: '2023/03/25', 
      numSteps: 7099, 
      minutesActive: 244, 
      flightsOfStairs: 49
    },
    {
      userID: 2, 
      date: '2023/03/26', 
      numSteps: 8438, 
      minutesActive: 198, 
      flightsOfStairs: 23
    },
    {
      userID: 2, 
      date: '2023/03/27', 
      numSteps: 4390, 
      minutesActive: 257, 
      flightsOfStairs: 13
    },
    {
      userID: 2, 
      date: '2023/03/28', 
      numSteps: 14724, 
      minutesActive: 279, 
      flightsOfStairs: 48
    }
    ]}

  export {
    sampleData,
    sampleDataHydration,
    weeklyDataSample,
    sampleActivityData
  }