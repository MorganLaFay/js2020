$(document).ready(function(){
	
	$('.login-popup').hide();
	$('.login-popup .close').click(function(){
		$('.login-popup').hide();
	});
	
	$('.coin .process').click(function(){
		var data = $('.coin .data').val() - 0;
		
		var coinText = calcCoinText(data);
		
		$('.coin .result').text(coinText);
	});
	
	function calcCoinText(number){
		return 'двенадцать';
	}
	
	$('.encrypt .process').click(function(){
		var data = $('.encrypt .data').val() - 0;
		
		var encryptData = encryptNumber(data);
		
		$('.encrypt .result').text(encryptData);
	});
	
	function encryptNumber(data){
		var numbersText = ['ноль', 'один', 'два', 'три'];
		var encryptData = numbersText[data].length;
		return encryptData;
	}
});