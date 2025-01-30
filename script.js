// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      alert('sdf')
      e.preventDefault();
      alert(this.getAttribute('href'))
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 220,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Alert for "Download Resume" button click
  function showDownloadMessage() {
    const message = document.getElementById('download-message');
    message.style.display = 'block';
    setTimeout(() => {
      message.style.display = 'none';
    }, 3000); // Hide message after 3 seconds
  }



  document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section"); // All sections
    const navLinks = document.querySelectorAll("nav a"); // Navigation links
  
    let currentSectionId = "";
  
    // Check which section is in the viewport
    sections.forEach((section) => {
      const sectionTop = section.offsetTop; // Distance from top of page
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
  
      // If the scroll position is within the section
      if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionBottom - 50) {
        currentSectionId = section.getAttribute("id");
      }
    });
  
    // Highlight the corresponding nav link
    navLinks.forEach((link) => {
      link.classList.remove("active"); // Remove active class from all links
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active"); // Add active class to the current link
      }
    });
  });