$(function(){
	var x=10;
	var y=20;
	$("a.tooltip").mouseover(function(e){
		this.myTitle=this.title;
		this.title=" ";
		var tooltip="<div id='tooltip'>"+this.myTitle+"</div>";
		$('body').append(tooltip);//针对#tooltip
		$("#tooltip").css({"top":(e.pageY+y)+"px",
							"left":(e.pageX+x)+"px"
						}).show("fast");//设置X,Y坐标并显示
	}).mouseout(function() {
		this.title=this.myTitle;//使得下次鼠标滑入时title值不为空
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("#tooltip").css({
			"top":(e.pageY+y)+"px",
			"left":(e.pageX+x)+"px"
		});
	});
})