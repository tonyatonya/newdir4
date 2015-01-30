<div class="company-nav-tab desktop-menu">
	<button class="company-button">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    </button>
</div>
<div class="mainmenu desktop-menu">
		<div class="topool">
			<a href="#">
				<img src="images/topool.png" alt="topool" width="14" height="14">
				our pool company
			</a>
		</div>
		<!-- <div class="company-logo films <?php echo($_SESSION['company']); ?>"> -->
		<div class="company-logo films">
			<a class="animsition-link" href="index.php">
				<img src="images/<?php echo($_SESSION['company']); ?>logo.png">
			</a>
		</div>
		<div class="menu">
		<ul>
			<li class="main"><a href="index.php" class="animsition-link" data-animsition-out="fade-out">HOME</a></li>
			<li class="main">
				<a class="animsition-link" href="showreel-<?php echo($_SESSION['company']); ?>.php">SHOW REELS</a>
				<?php if($_SESSION['company'] == 'films') { ?>
				<div class="submenu">
					<ul>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">EKALAK KLUNSON</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">MACKENZIE SHEPPARD (JAPAN)</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">SHIZUE</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">BRAD HOGARTH</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">LUZIAN SCHALLATTER</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">DAEWON</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">JACK WUNG</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">MATT HARRIS</a></li>
					</ul>
				</div>
				<?php } else if($_SESSION['company'] == 'tv'){?>
				<div class="submenu">
					<ul>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-tv.php">DOCUMENTARY</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-tv.php">EDUTAINMENT</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-tv.php">VARIETY PROGRAM</a></li>
					</ul>
				</div>
				<?php } ?>
			</li>
			<li class="main"><a class="animsition-link" data-animsition-out="fade-out" href="contacts.php">CONTACT US</a></li> 
			<li class="main"><a class="animsition-link" data-animsition-out="fade-out" href="news.php">NEWS</a></li>
		</ul>
	</div>
		<div class="lang-bar">
		<ul>
			<li class="active"><a href="#">EN</a></li>
			<li><a href="#">FR</a></li>
			<li><a href="#">CN</a></li>
		</ul>
	</div>
		<div class="social-bar">
		<ul>
			<li><a href="#"><img src="images/socialicon_01.png" alt="socialicon_01" width="18" height="17"></a></li>
			<li><a href="#"><img src="images/socialicon_03.png" alt="socialicon_03" width="18" height="17"></a></li>
			<li><a href="#"><img src="images/socialicon_05.png" alt="socialicon_05" width="18" height="17"></a></li>				
		</ul>
	</div>
</div>
<script type="text/javascript">
	$(document).ready(function(){
		$(".main").hoverIntent(function(){
			var submenu = $(this).find(".submenu");
			submenu.slideDown();
		},function(){
			var submenu = $(this).find(".submenu");
			submenu.slideUp();
		})	
	})
</script>

<!-- mobile version menu -->
<div class="topmenu mobile-menu">
	<div class="openside">
		<div></div>
		<div></div>
		<div></div>
	</div>
	<div class="company-logo">
		<a class="animsition-link" href="index.php">
			<img src="images/<?php echo($_SESSION['company']);?>logo.png">
		</a>
	</div>
	<div class="opencompany">
		<img src="images/topool.png" alt="topool" width="14" height="14" />
	</div>
</div>
<div class="menu mobile-menu">
	<ul>
			<li class="main"><a href="index.php" class="animsition-link" data-animsition-out="fade-out">HOME</a></li>
			<li class="main">
				<a class="animsition-link" href="showreel-<?php echo($_SESSION['company']); ?>.php">SHOW REELS</a>
				<?php if($_SESSION['company'] == 'films') { ?>
				<div class="submenu">
					<ul>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">EKALAK KLUNSON</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">MACKENZIE SHEPPARD (JAPAN)</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">SHIZUE</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">BRAD HOGARTH</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">LUZIAN SCHALLATTER</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">DAEWON</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">JACK WUNG</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-director.php">MATT HARRIS</a></li>
					</ul>
				</div>
				<?php } else if($_SESSION['company'] == 'tv'){?>
				<div class="submenu">
					<ul>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-tv.php">DOCUMENTARY</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-tv.php">EDUTAINMENT</a></li>
						<li><a class="animsition-link" data-animsition-out="fade-out" href="showreel-tv.php">VARIETY PROGRAM</a></li>
					</ul>
				</div>
				<?php } ?>
			</li>
			<li class="main"><a class="animsition-link" data-animsition-out="fade-out" href="contacts.php">CONTACT US</a></li> 
			<li class="main"><a class="animsition-link" data-animsition-out="fade-out" href="news.php">NEWS</a></li>
		</ul>
</div>
