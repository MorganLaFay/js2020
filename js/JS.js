$(document).ready(function(){
	$('.number .process').click(function(){
		var data = $('.number .data').val();
		var isGood = iCool(data);
		$('.number .result').text(isGood);
	});
	$('.saySomeWords .process').click(function(){
		var data = $('.saySomeWords .data').val();	
		var answer = data.replaceAll('\n', '<br>');	
		$('.saySomeWords .result')[0].innerHTML = answer;
	});
	function iCool(line){
		var answer = 0;
		
		for(var i = 0; i <line.length; i++){
			var symbol = line[i];
			
			if ( isNaN(symbol)){
				answer = answer + 1;
			}
			
		}
		return answer;
		
	}
});