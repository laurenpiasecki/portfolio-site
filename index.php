<?php 
ob_start();
if(isset($_SESSION)) {
	session_destroy(); 
	$_SESSION = array();
} ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Lauren Piasecki</title>
  <meta charset="utf-8">
  <link rel="shortcut icon" type="image/x-icon" href="/img/favi.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="/style/style.css">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="scripts.js"></script>
</head>

<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">

<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#myPage"><img src="/img/lp4.png" width="30%" /></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#myPage">HOME</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
		<li><a href="#photography">PHOTOGRAPHY</a></li>
		<li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>

<div id="myCarousel" class="carousel slide" data-ride="carousel" style="overflow:hidden">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="/img/carousel1.jpg" alt="Whistler">
      <div class="carousel-caption">
		  <h3><b>Hello! My name is Lauren Piasecki.</b></h3>
		  <p>I am a junior web developer.</p>
		  <p>&nbsp;</p>
      </div> 
    </div>

    <div class="item">
      <img src="/img/carousel2.jpg" alt="Bear">
      <div class="carousel-caption">
		  <h3><b>Bear the Cat! Follow him on Instagram</b></h3>
		  <p><b><a href="https://www.instagram.com/bearbear.cat/" target="_blank">@bearbear.cat</a></b><p>
      </div> 
    </div>

    <div class="item">
      <img src="/img/carousel3.jpg" alt="Arizona">
      <div class="carousel-caption">
		  <h3><b>Travel photography - See below.</b></h3>
		  <p>&nbsp;</p>
      </div> 
    </div>
  </div>

  <div class="controls">
  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>	
</div>
	
<div id="portfolio" class="container text-center">
  <h3>LAUREN PIASECKI</h3>
	<div class="row">
    <div class="col-sm-4">
		</div>
		<div class="col-sm-4">
	<img src="/img/me3.jpg" class="img-circle person" alt="Lauren" width="50%" height="auto">
		</div>
		<div class="col-sm-4">
		</div>
	</div>
  <p><em>I am currently finishing up the post-grad Web Development program at Humber College.</em></p>
  <p>Please see below for a portfolio of my work and also some of my photography.</p>
  <br>
  <div class="row">
    <div class="col-sm-3">
      <p class="text-center"><strong>Destination Wishlist</strong></p><br>
      <a href="#demo" data-toggle="collapse">
        <img src="/img/wishlist-circle.png" class="img-circle person" alt="Destination Wishlist" width="250" height="250">
      </a>
      <div id="demo" class="collapse">
	<p><a href="#" onclick="window.open('http://wishlist.laurenpiasecki.com', 'newwindow', 'width=1450, height=600'); return false;">Click Here To View</a></p>
        <p><p>Part of a group project where we created a fictional travel website for Travel Time.</p>
		  <p>Here you will find the destination wishlist page where users can create a personalized list of places they will to travel to.</p>			<p>Made using PHP, HTML, CSS, Javascript, JQuery & AJAX.</p></p>
      </div>
    </div>
    <div class="col-sm-3">
      <p class="text-center"><strong>Travel Map</strong></p><br>
      <a href="#demo2" data-toggle="collapse">
        <img src="/img/travel-circle3.png" class="img-circle person" alt="Travel Map" width="250" height="250">
      </a>
	<div id="demo2" class="collapse">
		<p><a href="#" onclick="window.open('http://travel.laurenpiasecki.com', 'newwindow', 'width=1450, height=600'); return false;">Click Here To View</a></p>
		<p><p>A world map with markers on the places I have travelled to.</p> 
		<p>When markers are clicked they will reveal photos taken by me from my Flickr account.</p> 
		<p>Made using Javascript, HTML, CSS, Google Maps API & Flickr API.</p></p>
      </div>
    </div>
	    <div class="col-sm-3">
      <p class="text-center"><strong>Chatroom Application</strong></p><br>
      <a href="#demo3" data-toggle="collapse">
        <img src="/img/chat-circle.png" class="img-circle person" alt="Chatroom Application" width="250" height="250">
      </a>
      <div id="demo3" class="collapse">
        <p><a href="#" onclick="window.open('http://chatroom.laurenpiasecki.com', 'newwindow', 'width=1450, height=600'); return false;">Click Here To View</a></p>
		  <p><p>A simple chatroom application. Users are able to login & logout. </p>
		  <p>Messages are saved & multiple users can participate in this chatroom.</p>
		  <p>Made using PHP, HTML, CSS, XML, Javascript, JQuery & AJAX.</p></p>
      </div>
    </div>
	    <div class="col-sm-3">
      <p class="text-center"><strong>Mu Restaurant</strong></p><br>
      <a href="#demo4" data-toggle="collapse">
        <img src="/img/mu-circle.png" class="img-circle person" alt="Mu Restaurant" width="250" height="250">
      </a>
      <div id="demo4" class="collapse">
		  <p><a href="#" onclick="window.open('http://mu.laurenpiasecki.com/events.html', 'newwindow', 'width=1450, height=600'); return false;">Click Here To View</a></p>
        <p><p>A group project where we created a fictional resaturant website for Mu Steakhouse. </p>
		  <p>Here you will find the events booking page.</p>
		  <p>Made using HTML, CSS, Javascript & JQuery.</p></p>
      </div>
    </div>
  </div>
</div>

<div id="photography" class="bg-1">
  <div class="container text-center">
    <h3>SOME PHOTOS</h3>
    <p class="text-center">Mostly nature.<br> And <a href="https://www.instagram.com/bearbear.cat/" target="_blank">@bearbear.cat</a></p>
	  <p>&nbsp;</p>
    <div class="row text-center">
      <div class="col-sm-4">
        <div class="thumbnail">
          <img src="/img/carosq1.jpg" alt="Whistler">
          <p><strong>Whistler</strong></p>
			<button class="btn" a href="photos1.php">Click</button>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="thumbnail">
          <img src="/img/carosq2.jpg" alt="Bear">
          <p><strong>Bear</strong></p>
          <button class="btn" a href="photos1.php">Click</button>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="thumbnail">
          <img src="/img/carosq3.jpg" alt="Arizona">
          <p><strong>Arizona</strong></p>
          <button class="btn" a href="photos1.php">Click</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="contact" class="container">
  <h3 class="text-center">CONTACT</h3>
  <p class="text-center"><em>Hello!</em></p>
	<p>&nbsp;</p>
  <div class="row">
    <div class="col-md-4">
      <p>Questions? Comments?</p>
      <p><span class="glyphicon glyphicon-map-marker"></span>&emsp;<a href="https://maps.google.com/?q=43.6532,-79.3832" target="_blank">Toronto, Canada</a></p>
      <p><span class="glyphicon glyphicon-envelope"></span>&emsp; 
		  <a href="mailto:lauren@laurenpiasecki.com?subject=Greetings%20from%20your%20website!">lauren@laurenpiasecki.com</a></p>
	  <p><span class="glyphicon glyphicon-camera"></span>&emsp;<a href="https://www.instagram.com/bearbear.cat/" target="_blank">@bearbear.cat</a></p>
    </div>
    <div class="col-md-8">
      <div class="row">
        <div class="col-sm-6 form-group">
          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required>
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
        </div>
      </div>
      <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
      <br>
      <div class="row">
        <div class="col-md-12 form-group">
          <button class="btn pull-right" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
  <br>
  <h3 class="text-center">ETC...</h3>  
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">Science</a></li>
    <li><a data-toggle="tab" href="#menu1">Writing</a></li>
    <li><a data-toggle="tab" href="#menu2">Volunteer</a></li>
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h2>Science</h2>
      <p>Bachelor of Science (BSc) from The University of Guelph.</p>
	  <p>Major: Biological Science</p>
	  <p>Minor: Nutritional Sciences</p>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h2>Writing</h2>
      <p>Currently persuing a certificate in Creative Writing from the University of Toronto.</p>
      <p>In my spare time I enjoy reading and working on my first novel.</p>
	  <p>Actively seeking out freelance copywriting work.</p>
    </div>
    <div id="menu2" class="tab-pane fade">
      <h2>Volunteer</h2>
		<p>Copywriter/Feral Feeder for the Annex Cat Rescue in Toronto.</p>
		<p>As a Copywriter, I am involved in contributing articles to the blog and newsletter.</p>
		<p>As a Feral Feeder, I feed and monitor the cat colonies in Chinatown.</p>
    </div>
  </div>
</div>

<div id="googleMap"></div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAyaVkZRR5kZ35crGFsGmobTGVb9d7dHSo&callback=myMap"></script>

<!-- Footer -->
<footer class="text-center">
  <a class="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </a><br><br>
  <p>&copy; 2017. Lauren Piasecki. All rights reserved. </p> 
</footer>

<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-96842058-1', 'auto');
  ga('send', 'pageview');
</script>
</body>
</html>
