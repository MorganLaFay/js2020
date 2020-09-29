$(document).ready(function(){
	$('.polindrom .process') .click(function(){
		var data = $('.polindrom .data') .val();
		var answer = isPolindrom(data) ;
		$('.polindrom .result') [0].innerHTML = answer ;
	});
	function isPolindrom(line){
		var answer = 0;
		
		for(var i = 0; i <line.length/2; i++){
			var nomerStart = i;
			var nomerEnd = line.length - 1 -i;
			if (line[nomerStart] !== line[nomerEnd]) {
				return false;
			}
		}
		return true;		
	}
	$('.fibonacci .process') .click(function(){
		
		var data = $('.fibonacci .data') .val();
		var answer = isFibonacci(data) ;
		$('.fibonacci .result') [0].innerHTML = answer ;
	});
	function isFibonacci(num){
		var allF = [0,1];
		
		for(var i = 2; i <num; i++) {
			allF[i] = allF[i-1] + allF[i-2];
		}
		
		return allF;
	}
	
	
	$('.min .process').click(function(){
		var data = $('.min .data') ;
		var answer = minNumb(num) ;
		$('.min .result').text(answer) ;
	});
	function minNumb(num){
		
	}
	
	
	
	
	
	$('.littleBig .process') .click(function(){
		var data = $('.littleBig .data') .val();
		var answer = isLittleBig(data) ;
		$('.littleBig .result') [0].innerHTML = answer ;
	});
	
	function isLittleBig(line){
		var newLine = [];
		newLine[0] = line[0].toUpperCase();
		newLine[1] = line[1];
		
		for(var i = 2; i <line.length; i++) {
			if (line[i - 2] == '.'){
				newLine[i] = line[i].toUpperCase();
			}else{
				newLine[i] = line[i];
			}
		}
		return newLine.join('');
	}
	
	
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
