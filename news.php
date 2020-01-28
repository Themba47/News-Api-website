<!DOCTYPE html>
<html>
<head>
	<title>News</title>
</head>
<body>
	<?php include('header.php'); ?>
	<div id="news"></div>

	<?php include('bottom.php'); ?>
	<script>
		
		var ndaBa = document.getElementById('news');

		const link = 'https://newsapi.org/v2/everthing?' +
		  'q=business&' +
          'from=2020-01-28&' +
          'sortBy=popularity&' +
          'apiKey=bfc33149f17e41e7aaf432b29ac40c2f';


		let xop = new XMLHttpRequest();
		xop.open('GET', link, true);
		xop.onload = () => {
			myObj = JSON.parse(xop.response);
		var	taba = myObj.articles;

			var output = '';
    for(var i = 0; i < taba.length; i++) {
    	output +=  '<div class="news-article"><a class="cnn" href="' + taba[i].url + '"><img src="'+ taba[i].urlToImage + '" width="100%"><h2>' + taba[i].source.name + '</h2><p>' + taba[i].description + '</p></a></div><br><br><br>';
    }

    ndaBa.innerHTML = output;
		};
		xop.send();

	</script>
</body>
</html>