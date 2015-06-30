<!DOCTYPE html>
<html lang="">
<head>
	<title></title>
	<?php include('inc_header.php'); ?>
</head>
<body class="menuNormal showreelpage <?php echo($_SESSION['company']); ?>">
<?php include('inc_companynav.php');?>
<div id="body">
		<?php include('inc_mainmenu.php'); ?>
		<section class="main-content" data-animsition-in="fade-in" id="tv-list">
			<div class="toppagebar col-md-12">
				DIR4TV
				<ul class="cat-menu">
					<li class="active"><a href="#">DOCUMENTARY</a></li>
					<li><a href="#">EDUTAINMENT</a></li>
					<li><a href="#">VARIETY PROGRAM</a></li>
				</ul>
			</div>
			<?php for($i=0;$i<4;$i++){ ?>
			<article class="pagesection tv-child">				
				<figure>
					<img src="images/testthumb1.jpg">
					<figcaption>
						<div>
							<h2>Theme of the Week Foundation for the Better Life of Children</h2>
							<div class="footer-btn">
							<ul class="footer-btn-list">
								<li><a href="" class="vintagebtn" data-src="//player.vimeo.com/video/97704117?api=1&title=0&amp;byline=0&amp;portrait=0">View more</a></li>
							</ul>
							</div>
						</div>
					</figcaption>
				</figure>
				<div class="videoframe">
					<iframe class="myvdo" id="player_<?php echo $i ?>" width="500" height="211" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
				</div>
			</article>
			<?php } ?>
		</section>

</div>
</body>
</html>