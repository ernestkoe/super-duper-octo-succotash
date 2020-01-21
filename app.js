const express = require('express')
const fetch = require("node-fetch");
const app = express()
const port = 3333

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function createNode(element) {
     return document.createElement(element); // Create the type of element you pass in the parameters
   }

function append(parent, el) {
return parent.appendChild(el); // Append the second parameter(element) to the first one
};

/*
fetch("https://www.eventbriteapi.com/v3/events/90048396177/attendees/", {
      "method": "GET",
      "headers": {
            "Authorization": "Bearer 4JIYZZGAAOMHFEOO7T2Z"
      }
})
.then((response) => response.json())
.then((result) => {

     var attendees = result.attendees
     var attendee_list = ''
     var name = ''
     var i = 0;
     for (i in attendees) {
          var first_name = result.attendees[i].profile.first_name
          var last_name = result.attendees[i].profile.last_name
          name = first_name + " " + last_name
          attendee_list += name + ', '
     }
     return attendees.length + " registered so far: " + attendee_list
})
//.then(console.log.bind(console))
.catch(console.error.bind(console))
*/

function poelist ( ) {

     return fetch("https://www.eventbriteapi.com/v3/events/90048396177/attendees/", {
          "method": "GET",
          "headers": {
                "Authorization": "Bearer 4JIYZZGAAOMHFEOO7T2Z"
          }
    })
    .then((response) => response.json())
    .then((result) => {
    
         var attendees = result.attendees
         var attendee_list = ''
         var AttList = new Array();
         var name = ''
         var i = 0;
         for (i in attendees) {
              var first_name = result.attendees[i].profile.first_name
              var last_name = result.attendees[i].profile.last_name
              name = first_name + " " + last_name
              //attendee_list += name + ', '
              AttList.push(name)
         }
         //return attendees.length + " registered so far: " + attendee_list
         return AttList
    })
    //.then(console.log.bind(console))
    //.catch(console.error.bind(console))
}

poelist().then(result=>console.log(result))