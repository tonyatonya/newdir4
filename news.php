<!DOCTYPE html>
<html lang="">
<head>
	<title></title>
	<?php include('inc_header.php'); ?>
</head>
<body class="menuNormal newspage <?php echo($_SESSION['company']); ?>">
<?php include('inc_companynav.php');?>
<div id="body">
		<?php include('inc_mainmenu.php'); ?>
		<section class="main-content" data-animsition-in="fade-in">
			<div class="toppagebar black">OUR NEWS</div>
			<article class="pagesection hotnews">
				<div class="main-img"><img src="images/mainnewsimg.jpg" style="width: 100%; height: auto;"></div>
				<div class="news-content">
					<h2>news title</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
					</p>
					<div class="footer-btn">
						<ul class="footer-btn-list">
							<li><a href="news-detail.php" class="vintagebtn">Read more</a></li>
						</ul>
					</div>
				</div>
			</article>
			<article class="pagesection news-list">
				<?php for($i = 0 ; $i<10; $i++){ ?>
				<div class="news-child">
					<a href="news-detail.php">
						<div class="main-img"><img src="images/mainnewsimg.jpg" style="width: 100%; height: auto;"></div>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
						</p>
					</a>
				</div>
				<?php } ?>
			</article>
		</section>
</div>
</body>
</html>