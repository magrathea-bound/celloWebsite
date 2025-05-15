
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
