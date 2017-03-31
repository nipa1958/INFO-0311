/*
	on document load
		load high c tenor pan still image
		load high c tenor pan buttons

	if base pan is clicked
		change image to tenor base pan still image
		change buttons to tenor bass buttons

		if pan note button is clicked
			play sound
			change image to gif
*/

// on document load
// load high c tenor pan still image
// load high c tenor pan buttons
$(document).ready(function(){
	$("#imageofpan").attr("src","image/hightenorpan.jpg");
	$("#musicnote5").hide(); 
	$("#musicnote6").hide(); 
	$("#musicnote7").hide(); 
	$("#musicnote8").hide(); 
});

$(document).ready(function(){
	//if button is clicked
	// declare variables to represent each audio element by Id
	var panaudio1 = document.getElementById('audio1');
	var panaudio2 = document.getElementById('audio2');
	var panaudio3 = document.getElementById('audio3');
	var panaudio4 = document.getElementById('audio4');
	var panaudio5 = document.getElementById('audio5');
	var panaudio6 = document.getElementById('audio6');
	var panaudio7 = document.getElementById('audio7');
	var panaudio8 = document.getElementById('audio8');

	$("#musicnote1").click(function(){
		//alert("some text");
		$("#imageofpan").attr("src","image/htA4.gif");
		panaudio1.play();
		// the two lines below stops the audio from playing. 
		// this has to be programmed under a separate button
		// panaudio1.pause();
		// panaudio1.currentTime = 0;
	});

		$('#musicnote2').click(function(){
		//var panaudio2 = document.getElementByID('audio2')
		//play particular sound
		panaudio2.play();
		//set image #imageofpan src to image/"whatever".gif
		$("#imageofpan").attr("src","image/htA4.gif");
		//play particular gif
	});
		$('#musicnote3').click(function(){
		//var panaudio3 = document.getElementByID('audio3')
		//play particular sound
		panaudio3.play();
		//set image #imageofpan src to image/"whatever".gif
		$("#imageofpan").attr("src","image/htA4.gif");
		//play particular gif
	});
		$('#musicnote4').click(function(){
		//var panaudio4 = document.getElementByID('audio4')
		//play particular sound
		panaudio4.play();
		//set image #imageofpan src to image/"whatever".gif
		$("#imageofpan").attr("src","image/htA4.gif");
		//play particular gif
	});
		$('#musicnote5').click(function(){
		//var panaudio = document.getElementByID('audio1')
		//play particular sound
		panaudio5.play();
		//set image #imageofpan src to image/"whatever".gif
		$("#imageofpan").attr("src","image/htA4.gif");
		//play particular gif
	});
		$('#musicnote6').click(function(){
		//var panaudio = document.getElementByID('audio1')
		//play particular sound
		panaudio6.play();
		//set image #imageofpan src to image/"whatever".gif
		$("#imageofpan").attr("src","image/htA4.gif");
		//play particular gif
	});
		$('#musicnote7').click(function(){
		//var panaudio = document.getElementByID('audio1')
		//play particular sound
		panaudio7.play();
		//set image #imageofpan src to image/"whatever".gif
		$("#imageofpan").attr("src","image/htA4.gif");
		//play particular gif
	});
		$('#musicnote8').click(function(){
		//var panaudio = document.getElementByID('audio1')
		//play particular sound
		panaudio8.play();
		//set image #imageofpan src to image/"whatever".gif
		$("#imageofpan").attr("src","image/htA4.gif");
		//play particular gif
	});
});

//when the high c tenor pan link is clicked or when the bass pan is selected
//change the image on the screen to reflect that choice
//subsequently, show and hide the appropriate buttons
$(document).ready(function(){
		// change the image attribute to the first image by clicking the link (tenor steel pan)
	$("#image1").click(function(){
		// when link tenor steel pan is clicked do the following
		$("#imageofpan").attr("src","image/hightenorpan.jpg");
		// show and hide the appropriate buttons
		$("#musicnote1").show(); 
		$("#musicnote2").show(); 
		$("#musicnote3").show(); 
		$("#musicnote4").show();
		$("#musicnote5").hide(); 
		$("#musicnote6").hide(); 
		$("#musicnote7").hide(); 
		$("#musicnote8").hide(); 
		//
		});

	// change the image attribute to the second image by clicking the link (bass drums)
	$("#image2").click(function(){
		// when bass drum is clicked do the following
		$("#imageofpan").attr("src","image/bassdrums.jpg");
		// show and hide the appropriate buttons
		$("#musicnote1").hide(); 
		$("#musicnote2").hide(); 
		$("#musicnote3").hide(); 
		$("#musicnote4").hide(); 
		$("#musicnote5").show(); 
		$("#musicnote6").show(); 
		$("#musicnote7").show(); 
		$("#musicnote8").show();
	});
});
