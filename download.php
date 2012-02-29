<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml">
<head><?php require_once('inc/head.php'); ?></head>
<style>
	
</style>
<body >
   <?php
   	
		$letters = array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
		$i = 0;
		
		while($letters[$i]){?>
			<a style="margin-left: 50px;" href="http://sp.dictionary.com/dictstatic/dictionary/audio/luna/<?php echo $letters[$i]; ?>00/<?php echo $letters[$i]; ?>0000000.mp3&OBT_fname=<?php echo $letters[$i]; ?>0000000.mp3"><?php echo $letters[$i]; ?></a><br/>
		<?php
			$i++;
		} ?>
</body>
</html>