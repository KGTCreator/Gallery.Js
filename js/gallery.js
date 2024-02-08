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

document.getElementById('photo.src') = mImages[mCurrentIndex].img
let Date = "Date" = mImages[mCurrentIndex].location;
let Description = "Description" = mImages[mCurrentIndex].location;
let location = "Location" = mImages[mCurrentIndex].location;

	location.innerHTML = "Location: " + mImages[mCurrentIndex].location;
	description.innerHTML = "Description" + mImages[mCurrentIndex].description;
	data.innerHTML = "Date" +  mImages[mCurrentIndex].data;
	console.log('swap photo');

	if(mCurrentIndex == mImages.length) {
		mCurrentIndex = 0;
	} else {
		mCurrentIndex += 1;
	}
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

	// This initially hides the photos' metadata information
	//$('.details').eq(0).hide();
	fetchJSON();

});

window.addEventListener('load', function () {

	console.log('window loaded');

}, false);

function GalleryImage() {
	//implement me as an object to hold the following data about an image:
	//1. location where photo was taken
	let location
	//2. description of photo
	let description
	//3. the date when the photo was taken
	let date
	//4. either a String (src URL) or an an HTMLImageObject (bitmap of the photo. https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
	let imgSrc = "mImages"
}

function fetchJSON() {
	mRequest.open("GET", mUrl);
	mRequest.onload = () => {
		if (mRequest.readyState === 4) {
			if (mRequest.status === 200) {
				mJson = $.parseJSON(mRequest.responseText);
				console.log(mJson);
				
			}
		}
	}
	mRequest.send();
};

$( "#mydiv" ).hasClass( "bar" )
