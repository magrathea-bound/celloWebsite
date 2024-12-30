
// Navbar fill in when scrolling down
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {  
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// parallax scrolling function
 //function isInViewport(element) {
 //           const rect = element.getBoundingClientRect();
 //           return (
 //               rect.top >= 0 &&
 //               rect.left >= 0 &&
 //               rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
 //               rect.right <= (window.innerWidth || document.documentElement.clientWidth)
 //           );
 //       }

let parallaxImages = []
parallaxImages.push(document.getElementById('main-image'));
//parallaxImages.push(document.getElementById('recording-image'));

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    for (let parallaxImage of parallaxImages) {
        parallaxImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
}
});


// Bio Expansion
const showMoreButton = document.getElementById('bioShowMoreBtn');
const hiddenContent = document.querySelector('.hidden');

// Add a click event listener to the button
showMoreButton.addEventListener('click', () => {
    if (hiddenContent.style.maxHeight){
        hiddenContent.style.maxHeight = null;
        showMoreButton.textContent = 'Show Less';
    } else{
        hiddenContent.style.maxHeight = hiddenContent.scrollHeight + "px";
        showMoreButton.textContent = 'Show More';

    }

});

//Old Scripts for reference
//Link Switches
//document.addEventListener('DOMContentLoaded', function() {
//    var links = document.querySelectorAll('nav ul li a');
//
//    links.forEach(function(link) {
//        link.addEventListener('click', function(event){
//            event.preventDefault();
//            var image = this.getAttribute('data-image');
//            changeBackground(image, this);
//            switchContent(this);
//            switchActive(link);
//        })
//    })
//});
//
////Load Images
//window.onload = function() {
//    music = new Image();
//    music.src = 'images/DSC09726.jpg';
//    celloEyes = new Image();
//    celloEyes.src = 'images/celloEye.png';
//
//
//}
//
////Functions 
//function changeBackground(image){
//    if (image === null) {
//        document.body.style.backgroundImage = "none";
//    } else {
//    document.body.style.backgroundImage = `url(${image})`;
//    }
//}
//
//function switchContent(target){
//    //Define active content and required content
//    var active = document.querySelector('nav ul .active');
//
//    //Set Key
//    let textMap = new Map();
//    textMap.set('navbar-about','bio-container');
//    textMap.set('navbar-music','music-container');
//    textMap.set('navbar-contact', 'contact-container');
//
//    //Remove current content (if exists) Add next content (if exists)
//    if (textMap.has(active.id)) {
//       removeContent = document.getElementById(textMap.get(active.id));
//        removeContent.style.display = 'none';
//    }
//
//    if (textMap.has(target.id)){
//        addContent = document.getElementById(textMap.get(target.id));
//        addContent.style.display = 'block';
//    }
//}
//
//function switchActive(selectedLink){
//    var active = document.querySelector('nav ul .active');
//    active.classList.remove("active");
//    selectedLink.classList.add("active");
//}
