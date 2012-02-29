<!DOCTYPE html>
<html lang="en" manifest="st.appcache" >
<head><?php require_once('inc/head.php'); ?></head>
<style>
	
</style>
<body ontouchmove="BlockMove(event);">
    <div data-role="page">
		<div id="case" class="upper"></div>
        <div class="input-wrap">
            <input id="blindType" name="typed" type="text" />
        </div>
    
        <div class="pie-container">
        	<div class="home-btn"></div>
            <div id="btn-wrap" class="other-btns">
                <div id="pieSlice1" class="hold-left"><div class="pie-left"></div></div>
                <div id="pieSlice2" class="hold-left"><div class="pie-left"></div></div>
                <div id="pieSlice3" class="hold-left"><div class="pie-left"></div></div>
                <div id="pieSlice4" class="hold-right"><div class="pie-right"></div></div>
                <div id="pieSlice5" class="hold-right"><div class="pie-right"></div></div>
                <div id="pieSlice6" class="hold-right"><div class="pie-right"></div></div>
            </div>
        </div>
        <ul id="top">
            <li id="one" class="dot"></li>
            <li id="four" class="dot"></li>
            <div class="clear"></div>
        </ul>
        <ul id="mid">
            <li id="two" class="dot"></li>
            <li id="five" class="dot"></li>
            <div class="clear"></div>
        </ul>
        <ul id="bot">
            <li id="three" class="dot"></li>
            <li id="six" class="dot"></li>
            <div class="clear"></div>
        </ul>
        
    </div>
</body>
</html>