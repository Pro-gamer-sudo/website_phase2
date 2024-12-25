document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.menu a');
    
 
    const backToTopBtn = document.getElementById("backToTopBtn");
    
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
function expandImage(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    
    modal.style.display = "block";
    modalImg.src = img.src;

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
}

// To close the modal when clicking outside of the image
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleMenu() {
    const menu = document.getElementById('myMenu');
    menu.classList.toggle('show');
}
function myFunction(x) {
    x.classList.toggle("change");
  }


// document.addEventListener("DOMContentLoaded", function() {
//     let imageContainer = document.getElementById('gallery-container');
//     let loadMoreBtn = document.getElementById('loadMoreBtn');

//     let images = [];
//     for (let i = 1; i <= 30; i++) {
//         images.push(`./images/gallery/${i}.jpg`);
//     }

//     let imagesLoaded = 0;
//     const imagesToLoad = 8;

//     function loadImages() {
//         for (let i = imagesLoaded; i < imagesLoaded + imagesToLoad && i < images.length; i++) {
//             let img = document.createElement('img');
//             img.src = images[i];
//             img.alt = `Gallery Image ${i + 1}`;
//             imageContainer.appendChild(img);
//         }
//         imagesLoaded += imagesToLoad;

//         if (imagesLoaded >= images.length) {
//             loadMoreBtn.style.display = 'none';
//         }
//     }

//     loadMoreBtn.addEventListener('click', loadImages);
//     loadImages();
// });
//home page slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//gallery buttion 
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
