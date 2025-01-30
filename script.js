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
