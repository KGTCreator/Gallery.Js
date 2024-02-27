// requestAnim shim layer by Paul Irish
window.requestAnimFrame = (function () {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (/* function */ callback, /* DOMElement */ element) {
			window.setTimeout(callback, 1000 / 60);
		};
})();


// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
	requestAnimFrame(animate);
	var currentTime = new Date().getTime();
	if (mLastFrameTime === 0) {
		mLastFrameTime = currentTime;
	}

	if ((currentTime - mLastFrameTime) > mWaitTime) {
		swapPhoto(

		);
		mLastFrameTime = currentTime;
	}
}

/************* DO NOT TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {

	if (mCurrentIndex >= mImages.length) {
		mCurrentIndex = 0
	}
	if (mCurrentIndex < 0) {
		mCurrentIndex = mImages.length - 1
	}



	document.getElementById('photo').src = mImages[mCurrentIndex].img
	let date = document.getElementsByClassName('date');
	let description = document.getElementsByClassName('description');
	let location = document.getElementsByClassName('location');

	location[0].innerHTML = "Location: " + mImages[mCurrentIndex].location;
	description[0].innerHTML = "Description" + mImages[mCurrentIndex].description;
	date[0].innerHTML = "Date" + mImages[mCurrentIndex].date;
	console.log('swap photo');

	mCurrentIndex++


}

// Counter for the mImages array
var mCurrentIndex = 0;

// XMLHttpRequest variable
var mRequest = new XMLHttpRequest();

// Array holding GalleryImage objects (see below).
var mImages = [];

// Holds the retrived JSON information
var mJson;

// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
var mUrl = 'images.json';


//You can optionally use the following function as your event callback for loading the source of Images from your json data (for HTMLImageObject).
//@param A GalleryImage object. Use this method for an event handler for loading a gallery Image object (optional).
function makeGalleryImageOnloadCallback(galleryImage) {
	return function (e) {
		galleryImage.img = e.target;
		mImages.push(galleryImage);
	}
}

$(document).ready(function () {

	fetchJSON();
	// This initially hides the photos' metadata information

	//$('.details').eq(0).hide();
});

window.addEventListener('load', function () {

	console.log('window loaded');

}, false);

function galleryImage() {
	//implement me as an object to hold the following data about an image:
	//1. location where photo was taken
	let location
	//2. description of photo
	let description
	//3. the date when the photo was taken
	let date
	//4. either a String (src URL) or an an HTMLImageObject (bitmap of the photo. https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
	let imgPath
}

function fetchJSON() {

	mRequest.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200){
			mJson = JSON.parse(mRequest.responseText)
			iterateJSON(mJson)
			console.log ('ready!')
		}
	}

	mRequest.open("GET", mUrl), true;
	mRequest.send();

};

$(document).ready(function () {
	$(".moreIndicator").on("click", function () {
		if ($(".moreIndicator").hasClass("rot90")) {
			$(".moreInidcator").removeclass('rot90').addClass("rot270")
		} else {
			$(".moreIndicator").removeClass("rot270").addClass("rot90")
		}
		$('.details').slideToggle();
	});

	$("#prevPhoto").on("click", function () {
		mCurrentIndex = mCurrentIndex - 2;
		swapPhoto()
	});

	$("#nextPhoto").on("click", function () {
		mCurrentIndex++
		swapPhoto()
	});
	$('#nextPhoto').position({
		of: '#nav',
		my: 'right',
		at: 'right',
	});
});

function iterateJSON(mJson) {
	for (let x = 0; x < mJson.images.length; x++) {
		mImages = new galleryImage();
		mImages[x].location = mJson.images[x].imgLocation;
		mImages[x].date = mJson.images[x].date;
		mImages[x].img = mJson.images[x].imgPath;
		mImages[x].description = mJson.images[x].description;
	}
}

$("#mydiv").hasClass("bar")

$("#nextPhoto").on("click", () => {
	mCurrentIndex = mCurrentIndex + 1
})
