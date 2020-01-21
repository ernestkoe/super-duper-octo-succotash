#// Filename: backend/aModule.jsw (web modules need to have a .jsw extension)  import { fetch } from 'wix-fetch';  export function poelist() {  	return fetch("https://www.eventbriteapi.com/v3/events/90048396177/attendees/", { 		"method": "GET", 		"headers": { 			"Authorization": "Bearer 4JIYZZGAAOMHFEOO7T2Z" 		} 	}). 	then((res) => res.json()) 		.then((result) => { 			var attendees = result.attendees 			var attendee_list = '' 			var name = '' 			var i = 0; 			for (i in attendees) { 				var first_name = result.attendees[i].profile.first_name 				var last_name = result.attendees[i].profile.last_name 				name = first_name + " " + last_name 				attendee_list += name + ', ' 			} 			return attendee_list; 		}); }  //Use the following code in one of your site's front-end files //to call the multiply function from backend/aModule.jsw.  /*  import {multiply} from 'backend/aModule';  $w.onReady(function () { 	 	multiply(4,5).then(product => { 	    console.log(product); 	      // Logs: 20 	}) 	.catch(error => { 		console.log(error); 	}); }); */