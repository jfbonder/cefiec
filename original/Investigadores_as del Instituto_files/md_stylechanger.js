var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
/*global window, localStorage, fontSizeTitle, bigger, reset, smaller, biggerTitle, resetTitle, smallerTitle, Cookie */
var prefsLoaded = false;
var defaultFontSize = 100;
var currentFontSize = defaultFontSize;
var fontSizeTitle;
var bigger;
var smaller;
var reset;
var biggerTitle;
var smallerTitle;
var resetTitle;

Object.append(Browser.Features, {
	localstorage: (function() {
		return ('localStorage' in window) && window.localStorage !== null;
	})()
});

function setFontSize(fontSize) {
	document.body.style.fontSize = fontSize + '%';
}

function changeFontSize(sizeDifference) {
	currentFontSize = parseInt(currentFontSize, 10) + parseInt(sizeDifference * 5, 10);
	if (currentFontSize > 180) {
		currentFontSize = 180;
	} else if (currentFontSize < 60) {
		currentFontSize = 60;
	}
	setFontSize(currentFontSize);
}

function revertStyles() {
	currentFontSize = defaultFontSize;
	changeFontSize(0);
}

function writeFontSize(value) {
	if (Browser.Features.localstorage) {
		localStorage.fontSize = value;
	} else {
		Cookie.write("fontSize", value, {duration: 180});
	}
}

function readFontSize() {
	if (Browser.Features.localstorage) {
		return localStorage.fontSize;
	} else {
		return Cookie.read("fontSize");
	}
}

function setUserOptions() {
	if (!prefsLoaded) {
		var size = readFontSize();
		currentFontSize = size ? size : defaultFontSize;
		setFontSize(currentFontSize);
		prefsLoaded = true;
	}
}

function addControls() {
	var container = document.id('fontsize');
	var content = '<h3>'+ fontSizeTitle +'</h3><p><a title="'+ biggerTitle +'"  href="#" onclick="changeFontSize(2); return false">'+ bigger +'</a><span class="unseen">.</span><a href="#" title="'+resetTitle+'" onclick="revertStyles(); return false">'+ reset +'</a><span class="unseen">.</span><a href="#"  title="'+ smallerTitle +'" onclick="changeFontSize(-2); return false">'+ smaller +'</a></p>';
	container.set('html', content);
}

function saveSettings() {
	writeFontSize(currentFontSize);
}

window.addEvent('domready', setUserOptions);
window.addEvent('domready', addControls);
window.addEvent('unload', saveSettings);
}

/*
     FILE ARCHIVED ON 02:42:18 Jun 19, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:08:18 Nov 20, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.517
  load_resource: 47.743
  PetaboxLoader3.datanode: 41.58 (2)
  loaddict: 18.09
*/