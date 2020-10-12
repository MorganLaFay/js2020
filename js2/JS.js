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
		var sortedGoods = oldGoods.sort(function(good1, good2){
			if (good1.name > good2.name){
				return 1;
			}
			if (good1.name < good2.name){
				return -1;
			}
			return 0;
		});
		
		return sortedGoods;
	}
		function filterGoods(oldGoods){
		var textFilter = $('.left-menu .filter').val();
		
		var filteredGoods = oldGoods.filter(function (good){
			return good.name.indexOf(textFilter) > -1;
		});
		
		return filteredGoods;
	});
	
	
	function drawGoods(){
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