//var serviceURL = "http://kronos.nuterrallc.com/phia/ZendStudio/Mobile3/DailyQuotes/services/";
var serviceURL = "http://216.235.70.32/phia/ZendStudio/Mobile3/DailyQuotes/services/";				//Aether

//1. Database name, version #, description, estimated size of database
var db = openDatabase('dailyQuotes', '1.0', 'my first database', 2 * 1024 * 1024);	
/*****************************************************
 NOTE: Return data type is json
******************************************************/
function runServiceData(page, para, callBackFunction){
	$.mobile.loading( 'show');
	$.ajax({  
		type: "GET",  
		url: serviceURL+page,  
		data: para,  
		dataType: "json",  
		success: function(data){  
			callBackFunction(data);
			$.mobile.loading( "hide" );
		},
		error: function(jqXHR, exception) {
			if (jqXHR.status === 0) {
				alert('Not connect.\n Verify Network.');
			} else if (jqXHR.status == 404) {
				alert('Requested page not found. [404]');
			} else if (jqXHR.status == 500) {
				alert('Internal Server Error [500].\n Uncaught Error: '+jqXHR.responseText);
			} else if (exception === 'parsererror') {
				alert('Requested JSON parse failed.');
			} else if (exception === 'timeout') {
				alert('Time out error.');
			} else if (exception === 'abort') {
				alert('Ajax request aborted.');
			} else {
				alert('Uncaught Error.\n' + jqXHR.responseText);
			}
		}    
	}); 
}