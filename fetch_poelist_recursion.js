const fetch = require("node-fetch");
const dotenv = require('dotenv');
dotenv.config();

function parselist(result) {

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
    
     return AttList
};

function poelist(continuation, acc = []) {

     let url = (continuation === "") ?
          process.env.API_URL :
          process.env.API_URL + "?continuation=" + continuation;

     console.log(url) //comment me out later
     return fetch(
          url,
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
               let attendeespage = parselist(result)
               const newacc = acc.concat(attendeespage)
               console.log(newacc)

               if (has_more_items) {
                    poelist(continuation, newacc)
               }

               else {
                    return newacc
               }
          })
          //.then(console.log.bind(console))
          .catch(console.error.bind(console));
}

// call it
poelist("").then(result => {
     console.log(result);
});
