/*
*  Sanoh Industrial de México S.A de C.V.
   Autor: daniel.pasillas	
   Date: 23.Mayo.2018
   Description: In this file we will define the functions for handling the events for the menu section.
   				We will define functions for refreshing containers, handling push notifications and so on.
*/


var inFocus = true;
var _title = document.title;
var _limitResult = 5;

var _statusLoaded = false;

var _ajaxCompletedRefresh = false;



//Handling the onfocus event for tabs.
$(window).focus(function(){
	inFocus = true;
	document.title = _title;
	console.log("focus: " + inFocus);
	
});

//Handling the onblur event for tabs.
$(window).blur(function(){
	inFocus = false;
	console.log("blur: " + inFocus);
	
});

$(function(){

	$(".get-user-reports").on("click", function(){
		UpdateStatusForReportNotification();
		$(".total_notificaciones_issues").css("display", "none");

		refreshContainer("-1");

		//Very straightforward!
		//So... we use this validation for loading the Status information just once.
		if(!_statusLoaded)
		{
			GetReportStatus();
		}
	});
});


function UpdateStatusForReportNotification()
{
	'use strict';

	try {
		// statements
		$.ajax({
			url: 'http://sanoh-mx/api/services/update_issue_report_status.php',
			type: 'POST',
			cache: false,
			dataType: 'json',
			contentType: 'application/json; charset=utf-8',
			success: function(responseJson){
				if(responseJson.status)
				{
					console.log(responseJson.message);
				}
				else
				{
					console.log(responseJson);
				}
			},
			error : function(xhr, j, k){
				console.log("An error occurred while perfoming the request.. " + xhr.responseText);
			}
		});
	} catch(e) {
		// statements
		console.log(e);
	}
}
//-------------------------------------



$(function(){

	//Function that loads up the status when the user changes the select value.
	$(document).on("change","#filter-report-select", function(){

		var self = $(this);

		_limitResult = 5;
		refreshContainer(self.val())
	});
	//---------------------------------

	$(".container-issues-items").scroll(function(){
		
	    if((($(this).scrollTop() + $(this).innerHeight()) +10) >= $(this)[0].scrollHeight) {

	        _limitResult += 5;

	        if(!_ajaxCompletedRefresh)
	        {
	        	refreshContainer($("#filter-report-select").val());
	        }
	    };
	});
	
});



//By using this function we will be able to update or refresh the report container.
//NOTICE: This function will be executed if there is a new push notification.
//We will use the same method to refrhes and filter the information.
function refreshContainer(filterType)
{
	'use strict';

	//This var is used just in case whether users are not authenticated.
	var _continueUrl = window.location.href;

	try {

		$.ajax({
			url: 'http://sanoh-mx/api/dialogs/issues_container.php?limitResult='+_limitResult+"&filter="+filterType+"&continue="+_continueUrl,
			type:'get',
			cache: false,
			dataType: 'html',
			beforeSend: function(){
				//Add a loading effet.
	    	$(".container-issues-items").append('<div class="alert alert-warning" style="text-align:center;">Cargando...</div>');
				
				_ajaxCompletedRefresh = true;
				console.log("before sending..." + _ajaxCompletedRefresh);
				
			},
			success: function(htmlContent)
			{
				$(".container-issues-items").html(htmlContent);

			},
			error: function(xhr, r, j)
			{
				console.log(xhr.responseText);
			},
			complete: function(){
				_ajaxCompletedRefresh = false;
				console.log("Completed. : " + _ajaxCompletedRefresh);
			}
		});

	} catch(e) {
		// statements
		console.log("An error as occurred :(" + e);
	}
}	
//-------------------------------------

//Get the values of status from
function GetReportStatus()
{
	'use strict';

	try {
		// statements
		$.ajax({
			url: 'http://sanoh-mx/api/services/status.php',
			type: 'get',
			dataType: 'json',
			contentType:'application/json; charset=utf-8',
			success:function(response){
				
				var _i = JSON.parse(response.payload);
				$.each(_i, function(i, index){
					$("#filter-report-select").append('<option value="'+index.idStatus+'">'+index.statusName+'</option>');
				});

				_statusLoaded = true;
			},
			error:function(xhr, j, q){
				console.log(xhr.responseText);
			}
		});
	}catch(e) {
		// statements
		console.log(e);
	}
}
//-------------------------------------

