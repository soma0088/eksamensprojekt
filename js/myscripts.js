//start of java script for nav bar 

  // Mobile menu toggle functionality
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
  });

  // Close mobile menu when a nav link is clicked
  document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
      });
  });

//End of java script for nav bar 



// starting Javascript for footer 

   // Optional: Add some basic form validation
   document.querySelector('.footer-newsletter button').addEventListener('click', function() {
    const emailInput = this.previousElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(emailInput.value)) {
        alert('Thank you for subscribing!');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

// End of Javascript for footer 

// Beginning  of Javascript for slideshow

let slideIndex = 1;
        let slideInterval;
        const intervalTime = 5000; // Time between automatic slide changes (in milliseconds)

        showSlide(slideIndex);
        startSlideshow();

        function changeSlide(n) {
            showSlide(slideIndex += n);
            resetSlideshow();
        }

        function showSlide(n) {
            let slides = document.getElementsByClassName("slide");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
                slides[i].style.opacity = 0;
            }
            slides[slideIndex-1].classList.add("active");
            slides[slideIndex-1].style.opacity = 1;
        }

        function startSlideshow() {
            slideInterval = setInterval(() => {
                changeSlide(1);
            }, intervalTime);
        }

        function resetSlideshow() {
            clearInterval(slideInterval);
            startSlideshow();
        }

        // Pause slideshow when mouse is over the slideshow container
        document.querySelector('.slideshow-container').addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        // Resume slideshow when mouse leaves the slideshow container
        document.querySelector('.slideshow-container').addEventListener('mouseleave', startSlideshow);

// End of Javascript for slideshow




//beginnig of javascript for contact page 

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Reset error messages
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  
  // Validate fields
  let isValid = true;
  
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  
  if (name.value.trim() === '') {
      document.getElementById('nameError').textContent = 'Name is required';
      isValid = false;
  }
  
  if (email.value.trim() === '') {
      document.getElementById('emailError').textContent = 'Email is required';
      isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      document.getElementById('emailError').textContent = 'Email is invalid';
      isValid = false;
  }
  
  if (subject.value.trim() === '') {
      document.getElementById('subjectError').textContent = 'Subject is required';
      isValid = false;
  }
  
  if (message.value.trim() === '') {
      document.getElementById('messageError').textContent = 'Message is required';
      isValid = false;
  }
  
  if (isValid) {
      // If the form is valid, you can submit it to a server here
      alert('Form submitted successfully!');
      this.reset();
  }
});

//End  of javascript for contact page 