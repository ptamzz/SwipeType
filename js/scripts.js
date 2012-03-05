// JavaScript Document

var one, two, three, four, five, six, called, string = '';
var called = false, tapped = false;
$(function() {
	var a = new Audio("snd/a-short.mp3");
	var b = new Audio("snd/b-short.mp3");
	var c = new Audio("snd/c-short.mp3");
	var d = new Audio("snd/d-short.mp3");
	var e = new Audio("snd/e-short.mp3");
	var f = new Audio("snd/f-short.mp3");
	var g = new Audio("snd/g-short.mp3");
	var h = new Audio("snd/h-short.mp3");
	var i = new Audio("snd/i-short.mp3");
	var j = new Audio("snd/j-short.mp3");
	var k = new Audio("snd/k-short.mp3");
	var l = new Audio("snd/l-short.mp3");
	var m = new Audio("snd/m-short.mp3");
	var n = new Audio("snd/n-short.mp3");
	var o = new Audio("snd/o-short.mp3");
	var p = new Audio("snd/p-short.mp3");
	var q = new Audio("snd/q-short.mp3");
	var r = new Audio("snd/r-short.mp3");
	var s = new Audio("snd/s-short.mp3");
	var t = new Audio("snd/t-short.mp3");
	var u = new Audio("snd/u-short.mp3");
	var v = new Audio("snd/v-short.mp3");
	var w = new Audio("snd/w-short.mp3");
	var x = new Audio("snd/x-short.mp3");
	var y = new Audio("snd/y-short.mp3");
	var z = new Audio("snd/z-short.mp3");
	var caps = new Audio("snd/beep-caps.mp3");
	var space = new Audio("snd/beep-space.mp3");
	
	//Handling single tap for dot one which represents letter 'a'
	$("#one").bind('tap',function(){
       one = true;
	   $("#pieSlice1 .pie-left").css({ 'background-color' : '#dbcd08'});
	   tapped = true; //Event captured, disregard further touchmove event
	   called = true;
    });
	
	//To type space
	$(".home-btn").bind('doubletap', function(event){
	   $('#blindType').val($('#blindType').val()+' ');
	    space.play();
    });
	
	//To type space
	$(".backspace").bind('doubletap', function(event){
	   $('#blindType').val($('#blindType').val().substr(0, $('#blindType').val().length - 1));
	   space.play();
    });
	
	document.addEventListener('touchmove', function(event) {
		event.preventDefault();
		
		if(!tapped){ // If tapped event at dot one has not occurred
			string = '';
			called = true;
			
			if($('ul#top').is(':visible')){
				var touch = event.touches[0];
				//$('.home-btn').append("Touch x:" + touch.pageX + ", y:" + touch.pageY);
				
				// get dot 1
				if((touch.pageX > 65 && touch.pageX < 165) && (touch.pageY > 80 && touch.pageY < 170)){ one = true; $("#pieSlice1 .pie-left").css({ 'background-color' : '#dbcd08'}); }
				
				// get dot 4
				if((touch.pageX > 165 && touch.pageX < 265) && (touch.pageY > 80 && touch.pageY < 170)){ four = true; $("#pieSlice4 .pie-right").css({ 'background-color' : '#87aa25'});}
				
				// get dot 2
				if((touch.pageX > 15 && touch.pageX < 115) && (touch.pageY > 180 && touch.pageY < 240)){ two = true; $("#pieSlice2 .pie-left").css({ 'background-color' : '#d66b20'});}
				
				// get dot 5
				if((touch.pageX > 210 && touch.pageX < 310) && (touch.pageY > 180 && touch.pageY < 240)){ five = true; $("#pieSlice5 .pie-right").css({ 'background-color' : '#d66b20'});}
				
				// get dot 3
				if((touch.pageX > 65 && touch.pageX < 165) && (touch.pageY > 255 && touch.pageY < 355)){ three = true; $("#pieSlice3 .pie-left").css({ 'background-color' : '#87aa25'});}
				
				// get dot 6
				if((touch.pageX > 165 && touch.pageX < 265) && (touch.pageY > 255 && touch.pageY < 355)){ six = true; $("#pieSlice6 .pie-right").css({ 'background-color' : '#dbcd08'}); }
			}
		}  //if(tapped){ ends
	}, false);
		
	document.addEventListener('touchend', function(event) {
		event.preventDefault();
		
		if(called){
			string ='' + $('#blindType').val();
			
			//If true, print character in ALL Caps
			if($('#case').hasClass('upper')){
				if(one && !two && !three && !four && !five && !six){ string += 'A'; a.play(); }
				if(one && two && !three && !four && !five && !six){ string += 'B'; b.play(); }
				if(one && four && !two && !three && !five && !six){ string += 'C'; c.play(); }
				if(one && four && five && !two && !three && !six){ string += 'D'; d.play(); }
				if(one && five && !two && !three && !four && !six){ string += 'E'; e.play(); }
				if(one && two && four && !three && !five && !six){ string += 'F'; f.play(); }
				if(one && two && four && five && !three && !six){ string += 'G'; g.play(); }
				if(one && two && five && !three && !four && !six){ string += 'H'; h.play(); }
				if(two && four && !one && !three && !five && !six){ string += 'I'; i.play(); }
				if(two && four && five && !one && !three && !six){ string += 'J'; j.play(); }
				if(one && three && !two && !four && !five && !six){ string += 'K'; k.play(); }
				if(one && two && three && !four && !five && !six){ string += 'L'; l.play(); }
				if(one && three && four && !two && !five && !six){ string += 'M'; m.play(); }
				
				if(one && three && four && five && !two && !six){ string += 'N'; n.play(); }
				if(one && three && five && !two && !four && !six){ string += 'O'; o.play(); }
				if(one && two && three && four && !five && !six){ string += 'P'; p.play(); }
				if(one && two && three && four && five && !six){ string += 'Q';  q.play();}
				if(one && two && three && five && !four && !six){ string += 'R'; r.play(); }
				if(two && three && four && !one && !five && !six){ string += 'S'; s.play(); }
				if(two && three && four && five && !one && !six){ string += 'T'; t.play(); }
				if(one && three && six && !two && !four && !five){ string += 'U'; u.play(); }
				if(one && two && three && six && !four && !five){ string += 'V'; v.play(); }
				if(two && four && five && six && !one && !three){ string += 'W'; w.play(); }
				if(one && three && four && six && !two && !five){ string += 'X'; x.play(); }
				if(one && three && four && five && six && !two){ string += 'Y'; y.play(); }
				if(one && three && five && six && !two && !four){ string += 'Z';  z.play();}
				
				//Setting upper class OFF
				$('#case').removeClass('upper');
			} else {
				if(one && !two && !three && !four && !five && !six){ string += 'a'; a.play(); }
				if(one && two && !three && !four && !five && !six){ string += 'b'; b.play(); }
				if(one && four && !two && !three && !five && !six){ string += 'c'; c.play(); }
				if(one && four && five && !two && !three && !six){ string += 'd'; d.play(); }
				if(one && five && !two && !three && !four && !six){ string += 'e'; e.play(); }
				if(one && two && four && !three && !five && !six){ string += 'f'; f.play(); }
				if(one && two && four && five && !three && !six){ string += 'g'; g.play(); }
				if(one && two && five && !three && !four && !six){ string += 'h'; h.play(); }
				if(two && four && !one && !three && !five && !six){ string += 'i'; i.play(); }
				if(two && four && five && !one && !three && !six){ string += 'j'; j.play(); }
				if(one && three && !two && !four && !five && !six){ string += 'k'; k.play(); }
				if(one && two && three && !four && !five && !six){ string += 'l'; l.play(); }
				if(one && three && four && !two && !five && !six){ string += 'm'; m.play(); }
				
				if(one && three && four && five && !two && !six){ string += 'n'; n.play(); }
				if(one && three && five && !two && !four && !six){ string += 'o'; o.play(); }
				if(one && two && three && four && !five && !six){ string += 'p'; p.play(); }
				if(one && two && three && four && five && !six){ string += 'q';  q.play();}
				if(one && two && three && five && !four && !six){ string += 'r'; r.play(); }
				if(two && three && four && !one && !five && !six){ string += 's'; s.play(); }
				if(two && three && four && five && !one && !six){ string += 't'; t.play(); }
				if(one && three && six && !two && !four && !five){ string += 'u'; u.play(); }
				if(one && two && three && six && !four && !five){ string += 'v'; v.play(); }
				if(two && four && five && six && !one && !three){ string += 'w'; w.play(); }
				if(one && three && four && six && !two && !five){ string += 'x'; x.play(); }
				if(one && three && four && five && six && !two){ string += 'y'; y.play(); }
				if(one && three && five && six && !two && !four){ string += 'z';  z.play();}
			}				
			
			
			called = false;
			one = false;
			two = false;
			three = false;
			four = false;
			five = false;
			six = false;
			tapped = false;
			
			$("#pieSlice1 .pie-left").css({ 'background-color' : '#FFF212'});
			$("#pieSlice2 .pie-left").css({ 'background-color' : '#F58634'});
			$("#pieSlice3 .pie-left").css({ 'background-color' : '#a9cf46'});
			$("#pieSlice4 .pie-right").css({ 'background-color' : '#a9cf46'});
			$("#pieSlice5 .pie-right").css({ 'background-color' : '#F58634'});
			$("#pieSlice6 .pie-right").css({ 'background-color' : '#FFF212'});
			
			$('#blindType').val(string);
		}
	}, false);
	
	//To disable MobileSarai auto-select
	$.fn.extend({ 
		disableSelection : function() { 
			this.each(function() { 
				this.onselectstart = function() { return false; }; 
				this.unselectable = "on"; 
				$(this).css('-moz-user-select', 'none'); 
				$(this).css('-webkit-user-select', 'none'); 
			}); 
		} 
	});
	
	
	//set case to upper on tap on sixth dot
	$("#six").bind('tap',function(){
       $('#case').addClass('upper');
	   caps.play();
    });
	
	
	//Show Buttons: when tapped.
	$(".home-btn").bind('taphold',function(event, ui){
       $("#btn-wrap").removeClass('other-btns').addClass('show-btns');
		 $("ul").css({'display' : 'block'});
    });
	//Show Buttons: when clicked.
	$(".home-btn").bind('click',function(event, ui){
       $("#btn-wrap").removeClass('other-btns').addClass('show-btns');
		 $("ul").css({'display' : 'block'});
    });
	
	
	
}); // jQuery $(funtion() ends

/* //To handle cache manifest
var webappCache = window.applicationCache;

function updateCache() {
    webappCache.swapCache();
}



webappCache.addEventListener("error", errorCache, false);
webappCache.addEventListener("updateready", updateCache, false); */
/* 
function errorCache() {
    alert("Cache failed to update");
}

// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
      window.applicationCache.swapCache();
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't changed. Nothing new to server.
    }
  }, false);
  
  webappCache.addEventListener("error", errorCache, false);

}, false); */
