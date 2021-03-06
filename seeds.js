use flagsdb;

db.flags.remove({});


db.flags.insert([

  {
    "id": 0,
    "name": "Off",
    "flagLEDs":[
      // hardcode of off.
      // row 1
      {"position": [0, 0], "colour": "grey", "status": "off"},
      {"position": [0, 1], "colour": "grey", "status": "off"},
      {"position": [0, 2], "colour": "grey", "status": "off"},
      {"position": [0, 3], "colour": "grey", "status": "off"},
      {"position": [0, 4], "colour": "grey", "status": "off"},
      {"position": [0, 5], "colour": "grey", "status": "off"},
      {"position": [0, 6], "colour": "grey", "status": "off"},
      {"position": [0, 7], "colour": "grey", "status": "off"},
      {"position": [0, 8], "colour": "grey", "status": "off"},
      {"position": [0, 9], "colour": "grey", "status": "off"},
      {"position": [0, 10], "colour": "grey", "status": "off"},
      {"position": [0, 11], "colour": "grey", "status": "off"},
      {"position": [0, 12], "colour": "grey", "status": "off"},
      // row 2
      {"position": [1, 0], "colour": "grey", "status": "off"},
      {"position": [1, 1], "colour": "grey", "status": "off"},
      {"position": [1, 2], "colour": "grey", "status": "off"},
      {"position": [1, 3], "colour": "grey", "status": "off"},
      {"position": [1, 4], "colour": "grey", "status": "off"},
      {"position": [1, 5], "colour": "grey", "status": "off"},
      {"position": [1, 6], "colour": "grey", "status": "off"},
      {"position": [1, 7], "colour": "grey", "status": "off"},
      {"position": [1, 8], "colour": "grey", "status": "off"},
      {"position": [1, 9], "colour": "grey", "status": "off"},
      {"position": [1, 10], "colour": "grey", "status": "off"},
      {"position": [1, 11], "colour": "grey", "status": "off"},
      {"position": [1, 12], "colour": "grey", "status": "off"},
      // row 3
      {"position": [2, 0], "colour": "grey", "status": "off"},
      {"position": [2, 1], "colour": "grey", "status": "off"},
      {"position": [2, 2], "colour": "grey", "status": "off"},
      {"position": [2, 3], "colour": "grey", "status": "off"},
      {"position": [2, 4], "colour": "grey", "status": "off"},
      {"position": [2, 5], "colour": "grey", "status": "off"},
      {"position": [2, 6], "colour": "grey", "status": "off"},
      {"position": [2, 7], "colour": "grey", "status": "off"},
      {"position": [2, 8], "colour": "grey", "status": "off"},
      {"position": [2, 9], "colour": "grey", "status": "off"},
      {"position": [2, 10], "colour": "grey", "status": "off"},
      {"position": [2, 11], "colour": "grey", "status": "off"},
      {"position": [2, 12], "colour": "grey", "status": "off"},
      // row 4
      {"position": [3, 0], "colour": "grey", "status": "off"},
      {"position": [3, 1], "colour": "grey", "status": "off"},
      {"position": [3, 2], "colour": "grey", "status": "off"},
      {"position": [3, 3], "colour": "grey", "status": "off"},
      {"position": [3, 4], "colour": "grey", "status": "off"},
      {"position": [3, 5], "colour": "grey", "status": "off"},
      {"position": [3, 6], "colour": "grey", "status": "off"},
      {"position": [3, 7], "colour": "grey", "status": "off"},
      {"position": [3, 8], "colour": "grey", "status": "off"},
      {"position": [3, 9], "colour": "grey", "status": "off"},
      {"position": [3, 10], "colour": "grey", "status": "off"},
      {"position": [3, 11], "colour": "grey", "status": "off"},
      {"position": [3, 12], "colour": "grey", "status": "off"},
      // row 5
      {"position": [4, 0], "colour": "grey", "status": "off"},
      {"position": [4, 1], "colour": "grey", "status": "off"},
      {"position": [4, 2], "colour": "grey", "status": "off"},
      {"position": [4, 3], "colour": "grey", "status": "off"},
      {"position": [4, 4], "colour": "grey", "status": "off"},
      {"position": [4, 5], "colour": "grey", "status": "off"},
      {"position": [4, 6], "colour": "grey", "status": "off"},
      {"position": [4, 7], "colour": "grey", "status": "off"},
      {"position": [4, 8], "colour": "grey", "status": "off"},
      {"position": [4, 9], "colour": "grey", "status": "off"},
      {"position": [4, 10], "colour": "grey", "status": "off"},
      {"position": [4, 11], "colour": "grey", "status": "off"},
      {"position": [4, 12], "colour": "grey", "status": "off"},
      // row 6
      {"position": [5, 0], "colour": "grey", "status": "off"},
      {"position": [5, 1], "colour": "grey", "status": "off"},
      {"position": [5, 2], "colour": "grey", "status": "off"},
      {"position": [5, 3], "colour": "grey", "status": "off"},
      {"position": [5, 4], "colour": "grey", "status": "off"},
      {"position": [5, 5], "colour": "grey", "status": "off"},
      {"position": [5, 6], "colour": "grey", "status": "off"},
      {"position": [5, 7], "colour": "grey", "status": "off"},
      {"position": [5, 8], "colour": "grey", "status": "off"},
      {"position": [5, 9], "colour": "grey", "status": "off"},
      {"position": [5, 10], "colour": "grey", "status": "off"},
      {"position": [5, 11], "colour": "grey", "status": "off"},
      {"position": [5, 12], "colour": "grey", "status": "off"},
      // row 7
      {"position": [6, 0], "colour": "grey", "status": "off"},
      {"position": [6, 1], "colour": "grey", "status": "off"},
      {"position": [6, 2], "colour": "grey", "status": "off"},
      {"position": [6, 3], "colour": "grey", "status": "off"},
      {"position": [6, 4], "colour": "grey", "status": "off"},
      {"position": [6, 5], "colour": "grey", "status": "off"},
      {"position": [6, 6], "colour": "grey", "status": "off"},
      {"position": [6, 7], "colour": "grey", "status": "off"},
      {"position": [6, 8], "colour": "grey", "status": "off"},
      {"position": [6, 9], "colour": "grey", "status": "off"},
      {"position": [6, 10], "colour": "grey", "status": "off"},
      {"position": [6, 11], "colour": "grey", "status": "off"},
      {"position": [6, 12], "colour": "grey", "status": "off"},
      // row 8
      {"position": [7, 0], "colour": "grey", "status": "off"},
      {"position": [7, 1], "colour": "grey", "status": "off"},
      {"position": [7, 2], "colour": "grey", "status": "off"},
      {"position": [7, 3], "colour": "grey", "status": "off"},
      {"position": [7, 4], "colour": "grey", "status": "off"},
      {"position": [7, 5], "colour": "grey", "status": "off"},
      {"position": [7, 6], "colour": "grey", "status": "off"},
      {"position": [7, 7], "colour": "grey", "status": "off"},
      {"position": [7, 8], "colour": "grey", "status": "off"},
      {"position": [7, 9], "colour": "grey", "status": "off"},
      {"position": [7, 10], "colour": "grey", "status": "off"},
      {"position": [7, 11], "colour": "grey", "status": "off"},
      {"position": [7, 12], "colour": "grey", "status": "off"}
    ]
  },
  {
    "id": 1,
    "name": "Scotland",
    "flagLEDs":[
    // hardcode of the scotland flag.
    // row 1
    {"position": [0, 0], "colour": "white", "status": "off"},
    {"position": [0, 1], "colour": "blue", "status": "off"},
    {"position": [0, 2], "colour": "blue", "status": "off"},
    {"position": [0, 3], "colour": "blue", "status": "off"},
    {"position": [0, 4], "colour": "blue", "status": "off"},
    {"position": [0, 5], "colour": "blue", "status": "off"},
    {"position": [0, 6], "colour": "blue", "status": "off"},
    {"position": [0, 7], "colour": "blue", "status": "off"},
    {"position": [0, 8], "colour": "blue", "status": "off"},
    {"position": [0, 9], "colour": "blue", "status": "off"},
    {"position": [0, 10], "colour": "blue", "status": "off"},
    {"position": [0, 11], "colour": "blue", "status": "off"},
    {"position": [0, 12], "colour": "white", "status": "off"},
    // row 2
    {"position": [1, 0], "colour": "blue", "status": "off"},
    {"position": [1, 1], "colour": "white", "status": "off"},
    {"position": [1, 2], "colour": "blue", "status": "off"},
    {"position": [1, 3], "colour": "blue", "status": "off"},
    {"position": [1, 4], "colour": "blue", "status": "off"},
    {"position": [1, 5], "colour": "blue", "status": "off"},
    {"position": [1, 6], "colour": "blue", "status": "off"},
    {"position": [1, 7], "colour": "blue", "status": "off"},
    {"position": [1, 8], "colour": "blue", "status": "off"},
    {"position": [1, 9], "colour": "blue", "status": "off"},
    {"position": [1, 10], "colour": "blue", "status": "off"},
    {"position": [1, 11], "colour": "white", "status": "off"},
    {"position": [1, 12], "colour": "blue", "status": "off"},
    // row 3
    {"position": [2, 0], "colour": "blue", "status": "off"},
    {"position": [2, 1], "colour": "blue", "status": "off"},
    {"position": [2, 2], "colour": "white", "status": "off"},
    {"position": [2, 3], "colour": "white", "status": "off"},
    {"position": [2, 4], "colour": "blue", "status": "off"},
    {"position": [2, 5], "colour": "blue", "status": "off"},
    {"position": [2, 6], "colour": "blue", "status": "off"},
    {"position": [2, 7], "colour": "blue", "status": "off"},
    {"position": [2, 8], "colour": "blue", "status": "off"},
    {"position": [2, 9], "colour": "white", "status": "off"},
    {"position": [2, 10], "colour": "white", "status": "off"},
    {"position": [2, 11], "colour": "blue", "status": "off"},
    {"position": [2, 12], "colour": "blue", "status": "off"},
    // row 4
    {"position": [3, 0], "colour": "blue", "status": "off"},
    {"position": [3, 1], "colour": "blue", "status": "off"},
    {"position": [3, 2], "colour": "blue", "status": "off"},
    {"position": [3, 3], "colour": "blue", "status": "off"},
    {"position": [3, 4], "colour": "white", "status": "off"},
    {"position": [3, 5], "colour": "white", "status": "off"},
    {"position": [3, 6], "colour": "blue", "status": "off"},
    {"position": [3, 7], "colour": "white", "status": "off"},
    {"position": [3, 8], "colour": "white", "status": "off"},
    {"position": [3, 9], "colour": "blue", "status": "off"},
    {"position": [3, 10], "colour": "blue", "status": "off"},
    {"position": [3, 11], "colour": "blue", "status": "off"},
    {"position": [3, 12], "colour": "blue", "status": "off"},
    // row 5
    {"position": [4, 0], "colour": "blue", "status": "off"},
    {"position": [4, 1], "colour": "blue", "status": "off"},
    {"position": [4, 2], "colour": "blue", "status": "off"},
    {"position": [4, 3], "colour": "blue", "status": "off"},
    {"position": [4, 4], "colour": "blue", "status": "off"},
    {"position": [4, 5], "colour": "blue", "status": "off"},
    {"position": [4, 6], "colour": "white", "status": "off"},
    {"position": [4, 7], "colour": "blue", "status": "off"},
    {"position": [4, 8], "colour": "blue", "status": "off"},
    {"position": [4, 9], "colour": "blue", "status": "off"},
    {"position": [4, 10], "colour": "blue", "status": "off"},
    {"position": [4, 11], "colour": "blue", "status": "off"},
    {"position": [4, 12], "colour": "blue", "status": "off"},
    // row 6
    {"position": [5, 0], "colour": "blue", "status": "off"},
    {"position": [5, 1], "colour": "blue", "status": "off"},
    {"position": [5, 2], "colour": "blue", "status": "off"},
    {"position": [5, 3], "colour": "blue", "status": "off"},
    {"position": [5, 4], "colour": "white", "status": "off"},
    {"position": [5, 5], "colour": "white", "status": "off"},
    {"position": [5, 6], "colour": "blue", "status": "off"},
    {"position": [5, 7], "colour": "white", "status": "off"},
    {"position": [5, 8], "colour": "white", "status": "off"},
    {"position": [5, 9], "colour": "blue", "status": "off"},
    {"position": [5, 10], "colour": "blue", "status": "off"},
    {"position": [5, 11], "colour": "blue", "status": "off"},
    {"position": [5, 12], "colour": "blue", "status": "off"},
    // row 7
    {"position": [6, 0], "colour": "blue", "status": "off"},
    {"position": [6, 1], "colour": "white", "status": "off"},
    {"position": [6, 2], "colour": "white", "status": "off"},
    {"position": [6, 3], "colour": "white", "status": "off"},
    {"position": [6, 4], "colour": "blue", "status": "off"},
    {"position": [6, 5], "colour": "blue", "status": "off"},
    {"position": [6, 6], "colour": "blue", "status": "off"},
    {"position": [6, 7], "colour": "blue", "status": "off"},
    {"position": [6, 8], "colour": "blue", "status": "off"},
    {"position": [6, 9], "colour": "white", "status": "off"},
    {"position": [6, 10], "colour": "white", "status": "off"},
    {"position": [6, 11], "colour": "white", "status": "off"},
    {"position": [6, 12], "colour": "blue", "status": "off"},
    // row 8
    {"position": [7, 0], "colour": "white", "status": "off"},
    {"position": [7, 1], "colour": "blue", "status": "off"},
    {"position": [7, 2], "colour": "blue", "status": "off"},
    {"position": [7, 3], "colour": "blue", "status": "off"},
    {"position": [7, 4], "colour": "blue", "status": "off"},
    {"position": [7, 5], "colour": "blue", "status": "off"},
    {"position": [7, 6], "colour": "blue", "status": "off"},
    {"position": [7, 7], "colour": "blue", "status": "off"},
    {"position": [7, 8], "colour": "blue", "status": "off"},
    {"position": [7, 9], "colour": "blue", "status": "off"},
    {"position": [7, 10], "colour": "blue", "status": "off"},
    {"position": [7, 11], "colour": "blue", "status": "off"},
    {"position": [7, 12], "colour": "white", "status": "off"}
  ]
},
{
  "id": 2,
  "name": "Italy",
  "flagLEDs":[
    // hardcode of the Italy flag.
    // row 1
    {"position": [0, 0], "colour": "green", "status": "off"},
    {"position": [0, 1], "colour": "green", "status": "off"},
    {"position": [0, 2], "colour": "green", "status": "off"},
    {"position": [0, 3], "colour": "green", "status": "off"},
    {"position": [0, 4], "colour": "white", "status": "off"},
    {"position": [0, 5], "colour": "white", "status": "off"},
    {"position": [0, 6], "colour": "white", "status": "off"},
    {"position": [0, 7], "colour": "white", "status": "off"},
    {"position": [0, 8], "colour": "white", "status": "off"},
    {"position": [0, 9], "colour": "red", "status": "off"},
    {"position": [0, 10], "colour": "red", "status": "off"},
    {"position": [0, 11], "colour": "red", "status": "off"},
    {"position": [0, 12], "colour": "red", "status": "off"},
    // row 2
    {"position": [1, 0], "colour": "green", "status": "off"},
    {"position": [1, 1], "colour": "green", "status": "off"},
    {"position": [1, 2], "colour": "green", "status": "off"},
    {"position": [1, 3], "colour": "green", "status": "off"},
    {"position": [1, 4], "colour": "white", "status": "off"},
    {"position": [1, 5], "colour": "white", "status": "off"},
    {"position": [1, 6], "colour": "white", "status": "off"},
    {"position": [1, 7], "colour": "white", "status": "off"},
    {"position": [1, 8], "colour": "white", "status": "off"},
    {"position": [1, 9], "colour": "red", "status": "off"},
    {"position": [1, 10], "colour": "red", "status": "off"},
    {"position": [1, 11], "colour": "red", "status": "off"},
    {"position": [1, 12], "colour": "red", "status": "off"},
    // row 3
    {"position": [2, 0], "colour": "green", "status": "off"},
    {"position": [2, 1], "colour": "green", "status": "off"},
    {"position": [2, 2], "colour": "green", "status": "off"},
    {"position": [2, 3], "colour": "green", "status": "off"},
    {"position": [2, 4], "colour": "white", "status": "off"},
    {"position": [2, 5], "colour": "white", "status": "off"},
    {"position": [2, 6], "colour": "white", "status": "off"},
    {"position": [2, 7], "colour": "white", "status": "off"},
    {"position": [2, 8], "colour": "white", "status": "off"},
    {"position": [2, 9], "colour": "red", "status": "off"},
    {"position": [2, 10], "colour": "red", "status": "off"},
    {"position": [2, 11], "colour": "red", "status": "off"},
    {"position": [2, 12], "colour": "red", "status": "off"},
    // row 4
    {"position": [3, 0], "colour": "green", "status": "off"},
    {"position": [3, 1], "colour": "green", "status": "off"},
    {"position": [3, 2], "colour": "green", "status": "off"},
    {"position": [3, 3], "colour": "green", "status": "off"},
    {"position": [3, 4], "colour": "white", "status": "off"},
    {"position": [3, 5], "colour": "white", "status": "off"},
    {"position": [3, 6], "colour": "white", "status": "off"},
    {"position": [3, 7], "colour": "white", "status": "off"},
    {"position": [3, 8], "colour": "white", "status": "off"},
    {"position": [3, 9], "colour": "red", "status": "off"},
    {"position": [3, 10], "colour": "red", "status": "off"},
    {"position": [3, 11], "colour": "red", "status": "off"},
    {"position": [3, 12], "colour": "red", "status": "off"},
    // row 5
    {"position": [4, 0], "colour": "green", "status": "off"},
    {"position": [4, 1], "colour": "green", "status": "off"},
    {"position": [4, 2], "colour": "green", "status": "off"},
    {"position": [4, 3], "colour": "green", "status": "off"},
    {"position": [4, 4], "colour": "white", "status": "off"},
    {"position": [4, 5], "colour": "white", "status": "off"},
    {"position": [4, 6], "colour": "white", "status": "off"},
    {"position": [4, 7], "colour": "white", "status": "off"},
    {"position": [4, 8], "colour": "white", "status": "off"},
    {"position": [4, 9], "colour": "red", "status": "off"},
    {"position": [4, 10], "colour": "red", "status": "off"},
    {"position": [4, 11], "colour": "red", "status": "off"},
    {"position": [4, 12], "colour": "red", "status": "off"},
    // row 6
    {"position": [5, 0], "colour": "green", "status": "off"},
    {"position": [5, 1], "colour": "green", "status": "off"},
    {"position": [5, 2], "colour": "green", "status": "off"},
    {"position": [5, 3], "colour": "green", "status": "off"},
    {"position": [5, 4], "colour": "white", "status": "off"},
    {"position": [5, 5], "colour": "white", "status": "off"},
    {"position": [5, 6], "colour": "white", "status": "off"},
    {"position": [5, 7], "colour": "white", "status": "off"},
    {"position": [5, 8], "colour": "white", "status": "off"},
    {"position": [5, 9], "colour": "red", "status": "off"},
    {"position": [5, 10], "colour": "red", "status": "off"},
    {"position": [5, 11], "colour": "red", "status": "off"},
    {"position": [5, 12], "colour": "red", "status": "off"},
    // row 7
    {"position": [6, 0], "colour": "green", "status": "off"},
    {"position": [6, 1], "colour": "green", "status": "off"},
    {"position": [6, 2], "colour": "green", "status": "off"},
    {"position": [6, 3], "colour": "green", "status": "off"},
    {"position": [6, 4], "colour": "white", "status": "off"},
    {"position": [6, 5], "colour": "white", "status": "off"},
    {"position": [6, 6], "colour": "white", "status": "off"},
    {"position": [6, 7], "colour": "white", "status": "off"},
    {"position": [6, 8], "colour": "white", "status": "off"},
    {"position": [6, 9], "colour": "red", "status": "off"},
    {"position": [6, 10], "colour": "red", "status": "off"},
    {"position": [6, 11], "colour": "red", "status": "off"},
    {"position": [6, 12], "colour": "red", "status": "off"},
    // row 8
    {"position": [7, 0], "colour": "green", "status": "off"},
    {"position": [7, 1], "colour": "green", "status": "off"},
    {"position": [7, 2], "colour": "green", "status": "off"},
    {"position": [7, 3], "colour": "green", "status": "off"},
    {"position": [7, 4], "colour": "white", "status": "off"},
    {"position": [7, 5], "colour": "white", "status": "off"},
    {"position": [7, 6], "colour": "white", "status": "off"},
    {"position": [7, 7], "colour": "white", "status": "off"},
    {"position": [7, 8], "colour": "white", "status": "off"},
    {"position": [7, 9], "colour": "red", "status": "off"},
    {"position": [7, 10], "colour": "red", "status": "off"},
    {"position": [7, 11], "colour": "red", "status": "off"},
    {"position": [7, 12], "colour": "red", "status": "off"}
  ]
},
{
  "id": 3,
  "name":"Czech Republic",
  "flagLEDs":[
    // hardcode of the Czech Republic.
    // row 1
    {"position": [0, 0], "colour": "blue", "status": "off"},
    {"position": [0, 1], "colour": "white", "status": "off"},
    {"position": [0, 2], "colour": "white", "status": "off"},
    {"position": [0, 3], "colour": "white", "status": "off"},
    {"position": [0, 4], "colour": "white", "status": "off"},
    {"position": [0, 5], "colour": "white", "status": "off"},
    {"position": [0, 6], "colour": "white", "status": "off"},
    {"position": [0, 7], "colour": "white", "status": "off"},
    {"position": [0, 8], "colour": "white", "status": "off"},
    {"position": [0, 9], "colour": "white", "status": "off"},
    {"position": [0, 10], "colour": "white", "status": "off"},
    {"position": [0, 11], "colour": "white", "status": "off"},
    {"position": [0, 12], "colour": "white", "status": "off"},
    // row 2
    {"position": [1, 0], "colour": "blue", "status": "off"},
    {"position": [1, 1], "colour": "blue", "status": "off"},
    {"position": [1, 2], "colour": "white", "status": "off"},
    {"position": [1, 3], "colour": "white", "status": "off"},
    {"position": [1, 4], "colour": "white", "status": "off"},
    {"position": [1, 5], "colour": "white", "status": "off"},
    {"position": [1, 6], "colour": "white", "status": "off"},
    {"position": [1, 7], "colour": "white", "status": "off"},
    {"position": [1, 8], "colour": "white", "status": "off"},
    {"position": [1, 9], "colour": "white", "status": "off"},
    {"position": [1, 10], "colour": "white", "status": "off"},
    {"position": [1, 11], "colour": "white", "status": "off"},
    {"position": [1, 12], "colour": "white", "status": "off"},
    // row 3
    {"position": [2, 0], "colour": "blue", "status": "off"},
    {"position": [2, 1], "colour": "blue", "status": "off"},
    {"position": [2, 2], "colour": "blue", "status": "off"},
    {"position": [2, 3], "colour": "white", "status": "off"},
    {"position": [2, 4], "colour": "white", "status": "off"},
    {"position": [2, 5], "colour": "white", "status": "off"},
    {"position": [2, 6], "colour": "white", "status": "off"},
    {"position": [2, 7], "colour": "white", "status": "off"},
    {"position": [2, 8], "colour": "white", "status": "off"},
    {"position": [2, 9], "colour": "white", "status": "off"},
    {"position": [2, 10], "colour": "white", "status": "off"},
    {"position": [2, 11], "colour": "white", "status": "off"},
    {"position": [2, 12], "colour": "white", "status": "off"},
    // row 4
    {"position": [3, 0], "colour": "blue", "status": "off"},
    {"position": [3, 1], "colour": "blue", "status": "off"},
    {"position": [3, 2], "colour": "blue", "status": "off"},
    {"position": [3, 3], "colour": "blue", "status": "off"},
    {"position": [3, 4], "colour": "white", "status": "off"},
    {"position": [3, 5], "colour": "white", "status": "off"},
    {"position": [3, 6], "colour": "white", "status": "off"},
    {"position": [3, 7], "colour": "white", "status": "off"},
    {"position": [3, 8], "colour": "white", "status": "off"},
    {"position": [3, 9], "colour": "white", "status": "off"},
    {"position": [3, 10], "colour": "white", "status": "off"},
    {"position": [3, 11], "colour": "white", "status": "off"},
    {"position": [3, 12], "colour": "white", "status": "off"},
    // row 5
    {"position": [4, 0], "colour": "blue", "status": "off"},
    {"position": [4, 1], "colour": "blue", "status": "off"},
    {"position": [4, 2], "colour": "blue", "status": "off"},
    {"position": [4, 3], "colour": "blue", "status": "off"},
    {"position": [4, 4], "colour": "red", "status": "off"},
    {"position": [4, 5], "colour": "red", "status": "off"},
    {"position": [4, 6], "colour": "red", "status": "off"},
    {"position": [4, 7], "colour": "red", "status": "off"},
    {"position": [4, 8], "colour": "red", "status": "off"},
    {"position": [4, 9], "colour": "red", "status": "off"},
    {"position": [4, 10], "colour": "red", "status": "off"},
    {"position": [4, 11], "colour": "red", "status": "off"},
    {"position": [4, 12], "colour": "red", "status": "off"},
    // row 6
    {"position": [5, 0], "colour": "blue", "status": "off"},
    {"position": [5, 1], "colour": "blue", "status": "off"},
    {"position": [5, 2], "colour": "blue", "status": "off"},
    {"position": [5, 3], "colour": "red", "status": "off"},
    {"position": [5, 4], "colour": "red", "status": "off"},
    {"position": [5, 5], "colour": "red", "status": "off"},
    {"position": [5, 6], "colour": "red", "status": "off"},
    {"position": [5, 7], "colour": "red", "status": "off"},
    {"position": [5, 8], "colour": "red", "status": "off"},
    {"position": [5, 9], "colour": "red", "status": "off"},
    {"position": [5, 10], "colour": "red", "status": "off"},
    {"position": [5, 11], "colour": "red", "status": "off"},
    {"position": [5, 12], "colour": "red", "status": "off"},
    // row 7
    {"position": [6, 0], "colour": "blue", "status": "off"},
    {"position": [6, 1], "colour": "blue", "status": "off"},
    {"position": [6, 2], "colour": "red", "status": "off"},
    {"position": [6, 3], "colour": "red", "status": "off"},
    {"position": [6, 4], "colour": "red", "status": "off"},
    {"position": [6, 5], "colour": "red", "status": "off"},
    {"position": [6, 6], "colour": "red", "status": "off"},
    {"position": [6, 7], "colour": "red", "status": "off"},
    {"position": [6, 8], "colour": "red", "status": "off"},
    {"position": [6, 9], "colour": "red", "status": "off"},
    {"position": [6, 10], "colour": "red", "status": "off"},
    {"position": [6, 11], "colour": "red", "status": "off"},
    {"position": [6, 12], "colour": "red", "status": "off"},
    // row 8
    {"position": [7, 0], "colour": "blue", "status": "off"},
    {"position": [7, 1], "colour": "red", "status": "off"},
    {"position": [7, 2], "colour": "red", "status": "off"},
    {"position": [7, 3], "colour": "red", "status": "off"},
    {"position": [7, 4], "colour": "red", "status": "off"},
    {"position": [7, 5], "colour": "red", "status": "off"},
    {"position": [7, 6], "colour": "red", "status": "off"},
    {"position": [7, 7], "colour": "red", "status": "off"},
    {"position": [7, 8], "colour": "red", "status": "off"},
    {"position": [7, 9], "colour": "red", "status": "off"},
    {"position": [7, 10], "colour": "red", "status": "off"},
    {"position": [7, 11], "colour": "red", "status": "off"},
    {"position": [7, 12], "colour": "red", "status": "off"}
  ]

}

]
)
