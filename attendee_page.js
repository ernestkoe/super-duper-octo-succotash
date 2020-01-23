// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import {poelist} from 'backend/aModule';

$w.onReady(function () {
	poelist("")
      .then(myArray => {
	   // $w("#text26").text = thelist
	   //$w("#table1").rows = thelist;
	 var html = '<ul class="list">' + myArray.map(function (element) {
          if (element["name"] !== "Remove Remove") {
                    return '<li><div class="list-name">' + element["name"] +  
                    '</div><div class="list-company">' + element["company"] +  '</div></li>'
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