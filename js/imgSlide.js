//点击对应图片滑动
$(function(){
	$("#jnBrandTab li a").click(function(){
		$(this).parent().addClass("chos").siblings().removeClass('chos');
		var idx=$("#jnBrandTab li a").index(this);
		showBrandList(idx);
		return false;//取消点击默认跳转事件
	}).eq(0).click();;
});
//显示不同板块
function showBrandList(index){
	var $rollobj=$("#jnBrandList");
	var rollWidth=$rollobj.find("li").outerWidth();//获得li窗口的宽度
	rollWidth=rollWidth*4;//一个版面
	$rollobj.stop(true, true).animate({left:-rollWidth*index}, 1000);
}