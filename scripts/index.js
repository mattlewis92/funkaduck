var currentloc;
var showpics = false;

function changepage()
{
	//var currenthtml = document.getElementById("w" + currentloc + "-nav").getElementsByTagName('a')[0].innerHTML
	//document.getElementById("w" + currentloc + "-nav").getElementsByTagName('a')[0].innerHTML = currenthtml.replace('<b>','').replace('</b>','');
	var currenthtml = $("#w" + currentloc + "-nav > a").html();
	$("#w" + currentloc + "-nav > a").html((currenthtml.replace(/<b>/i,'')).replace(/<\/b>/i,''))
	$("div.widget").slideUp("slow");
		window.setTimeout(function(){
				currentloc = location.hash.replace('#','');
				if(showpics == true)
				{
					$("#wvideo > p").html('');
					$("#ducky, #disco-main").show("explode","1");
				}
				if(currentloc == "video")
				{
					$("#wvideo > p").html('<object type="application/x-shockwave-flash" style="width:480px; height:385px;" data="http://www.youtube.com/v/lzVDHL1VI64"><param name="movie" value="http://www.youtube.com/v/lzVDHL1VI64" /></object>');
					$("#ducky, #disco-main").hide("fast");
					showpics = true;
				}
				else
				{
					showpics = false;
				}
				window.setTimeout(function(){
					var currenthtml = $("#w" + currentloc + "-nav > a").html();
					$("#w" + currentloc + "-nav > a").html("<b>" + currenthtml + "</b>")
					$("#w" + currentloc).slideDown("slow");
				}, 400);
				var picamount = Math.ceil((Math.random() * 4))
				document.getElementById('disco-main').setAttribute("src", "images/disco-" + picamount + ".jpg")
			}, 200);
}

$(document).ready(function(){
	//$("#footer").corner();
	$(".nav-item").hover(
	function(){
		$(this).fadeTo("slow","1");
	},
	function(){
		$(this).fadeTo("fast","0.7");
	});
	
	if(location.hash == "")
	{
		location.hash = "home"
		currentloc = "home"
	}
	else
	{
		currentloc = location.hash.replace('#','');
	}
	if(currentloc == "home" || currentloc == "contact" || currentloc == "about" || currentloc == "disco" || currentloc == "video" || currentloc == "staff" || currentloc == "payment")
	{
		changepage();
	}
	$("#wdisco > p > a").click(changepage);
	$(".nav-item").click(function(){
	var alla = this.getElementsByTagName('a')[0].href;
	var startpos = alla.indexOf('#') + 1
	var endpos = alla.length
	var loc = alla.substr(startpos, endpos-startpos);
	location.hash = loc
	changepage();
	});
	$("#ducky").click(function(){
		$(this).effect("shake", { direction:"up", times:5 }, 300);
	});
});