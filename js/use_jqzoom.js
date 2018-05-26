/*使用jqzoom*/
$(function(){
	$(".jqzoom").jqueryzoom({
					zoomType:'standard',
					lens:true,
					preloadImages:false,
					alwaysOn:false,
					xzoom: 340, //放大图的宽度(默认是 200)
					yzoom: 340, //放大图的高度(默认是 200)
					xoffset: 10, //离原图的距离(默认是 10)
					yoffset:0,
					position: "right", //放大图的定位(默认是 "right")
					preload:1   
	});
});