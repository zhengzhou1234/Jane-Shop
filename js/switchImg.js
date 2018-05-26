//单击产品小图切换大图
$(function(){
	$(".imgList li img").bind("click",function(){
		var imgSrc=$(this).attr('src');
		var i=imgSrc.lastIndexOf(".");//获取最后一个"."的位置
		var unit=imgSrc.substring(i);//获取从切割位置到结尾处（i~end）的字符串
		imgSrc=imgSrc.substring(0,i);
		var imgSrc_small = imgSrc + "_small"+ unit;
		var imgSrc_big = imgSrc + "_big"+ unit;
		$("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
		$("#thickImg").attr("href", imgSrc_big);
	});
});