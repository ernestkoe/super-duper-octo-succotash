const fetch = require("node-fetch");
const dotenv = require('dotenv');
dotenv.config();

function parselist( result ) {

         let attendees = result.attendees;
         let pages = result.pagination;
         let attendee_list = "";
         let AttList = [];
         let name = "";
         let i = 0;
         for (i in attendees) {
           let first_name = result.attendees[i].profile.first_name;
           let last_name = result.attendees[i].profile.last_name;
           name = first_name + " " + last_name;
           AttList.push({ name: name });
         }
         let obj = {};
         obj={ AttList };
         return obj;
};


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
         let has_more_items = result.pagination["has_more_items"];
         let continuation = result.pagination["continuation"]
         var obj = parselist(result)
         /*
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
         //obj = {}
         obj={ AttList, has_more_items, continuation };
         */
         return obj;
       })
     //.then(console.log.bind(console))
     .catch(console.error.bind(console));
   }
   
   poelist().then(result => {
     console.log(result);
   });
   