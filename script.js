document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest("nav")) {
      navLinks.classList.remove("active")
    }
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      navLinks.classList.remove("active")

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Form submission handling
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // In a real implementation, you would send the form data to a server
      // For GitHub Pages, we'll just show a success message

      const formData = new FormData(contactForm)
      const formValues = {}

      for (const [key, value] of formData.entries()) {
        formValues[key] = value
      }

      console.log("Form submitted:", formValues)

      // Show success message
      contactForm.innerHTML = `
        <div class="success-message">
          <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--secondary-color); margin-bottom: 1rem;"></i>
          <h3>Thank you for your message!</h3>
          <p>We've received your inquiry and will get back to you soon.</p>
        </div>
      `
    })
  }

  // Add animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".feature-card, .module-card, .application-card")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  document.querySelectorAll(".feature-card, .module-card, .application-card").forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Run animation on scroll
  window.addEventListener("scroll", animateOnScroll)

  // Run once on page load
  animateOnScroll()
})
