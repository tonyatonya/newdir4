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
		<section class="main-content play-list" data-animsition-in="fade-in" id="play-list">
			<div class="toppagebar col-md-12">
				4PLAY
			</div>
			<div class="cls"></div>
			<?php for($j=0;$j<2;$j++){ ?>
			<div class="play-alllist">
				<?php for($i=0;$i<15;$i++){ ?>
					<article class="play-child">
						<div class="number"><?php echo($i+1); ?></div>
						<a class="tovdo" href="//player.vimeo.com/video/97704117?api=1&title=0&amp;byline=0&amp;portrait=0">
							<figure >
								<img src="images/testthumb1.jpg">
								<figcaption>
									<div class="holder">
										<h3>PASSENGER Scare Away The Dark</h3>
										<b></b>
									</div>
								</figcaption>
							</figure>
						</a>
						<div class="footer-btn">
							<ul class="footer-btn-list">
								<li><a href="//player.vimeo.com/video/97704117?api=1&title=0&amp;byline=0&amp;portrait=0" class="tovdo vintagebtn">View more</a></li>
							</ul>
							</div>
					</article>
				<?php } ?>
			</div>
			<?php } ?>
		</section>
</div>
<script type="text/javascript">
	$(document).ready(function(){
		$(".tovdo").colorbox({iframe:true, innerWidth:'80%', innerHeight:'80%'});
	})
</script>
</body>
</html>