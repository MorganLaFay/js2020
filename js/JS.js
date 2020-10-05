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
	
	
	$('.uniq .process') .click(function(){
		
		var symbols = $('.uniq .data').val().split('');
		var answer = isUniq(symbols);
		$('.uniq .result')[0].innerHTML  = answer;
		
		//$('.uniq .result').text(answer);
	});
	
	function isUniq(symbols) {
		 var uniqSymbols = [];
		
		 for(var i = 0; i <symbols.length; i++){
			 var symbol = symbols[i];
			 
			 if (uniqSymbols.indexOf(symbol) < 0){
				 uniqSymbols.push(symbol);
			 }
		}
		 
		 return uniqSymbols;
	}
	
	$('.findCouple .process') .click(function(){
		
		var number = $('.findCouple .data').val().split('');
		var answer = isFindCouple(number);
		$('.findCouple .result')[0].innerHTML  = answer;
		
	});	
	
	function isFindCouple(arr){
		var num = 10;
		var answer = [];
		
		for (var i = 0; i < arr.length; i++){
			var first = arr[i] - 0;
			for (var j = i + 1; j <arr.length; j++){
				var second = arr[j] - 0;
				if (first + second == num){
					answer.push(arr[i] + ' и ' + arr[j]);
				}
			}
		}
		
		return answer;
		
	}
	
	$('.ana .process').click(function(){
		var data1 = $('.ana .data1').val();
		var data2 = $('.ana .data2').val();
		
		var answer = checkAnn(data1, data2);
		
		$('.ana .result').text(answer);
	});
	
	function checkAnn(word1, word2){
		if (word1.length != word2.length){
			return false;
		}
		
		var arr1 = word1.split('');
		var arr2 = word2.split('');
		
		arr1.sort();
		arr2.sort();
		
		for(var i = 0; i < arr1.length; i++){
			if (arr1[i] != arr2[i]){
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
