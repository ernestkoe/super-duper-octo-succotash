const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();
// console.log(process.env.API_AUTH)

function poelist() {
     return fetch(
      process.env.API_URL,
       {
         method: "GET",
         headers: {
           Authorization: process.env.API_AUTH
         }
       }
     )
       .then(response => response.json())
       .then(result => {
         var attendees = result.attendees;
         var pages = result.pagination;
         var attendee_list = "";
         var AttList = [];
         var name = "";
         var i = 0;
         for (i in attendees) {
           var first_name = result.attendees[i].profile.first_name;
           var last_name = result.attendees[i].profile.last_name;
           name = first_name + " " + last_name;
           AttList.push({ name: name });
         }
         obj = {}
         obj={ Attendees:AttList, Page: pages }
         return obj;
       });
     //.then(console.log.bind(console))
     //.catch(console.error.bind(console))
   }
   
   poelist().then(result => {
     console.log(result);
   });
   