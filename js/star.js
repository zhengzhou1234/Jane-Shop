//产品评分效果
$(function(){
	$("ul.rating li a").click(function() {
		var title=$(this).attr("title");
		alert("您给本商品的评分为："+title+"，感谢您的评价！");
		var cl=$(this).parent().attr("class");
		$(this).parents("ul").removeClass().addClass('rating '+cl+'star');
		return false;
	});
})