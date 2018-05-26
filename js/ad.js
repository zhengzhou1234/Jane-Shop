//鼠标覆盖时图片对应过度
$(function(){
	var $imgrolls=$("#jnImageroll div a");
	$imgrolls.css('opacity', '0.7');
	var len=$("#jnImageroll div a").length;
	var index=0;
	var adTimer=null;
	$imgrolls.mouseover(function() {
		index=$("#jnImageroll div a").index(this);
		showImg(index);
	}).eq(0).mouseover();
	$("#jnImageroll").hover(function(){
	if(adTimer){
		clearInterval(adTimer);//鼠标覆盖停止轮播
				}
	},function(){
	adTimer=setInterval(function(){//鼠标离开开始轮播
		showImg(index)
		index++;
		if(index==len){
			index=0;
		}
	},2000);
	}).trigger("mouseleave");//触发事件//.eq(0).mouseover()用来初始化，用来高亮第一个文字并显示第一个图片
})
//构造函数
function showImg(index){
	var $rollobj=$("#jnImageroll");
	var $rolllist=$rollobj.find("div a");
	var  newhref=$rolllist.eq(index).attr("href");
	$("#JS_imgWrap").attr("href",newhref)//改变图片链接
					.find("img").eq(index).stop(true,true).fadeIn()//清空动画行列直接到末状态
					.siblings().fadeOut();
	$rolllist.removeClass('chos').css('opacity', '0.7')
			.eq(index).addClass('chos').css("opacity","1");
};