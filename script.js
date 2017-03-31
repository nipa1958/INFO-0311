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
	$("#panImage").attr("src","image/hightenorpan.jpg");
	$('[id^=TB]').parent().hide(); 
});

//create audio element to play sound
//play the specific audio file which is detemined by the buttons id. 
//The audio files and the buttons id are the same, except for the file extension whcih is mp3.
$(document).ready(function(){
	//create a new audio element
	var panSound = document.createElement('audio');
	//if any button is clicked
	$('button').click(function(){
	//save button id into string variable named audioname		
		var audioname = ($(this).attr('id'));
		//set src attribute to audio element as audio/"audioname".mp3
		panSound.setAttribute('src', "audio/"+audioname+".mp3"/*'audio/HTA4.mp3'*/);
		//play particular sound
		panSound.play();
		//set image #panImage src to image/"audioname".gif
		$("#panImage").attr("src","image/"+audioname+".gif");
		//play particular gif
	});
});

function playSong(note){
	var song = document.createElement('audio');
	song.setAttribute('src', 'audio/'+note);
	song.play();
}

$(document).ready(function(){
	
		// change the image attribute to the first image by clicking the link (tenor steel pan)
	$(tenorImage).click(function(){
		// when link tenor steel pan is clicked do the following
		$("#panImage").attr("src","image/hightenorpan.jpg");
		// access the image attribute and change the source to the first image
		$('[id^=TB]').parent().hide();
		$('[id^=HT]').parent().show();
		//
		});
	// change the image attribute to the second image by clicking the link (bass drums)
	$(bassImage).click(function(){
		// when bass drum is clicked do the following
		$("#panImage").attr("src","image/bassdrums.jpg");
		// access the image attribute and change the source to the second image
		$('[id^=HT]').parent().hide();
		$('[id^=TB]').parent().show(); 
	});
	
	$(songone).click(function(){					
		setTimeout(function(){
			playSong("htG5.mp3");
		}, 0);
		setTimeout(function(){
			playSong("htC4.mp3");
		}, 500);
		setTimeout(function(){
			playSong("htD4.mp3");
		}, 1000);
		setTimeout(function(){
			playSong("htE4.mp3");
		}, 1500);
		setTimeout(function(){
			playSong("htE4.mp3");
		}, 3000);
		setTimeout(function(){
			playSong("htE4.mp3");
		}, 4000);
		setTimeout(function(){
			playSong("htD4.mp3");
		}, 4500);					
		setTimeout(function(){
			playSong("htE4.mp3");
		}, 5000);
		setTimeout(function(){
			playSong("htC4.mp3");
		}, 5500);
		setTimeout(function(){
			playSong("htC4.mp3");
		}, 7000);				    
	});
});
