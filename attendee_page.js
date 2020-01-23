// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import {Poelist} from 'backend/aModule';

$w.onReady(function () {
Poelist()
      .then(myArray => {
      const attcount = myArray.length;
	 var html = '<div class="attcount">' + attcount + ' attendees</div>' + '<ul class="list">' + myArray.map(function (element) {
          let company = (typeof element["company"] === 'undefined') ? 'N/A': element["company"];
          if ( element["name"] !== "Remove Remove") {
                    return '</div><li><div class="list-item"><div class="list-name">' + element["name"] +  
                    '</div><div class="list-company">' + company +  '</div></div></li>'
               }
     }).join('') + '</ul>';
	   $w("#attendeelist").postMessage(html);
	   console.log(html);
	      // Logs: 20
	})
	.catch(error => {
		console.log(error);
	})
});