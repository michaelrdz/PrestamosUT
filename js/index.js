/* when a user clicks, toggle the 'is-animating' class */
$(".heart").on('click touchstart', function(){
  $(this).toggleClass('is_animating');
});

/*when the animation is over, remove the class*/
$(".heart").on('animationend', function(){
  $(this).toggleClass('is_animating');
});

/* Filtrado de tablas */
$(document).ready(function(){
		$("#kwd_search").keyup(function(){
			if( $(this).val() != ""){
				$("#my-table tbody>tr").hide();
				$("#my-table td:contains-ci('" + $(this).val() + "')").parent("tr").show();
			}else{
				$("#my-table tbody>tr").show();
			}
		});
		
	});
	$.extend($.expr[":"], {
		"contains-ci": function(elem, i, match, array) 	{
			return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
		}
	});
	
/* Rango de fechas en calendario */
$(function() {

	  $('input[name="datefilter"]').daterangepicker({
		  autoUpdateInput: false,
		  locale: {
			  cancelLabel: 'Clear',
			   format: 'YYYY-MM-DD'
		  }
	  });

	  $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
		  $(this).val(picker.startDate.format('YYYY-MM-DD') + ' / ' + picker.endDate.format('YYYY-MM-DD'));
	  });

	  $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
		  $(this).val('');
	  });

	}); 