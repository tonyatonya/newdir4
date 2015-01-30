<!DOCTYPE html>
<html lang="">
<head>
	<title></title>
	<?php include('inc_header.php'); ?>
</head>
<script type="text/javascript">
	$(document).ready(function(){
		setTimeout(function(){
			$("body.start").removeClass("start");
		}, 2000)
	})
</script>
<body class="start menuNormal videolist <?php echo($_SESSION['company']); ?>">
<?php include('inc_companynav.php');?>
<div id="body">
		<?php include('inc_mainmenu.php'); ?>
		<!-- <section class="col-xs-9 col-md-9 main-content"> -->
		<section class="main-content animsition">
			<article class="pagesection welcometext">
				<div class="leadtext">
					<span>
					<?php if($_SESSION['company'] == 'films'){ ?>
						simply aesthetic
					<?php }else if($_SESSION['company'] == 'tv'){ ?>
						Brain Entertainment
					<?php } else { ?>
						High heel on the moon
					<?php } ?>
					</span>
					</div>
			</article>
			<?php for($i=0;$i<4;$i++){ ?>
			<article class="pagesection video" style="background-image:url(images/testthumb1.jpg)">
			
				<div class="hover">
					<div class="hoverbox">
						<div class="swap-box" data-src="//player.vimeo.com/video/97704117?api=1&title=0&amp;byline=0&amp;portrait=0">
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
					<iframe class="myvdo" id="player_<?php echo $i ?>" style="width:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
				</div>
				<div class="bottomcontent">
					<h3>LEILA & DAMINE DE BLINKK</h3>
					<h4>EKALAK KLUNSON</h4>
					<h5>DIR4FILMS</h5>
					<div class="close"></div>
				</div>
			</article>
			<?php } ?>
			<article class="pagesection whitetexture home-news">
				<div class="toppagebar black">NEWS</div>
				<div class="main-img">
					<img src="images/mainnewsimg.jpg" alt="mainnewsimg" style="width:100%; height: auto;">
				</div>
				<div class="news-content">
					<div class="bottomcontent">
						<div class="close"></div>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
						</p>
						
						<div class="footer-btn">
							<ul class="footer-btn-list">
								<li><a href="news.php" class="vintagebtn">View All News</a></li>
							</ul>
						</div>
					</div>
					<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex </h2>
				</div>
				<div class="footer-btn"><ul class="footer-btn-list">
						<li><a href="#" class="vintagebtn readmore">Read more</a></li>
						<li><a href="news.php" class="vintagebtn">View All News</a></li>
					</ul></div>
			</article>
		</section>
		
</div>
</body>
</html>