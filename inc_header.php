<?php session_start(); ?>
<meta charset="utf-8">
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="robots" content="" />
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/reset.css" media="all"/>
    <link rel="stylesheet" href="css/print.css" media="print"/>
	<link rel="stylesheet" href="css/bootstrap.css" />
	<link rel="stylesheet" href="css/bootstrap-theme.css"/>
	<link rel="stylesheet" href="css/colorbox.css"/>
	<link rel="stylesheet" href="css/animsition.css"/>
	<link rel="stylesheet" href="css/layout.css" />
	<link rel="stylesheet" href="css/mobile.css"/>
	
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
	<script type="text/javascript" src="js/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="js/bootstrap.js"></script>
	<script  type="text/javascript" src="js/dir4.js"></script>
	<script type="text/javascript" src="js/froogaloop.js"></script>
	<script type="text/javascript" src="js/jquery.hoverIntent.minified.js"></script>
	<script type="text/javascript" src="js/jquery.colorbox-min.js"></script>
	<script type="text/javascript" src="js/jquery.animsition.min.js"></script>
	<?php
		if($_SESSION['company'] == ''){
			$_SESSION['company'] = 'films';
		}
	?>
	<script type="text/javascript">
		$(document).ready(function(){
			//page transition effect
		
			$(".main-content").animsition({
	  
			    inClass               :   'fade-in',
			    outClass              :   'fade-out',
			    inDuration            :    1000,
			    outDuration           :    500,
			    linkElement           :   '.animsition-link',
			    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
			    loading               :    true,
			    loadingParentElement  :   'body', //animsition wrapper element
			    loadingClass          :   'animsition-loading',
			    unSupportCss          : [ 'animation-duration',
			                              '-webkit-animation-duration',
			                              '-o-animation-duration'
			                            ],
			    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
			    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			    overlay               :   false,
			    
			    overlayClass          :   'animsition-overlay-slide',
			    overlayParentElement  :   'body'
			  });

		})
		
	</script>