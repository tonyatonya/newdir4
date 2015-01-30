<!DOCTYPE html>
<html lang="">
<head>
	<title></title>
	<?php include('inc_header.php'); ?>
	<script type="text/javascript">
		$(document).ready(function(){
			$(".main-content").css({
				'min-height':$(window).height()
			})
		})
	</script>
</head>
<body class="menuNormal contactpage <?php echo($_SESSION['company']); ?>">
<?php include('inc_companynav.php');?>
<div id="body">
	<div class="row">
		<?php include('inc_mainmenu.php'); ?>
		<section class="main-content">
			<article class="pagesection contact">
				<div class="toppagebar black">CONTACT INFO</div>
				<div class="contact-info">
					<div>
						<h3>DIR4 Co., Ltd.</h3>
						<p>
							6/1 Soi Ari 5, Paholyothin Rd. Samsennai,<br>
							Phayathai, Bangkok 10400, Thailand.<br>
							T. +66 (0)2.617.0143<br>
							F. +66 (0)2.279.1448<br>
							E. producer@dir4films.com<br>
							E. marketing@dir4films.com
						</p>
						<div class="line"></div>
						<p>www.dir4films.com</p>
						
						<div class="footer-btn"><ul class="footer-btn-list">
						<li><a href="#" class="vintagebtn downloadmap">Download map</a></li>
						<li><a href="#" class="vintagebtn">Company profile</a></li>
					</ul></div>
					</div>
				</div>
			</article>
			<ul class="contact-info-list">
				<li>
					<div class="toppagebar lightblack">MAP</div>
					<article class="pagesection map">
						<div class="map-info">
					<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=dir4&amp;hl=en&amp;sll=13.723419,100.476232&amp;sspn=0.840468,1.271667&amp;hq=dir4&amp;t=m&amp;ie=UTF8&amp;hnear=&amp;cid=8401978768977142337&amp;source=embed&amp;z=10&amp;iwloc=A&amp;output=embed"></iframe><br />
						<small>
				</div>
					</article>
				</li>
				<li>
					<div class="toppagebar gray">CONTACT FORM</div>
					<article class="pagesection contactform">
						<table style="width:340px; margin-left: auto;margin-right: auto;">
						<tr>
							<td>
								<span>NAME</span>
								<input type="text" class="form-control">
							</td>
						</tr>
						<tr>
							<td>
								<span>E-MAIL NAME</span>
								<input type="text" class="form-control">
							</td>
						</tr>
						<tr>
							<td>
								<span>PHONE</span>
								<input type="text" class="form-control">
							</td>
						</tr>
						<tr>
							<td>
								<span>SELECT TOPIC</span>
								<input type="text" class="form-control">
							</td>
						</tr>
						<tr>
							<td>
								<span>SELECT SERVICE</span>
								<input type="text" class="form-control">
							</td>
						</tr>
						<tr>
							<td>
								<span>MESSAGE</span>
								<textarea class="form-control"></textarea>
							</td>
						</tr>
						<tr>
							<td>
								<a class="vintagebtn">SEND</a>
							</td>
						</tr>
					</table>
					</article>		
				</li>
				<li>
					<div class="toppagebar gray">COMPANY PROFILE</div>
					<article class="pagesection companyprofile">
				<h2>COMPANY PROFILE</h2>
				<div class="line"></div>
				<p>At Dir4films, we produce pieces of visuals to best fit your needs and honour your eyes.We provide a full production service from a storyboard to post produced image to create a high quality TV spot for your product or service.</p>

<p>At DIR4 TV, we produce TV programs, series, and documentaries. Meaningful images as well as beauty of knowledge are our main concerns. Our full production service is to create high quality visuals. We are the new generation content providers and the artistic visual makers.</p>

<p>At 4Play, we produce and create TV commercials, Viral, Music Videos and innovative visual medias. We make things simple but creative by professional compact team.</p>
			</article>
				</li>
			</ul>
		
		</section>
	</div>
</div>
</body>
</html>