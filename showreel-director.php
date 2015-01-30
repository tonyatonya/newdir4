<!DOCTYPE html>
<html lang="">
<head>
	<title></title>
	<?php include('inc_header.php'); ?>
</head>
<body class="menuNormal showreelpage videolist <?php echo($_SESSION['company']); ?>">
<?php include('inc_companynav.php');?>
<div id="body">
	<div class="row">
		<?php include('inc_mainmenu.php'); ?>
		<section class="main-content" data-animsition-in="fade-in">
			<article class="pagesection video" style="background-image:url(images/testthumb1.jpg)">
				<div class="hover">
					<div class="hoverbox">
						<div class="swap-box">
								<div class="box">
								<div class="toptext">
								<h3>LEILA & DAMINE DE BLINKK</h3>
								<div class="line"></div>
							</div>
								<div class="bottomtext">
								<h4>EKALAK KLUNSON</h4>
								<h5>DIR4FILMS</h5>
							</div>
							</div>
						</div>
					</div>
				</div>
				<div class="videoframe">
					<iframe src="//player.vimeo.com/video/97704117?api=1&title=0&amp;byline=0&amp;portrait=0" width="500" height="211" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
				</div>
				<div class="bottomcontent">
					<h3>LEILA & DAMINE DE BLINKK</h3>
					<h4>EKALAK KLUNSON</h4>
					<h5>DIR4FILMS</h5>
					<div class="close"></div>
				</div>
			</article>
			<article class="pagesection profile">
					<h2>EKALAK KLUNSON</h2>
					<div class="footer-btn">
						<ul class="footer-btn-list">
							<li><a href="news.php" class="vintagebtn">View profile</a></li>
						</ul>
					</div>
			</article>
			<?php for($i=0;$i<4;$i++){ ?>
			<article class="pagesection video" style="background-image:url(images/testthumb1.jpg)">
				<div class="hover">
					<div class="hoverbox">
						<div class="swap-box">
								<div class="box">
								<div class="toptext">
								<h3>LEILA & DAMINE DE BLINKK</h3>
								<div class="line"></div>
							</div>
								<div class="bottomtext">
								<h4>EKALAK KLUNSON</h4>
								<h5>DIR4FILMS</h5>
							</div>
							</div>
						</div>
					</div>
				</div>
				<div class="videoframe">
					<iframe src="//player.vimeo.com/video/97704117?api=1&title=0&amp;byline=0&amp;portrait=0" width="500" height="211" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
				</div>
				<div class="bottomcontent">
					<h3>LEILA & DAMINE DE BLINKK</h3>
					<h4>EKALAK KLUNSON</h4>
					<h5>DIR4FILMS</h5>
					<div class="close"></div>
				</div>
			</article>
			<?php } ?>
		</section>
</div>
</body>
</html>