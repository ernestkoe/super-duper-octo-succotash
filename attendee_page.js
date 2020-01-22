// For full API documentation, including code examples, visit https://wix.to/94BuAAs
// this is a wix thing
import {poelist} from 'backend/aModule';

$w.onReady(function () {
	poelist()
      .then(thelist => {
	   // $w("#text26").text = thelist
	   $w("#table1").rows = thelist;
	   $w("#attendeelist").postMessage(thelist);
	   //console.log(thelist);
	      // Logs: 20
	})
	.catch(error => {
		console.log(error);
	});
});