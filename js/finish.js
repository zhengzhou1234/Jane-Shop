$(function(){
	var $product=$("#jnDetails");
	$("#cart a").click(function(){
		var pro_name=$product.find("h4:first").text();
		var pro_size=$product.find(".pro_size strong").text();
		var pro_color=$product.find(".color_change strong").text();
		var pro_num=$product.find("#num_sort").val();
		var pro_price=$product.find('.pro_price span').text();
		var dialog="感谢您的购买。\n您的购买清单如下：\n"+
					"产品是："+pro_name+"；\n"+
					"尺寸是："+pro_size+"；\n"+
					"颜色是："+pro_color+"；\n"+
					"数量是："+pro_num+"；\n"+
					"总价是："+pro_price+"元。";
				alert(dialog);
				return false;//防止页面跳转
	})
})