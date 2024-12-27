




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
