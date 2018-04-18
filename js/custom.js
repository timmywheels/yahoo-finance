$(document).ready(function() {
    function marketStatus(){

		var date = new Date();
		var hours = date.getHours();
		var mins = date.getMinutes();
		var timeCalc = hours + (mins / 60);

		if(timeCalc >= 9.5 && timeCalc <= 16.5){
			$('p#market-status').text('US Markets are open');
		} else {
			$('p#market-status').text('US Markets are closed');
		}
	}

marketStatus();

});