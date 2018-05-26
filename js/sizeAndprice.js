//产品尺寸切换
$(function(){
	$(".pro_size ul li span").click(function(){
		$(this).addClass("cur").parent().siblings().find("span").removeClass('cur');
		$(this).parents("ul").siblings("strong").text($(this).text());
	});
});
//产品数量与价格联动
$(function(){
    var $span = $("div.pro_price span");
	var price = $span.text();	
	$("#num_sort").change(function(){
	    var num = $(this).val();
		var amount = num * price;
		$span.text( amount );
	}).change();
})