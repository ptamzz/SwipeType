// JavaScript Document

var one, two, three, four, five, six, called, string = '';
var called = false, tapped = false;

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
var activate = new Audio("snd/beep-8.mp3");
var eng = new Audio("snd/english.mp3");
var hindi = new Audio("snd/hindi.mp3");



//Assign handlers to the simple direction handlers.
var swipeOptions= {
	swipeStatus:swipeStatus,
	threshold:320
}

//Swipe handlers.
//The only arg passed is the original touch event object		
function swipeStatus(event, phase, direction, distance) {

	if (direction == 'left' && distance>80 && distance<120) {
		//Type English
		$('#english').attr('checked', true);
		eng.play();
		displayItem('English');
	} else if (direction == 'right' && distance>80 && distance<120) {
		//Type Hindi
		$('#hindi').attr('checked', true);
		hindi.play();
		displayItem('Hindi');
	}
}

//Animate entry char/text
function displayItem(str){
	//console.log('-'+str);
	var item = $('#animate');

	item.html('<span class="display">'+str+"</span>");
}

$(function() {
	
	//Enable swiping to select language
	$(".backspace").swipe(swipeOptions);

	//To type space
	$(".home-btn").bind('doubletap', function(event){
		$('#blindType').val($('#blindType').val()+' ');
		space.play();
    });
	
	//To delete one char on the left
	$(".backspace").bind('doubletap', function(event){
	   $('#blindType').val($('#blindType').val().substr(0, $('#blindType').val().length - 1));
	   space.play();
    });
	
	//Handling single tap for dot one which represents letter 'a' in English, 
	$("#one").bind('tap',function(){
	   one = true;
	   $("#pieSlice1 .pie-left").css({ 'background-color' : '#dbcd08'});
	   tapped = true; //Event captured, disregard further touchmove event
	   called = true;
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
				if((touch.pageX > 65 && touch.pageX < 165) && (touch.pageY > 80 && touch.pageY < 170)){ one = true; $("#pieSlice1 .pie-left").css({ 'background-color' : '#d6c002'}); }
				
				// get dot 4
				if((touch.pageX > 165 && touch.pageX < 265) && (touch.pageY > 80 && touch.pageY < 170)){ four = true; $("#pieSlice4 .pie-right").css({ 'background-color' : '#213b66'});}
				
				// get dot 2
				if((touch.pageX > 15 && touch.pageX < 115) && (touch.pageY > 180 && touch.pageY < 240)){ two = true; $("#pieSlice2 .pie-left").css({ 'background-color' : '#b21323'});}
				
				// get dot 5
				if((touch.pageX > 210 && touch.pageX < 310) && (touch.pageY > 180 && touch.pageY < 240)){ five = true; $("#pieSlice5 .pie-right").css({ 'background-color' : '#b21323'});}
				
				// get dot 3
				if((touch.pageX > 65 && touch.pageX < 165) && (touch.pageY > 255 && touch.pageY < 355)){ three = true; $("#pieSlice3 .pie-left").css({ 'background-color' : '#213b66'});}
				
				// get dot 6
				if((touch.pageX > 165 && touch.pageX < 265) && (touch.pageY > 255 && touch.pageY < 355)){ six = true; $("#pieSlice6 .pie-right").css({ 'background-color' : '#d6c002'}); }
			}
		}  //if(tapped){ ends
	}, false);
		
	document.addEventListener('touchend', function(event) {
		event.preventDefault();
		
		if(called){
			string ='' + $('#blindType').val();
			
			//Typing in English
			if($('#english').is(':checked') === true) {
			
				//If true, print character in ALL Caps
				if($('#case').hasClass('upper')){
					if(one && !two && !three && !four && !five && !six){ string += 'A'; a.play(); displayItem('A'); }
					if(one && two && !three && !four && !five && !six){ string += 'B'; b.play(); displayItem('B'); }
					if(one && four && !two && !three && !five && !six){ string += 'C'; c.play(); displayItem('C'); }
					if(one && four && five && !two && !three && !six){ string += 'D'; d.play(); displayItem('D');}
					if(one && five && !two && !three && !four && !six){ string += 'E'; e.play();  displayItem('E');}
					if(one && two && four && !three && !five && !six){ string += 'F'; f.play();  displayItem('F');}
					if(one && two && four && five && !three && !six){ string += 'G'; g.play(); displayItem('G'); }
					if(one && two && five && !three && !four && !six){ string += 'H'; h.play(); displayItem('H'); }
					if(two && four && !one && !three && !five && !six){ string += 'I'; i.play(); displayItem('I'); }
					if(two && four && five && !one && !three && !six){ string += 'J'; j.play(); displayItem('J'); }
					if(one && three && !two && !four && !five && !six){ string += 'K'; k.play(); displayItem('K'); }
					if(one && two && three && !four && !five && !six){ string += 'L'; l.play(); displayItem('L'); }
					if(one && three && four && !two && !five && !six){ string += 'M'; m.play(); displayItem('M'); }
					
					if(one && three && four && five && !two && !six){ string += 'N'; n.play(); displayItem('N'); }
					if(one && three && five && !two && !four && !six){ string += 'O'; o.play(); displayItem('O'); }
					if(one && two && three && four && !five && !six){ string += 'P'; p.play(); displayItem('P'); }
					if(one && two && three && four && five && !six){ string += 'Q';  q.play(); displayItem('Q'); }
					if(one && two && three && five && !four && !six){ string += 'R'; r.play(); displayItem('R'); }
					if(two && three && four && !one && !five && !six){ string += 'S'; s.play(); displayItem('S'); }
					if(two && three && four && five && !one && !six){ string += 'T'; t.play(); displayItem('T'); }
					if(one && three && six && !two && !four && !five){ string += 'U'; u.play(); displayItem('U'); }
					if(one && two && three && six && !four && !five){ string += 'V'; v.play(); displayItem('V'); }
					if(two && four && five && six && !one && !three){ string += 'W'; w.play(); displayItem('W'); }
					if(one && three && four && six && !two && !five){ string += 'X'; x.play(); displayItem('X'); }
					if(one && three && four && five && six && !two){ string += 'Y'; y.play(); displayItem('Y'); }
					if(one && three && five && six && !two && !four){ string += 'Z';  z.play(); displayItem('Z'); }
					
					//Setting upper class OFF
					$('#case').removeClass('upper');
				} else {
					if(one && !two && !three && !four && !five && !six){ string += 'a'; a.play(); displayItem('a'); }
					if(one && two && !three && !four && !five && !six){ string += 'b'; b.play(); displayItem('b'); }
					if(one && four && !two && !three && !five && !six){ string += 'c'; c.play(); displayItem('c'); }
					if(one && four && five && !two && !three && !six){ string += 'd'; d.play(); displayItem('d'); }
					if(one && five && !two && !three && !four && !six){ string += 'e'; e.play(); displayItem('e'); }
					if(one && two && four && !three && !five && !six){ string += 'f'; f.play(); displayItem('f'); }
					if(one && two && four && five && !three && !six){ string += 'g'; g.play(); displayItem('g'); }
					if(one && two && five && !three && !four && !six){ string += 'h'; h.play(); displayItem('h'); }
					if(two && four && !one && !three && !five && !six){ string += 'i'; i.play(); displayItem('i'); }
					if(two && four && five && !one && !three && !six){ string += 'j'; j.play(); displayItem('j'); }
					if(one && three && !two && !four && !five && !six){ string += 'k'; k.play(); displayItem('k'); }
					if(one && two && three && !four && !five && !six){ string += 'l'; l.play(); displayItem('l'); }
					if(one && three && four && !two && !five && !six){ string += 'm'; m.play(); displayItem('m'); }
					
					if(one && three && four && five && !two && !six){ string += 'n'; n.play(); displayItem('n'); }
					if(one && three && five && !two && !four && !six){ string += 'o'; o.play(); displayItem('o'); }
					if(one && two && three && four && !five && !six){ string += 'p'; p.play(); displayItem('p'); }
					if(one && two && three && four && five && !six){ string += 'q';  q.play(); displayItem('q'); }
					if(one && two && three && five && !four && !six){ string += 'r'; r.play(); displayItem('r'); }
					if(two && three && four && !one && !five && !six){ string += 's'; s.play(); displayItem('s'); }
					if(two && three && four && five && !one && !six){ string += 't'; t.play(); displayItem('t'); }
					if(one && three && six && !two && !four && !five){ string += 'u'; u.play(); displayItem('u'); }
					if(one && two && three && six && !four && !five){ string += 'v'; v.play(); displayItem('v'); }
					if(two && four && five && six && !one && !three){ string += 'w'; w.play(); displayItem('w'); }
					if(one && three && four && six && !two && !five){ string += 'x'; x.play(); displayItem('x'); }
					if(one && three && four && five && six && !two){ string += 'y'; y.play(); displayItem('y'); }
					if(one && three && five && six && !two && !four){ string += 'z';  z.play(); displayItem('z'); }
				}
			} else if($('#hindi').is(':checked') === true) {
				//Type in Hindi
				if(one && !two && !three && !four && !five && !six){ string += 'अ'; }
				if(!one && !two && three && four && five && !six){ string += 'आ'; }
				if(!one && two && !three && four && !five && !six){ string += 'इ'; }
				if(!one && !two && three && !four && five && !six){ string += 'ई'; }
				if(one && !two && three && !four && !five && six){ string += 'उ'; }
				
				if(one && two && !three && !four && five && six){ string += 'ऊ'; }
				if(one && !two && !three && !four && five && !six){ string += 'ए'; }
				if(!one && !two && three && four && !five && !six){ string += 'ऐ'; }
				if(one && !two && three && !four && five && !six){ string += 'ओ'; }
				if(!one && two && !three && four && !five && six){ string += 'औ'; }
				
				//Ka, kha, ...
				if(one && !two && three && !four && !five && !six){ string += 'क'; }
				if(!one && !two && !three && four && !five && six){ string += 'ख'; }
				if(one && two && !three && four && five && !six){ string += 'ग'; }
				if(one && two && !three && !four && !five && six){ string += 'घ'; }
				if(!one && !two && three && four && !five && six){ string += 'ङ'; }
				
				if(one && !two && !three && four && !five && !six){ string += 'च'; }
				if(one && !two && !three && !four && !five && six){ string += 'छ'; }
				if(!one && two && !three && four && five && !six){ string += 'ज'; }
				if(!one && !two && three && !four && five && six){ string += 'झ'; }
				if(!one && two && !three && !four && five && !six){ string += 'ञ'; }
				
				if(!one && two && three && four && five && six){ string += 'ट'; }
				if(!one && two && !three && four && five && six){ string += 'ठ'; }
				if(one && two && !three && four && !five && six){ string += 'ड'; }
				if(one && two && three && four && five && six){ string += 'ढ'; }
				if(!one && !two && three && four && five && six){ string += 'ण'; }
				
				if(!one && two && three && four && five && !six){ string += 'त'; }
				if(one && !two && !three && four && five && six){ string += 'थ'; }
				if(one && !two && !three && four && five && !six){ string += 'द'; }
				if(!one && two && three && four && !five && six){ string += 'ध'; }
				if(one && !two && three && four && five && !six){ string += 'न'; }
				
				if(one && two && three && four && !five && !six){ string += 'प'; }
				if(!one && two && three && !four && five && !six){ string += 'फ'; }
				if(one && two && !three && !four && !five && !six){ string += 'ब'; }
				if(!one && !two && !three && four && five && !six){ string += 'भ'; }
				if(one && !two && three && four && !five && !six){ string += 'म'; }
				
				if(one && !two && three && four && five && six){ string += 'य'; }
				if(one && two && three && !four && five && !six){ string += 'र'; }
				if(one && two && three && !four && !five && !six){ string += 'ल'; }
				if(one && two && three && !four && !five && six){ string += 'व'; }
				if(one && !two && !three && four && !five && six){ string += 'श'; }
				
				if(one && two && three && four && !five && six){ string += 'ष'; }
				if(!one && two && three && four && !five && !six){ string += 'स'; }
				if(one && two && !three && !four && five && !six){ string += 'ह'; }
				
				//if(one && two && three && four && five && six){ string += 'त'; }
			}			
			
			
			called = false;
			one = false;
			two = false;
			three = false;
			four = false;
			five = false;
			six = false;
			tapped = false;
			
			$("#pieSlice1 .pie-left").css({ 'background-color' : '#fee800'});
			$("#pieSlice2 .pie-left").css({ 'background-color' : '#3e6ab3'});
			$("#pieSlice3 .pie-left").css({ 'background-color' : '#ec1b30'});
			$("#pieSlice4 .pie-right").css({ 'background-color' : '#ec1b30'});
			$("#pieSlice5 .pie-right").css({ 'background-color' : '#3e6ab3'});
			$("#pieSlice6 .pie-right").css({ 'background-color' : '#fee800'});
			
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
		 activate.play();
    });
	//Show Buttons: when clicked.
	$(".home-btn").bind('click',function(event, ui){
       $("#btn-wrap").removeClass('other-btns').addClass('show-btns');
		 $("ul").css({'display' : 'block'});
		 activate.play();
    });
	
	
}); // jQuery $(funtion() ends
