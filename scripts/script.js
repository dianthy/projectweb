// JavaScript Document

var mobileMenu = document.querySelector ("#mobile-menu");
var mobileOpenButton = document.querySelector ("#open-menu-button")
var mobileCloseButton = document.querySelector ("#close-menu-button")

//Mobile menu functions

function openMobileMenu() {
	console.log("on")
	mobileMenu.classList.add("open")
}

function closeMobileMenu() {
	mobileMenu.classList.remove("open");
}

// Event Listeners mobile menu
mobileOpenButton.addEventListener("click", openMobileMenu);
mobileCloseButton.addEventListener("click", closeMobileMenu);