$(document).ready(function(){
	var goods = [
		{
			name: 'Blond',
			url: 'img/White.jpg'
		},
		{
			name: 'Red',
			url: 'img/Red.jpg'
		},
	];
	
	$('.goods.first .add').click(function(){
		var newName = $('.goods.first .new-image-name').val();
		var newUrl = $('.goods.first .new-image-url').val();
		
		var good = {
			name: newName,
			url: newUrl
		};
		goods.push(good);
		drawGoods();
	});
	
	$('.left-menu .filter').keyup(function (){
		drawGoods();
	});
	
	$('.left-menu .refresh').click(function (){
		drawGoods();
	});
	
	
	function drawGoods(){
		$('.content .goods:not(.first)').remove();
		
		var filteredGoods = filterGoods(goods);
		
		var sortedGoods = sortGoods(filteredGoods);
		
		for	(var i = 0; i< sortedGoods.length; i++){
			var good = sortedGoods[i];
			var goodsDiv = $('<div>');
		
			goodsDiv.addClass('goods');
			
			var divName = $('<div>');
			divName.text(good.name);
			
			var divImg = $('<div>');
			divImg.addClass('image');
			var img = $('<img>');
			img.attr('src', good.url);
			divImg.append(img);
			
			goodsDiv.append(divName);
			goodsDiv.append(divImg);
			
			$('.content').append(goodsDiv);
		}
	}
		
	function sortGoods(oldGoods){
		var direction = $('[name=sortOrder]:checked').val();
		
		var magicOne;
		if (direction == "1"){
			magicOne = 1;
			//+
		}else{
			magicOne = -1;
			//-
		}
		
		/*var magicTwo = direction == "1" 
			? 1//+
			: -1// -;*/
			
		var register = $('[name=registerSort]:checked').val();
		
		var aAndB = function(a,b){
			var first = a.name;
			var second = b.name;
			
			if (register == '2'){
				first = first.toLowerCase();
				second = second.toLowerCase();
			}
			if (first > second){
				return 1 * magicOne;
			}
			if (first < second){
				return -1 * magicOne;
			}
			return 0;
		}
		
		var sortedGoods = oldGoods.sort(aAndB);
		
		return sortedGoods;
	}
	
	function filterGoods(oldGoods){
		var textFilter = $('.left-menu .filter').val();
		
		var filteredGoods = oldGoods.filter(function (good){
			return good.name.indexOf(textFilter) > -1;
		});
		
		return filteredGoods;
	}
	
	
	function drawGoodsNew(){
		$('.content .goods:not(.first)').remove();
		
			goods = goods.sort(function(a, b){
			if(a.name < b.name) { return -1; }
			if(a.name > b.name) { return 1; }
			return 0;
		});
		
		for	(var i = 0; i< goods.length; i++){
			var good = goods[i];
			var goodsDiv = $('<div>');
		
			goodsDiv.addClass('goods');
			
			var divName = $('<div>');
			divName.text(good.name);
			
			var divImg = $('<div>');
			divImg.addClass('image');
			var img = $('<img>');
			img.attr('src', good.url);
			divImg.append(img);
			
			goodsDiv.append(divName);
			goodsDiv.append(divImg);
			
			$('.content').append(goodsDiv);
		}
		
		
	}
});