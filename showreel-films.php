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
		<section class="main-content" data-animsition-in="fade-in">
			<?php for($i=0;$i<4;$i++){ ?>
			<article class="pagesection video" style="background-image:url(images/testthumb1.jpg)">
				<div class="hover">
					<div class="hoverbox">
						<a class="play" href="showreel-director.php">
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
						</a>
					</div>
				</div>
			</article>
			<?php } ?>
		</section>
</div>
</body>
</html>