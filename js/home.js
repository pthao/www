// $(document).bind("pageinit", function() { 
	// $("#qMessage").html("Coming Soon... "+serviceURL);
// }); 
$(document).ready(function(){
	$("#qMessage").html("Display a quote here... Coming soon...");

	$("#prevTrigger").click(function () { 
		$("#qMessage").html("Getting previous quote... coming soon...");
    });
	$("#nextTrigger").click(function () { 
		//$("#qMessage").html("Getting next quote... coming soon...");
		var page="home.php";
		var para="action=get next quote&id=25&previousId="+$("input[name=previousId]").val();
		runServiceData(page, para, getNextQuote);
    });
});  

/*
 * 
 */
function getNextQuote(data){  
	$("#qMessage").html(data.message);
} 