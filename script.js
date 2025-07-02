document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq");
  const searchInput = document.querySelector("#faq-search");
  const faqCount = document.querySelector("#faq-count");

  // Toggle each FAQ on click
  faqItems.forEach((faq) => {
    const question = faq.querySelector("h3");

    question.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });

  // Filter FAQ by search input
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      let visibleCount = 0;

      faqItems.forEach((faq) => {
        const text = faq.querySelector("h3").textContent.toLowerCase();
        const match = text.includes(query);

        faq.style.display = match ? "block" : "none";
        if (match) visibleCount++;
      });

      // Update total visible FAQs
      if (faqCount) {
        faqCount.textContent = `${visibleCount} question${visibleCount === 1 ? '' : 's'} available`;
      }
    });
  }

  // Initial count display
  if (faqCount) {
    faqCount.textContent = `${faqItems.length} question${faqItems.length === 1 ? '' : 's'} available`;
  }
});



document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you! Your message has been sent.');
      contactForm.reset();
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('trackingForm');
  const statusDiv = document.querySelector('.tracking-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const trackingNumber = form.querySelector('input[placeholder*="GS"]');
    const consigneeContact = form.querySelector('input[placeholder*="email"]');

    if (!trackingNumber.value.trim() || !consigneeContact.value.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    // Simulate tracking response
    statusDiv.innerHTML = `
      <p><strong>Status:</strong> In Transit</p>
      <p><strong>Last Location:</strong> Frankfurt, Germany</p>
      <p><strong>Estimated Delivery:</strong> ${new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
    `;
    statusDiv.scrollIntoView({ behavior: 'smooth' });
  });
});

// Reveal sections on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// FAQ accordion toggle
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const steps = document.querySelectorAll(".form-step");
  const indicators = document.querySelectorAll(".form-steps .step");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");

  let currentStep = 0;

  // Initialize
  updateForm();

  // Next button
  nextBtn.addEventListener("click", () => {
    if (validateStep(currentStep)) {
      currentStep++;
      updateForm();
    }
  });

  // Previous button
  prevBtn.addEventListener("click", () => {
    currentStep--;
    updateForm();
  });

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      alert("Booking submitted successfully!");
      form.reset();
      currentStep = 0;
      updateForm();
    }
  });

  function updateForm() {
    // Hide all steps
    steps.forEach((step) => step.classList.remove("current"));
    // Show current step
    steps[currentStep].classList.add("current");

    // Update indicators
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentStep);
    });

    // Show/hide navigation buttons
    prevBtn.style.display = currentStep === 0 ? "none" : "inline-block";
    nextBtn.style.display = currentStep === steps.length - 1 ? "none" : "inline-block";
    submitBtn.style.display = currentStep === steps.length - 1 ? "inline-block" : "none";
  }

  function validateStep(stepIndex) {
    const step = steps[stepIndex];
    const inputs = step.querySelectorAll("input, select, textarea");
    let valid = true;

    inputs.forEach((input) => {
      if (input.hasAttribute("required") && !input.value.trim()) {
        input.style.borderColor = "red";
        valid = false;
      } else {
        input.style.borderColor = "#ccc";
      }
    });

    if (!valid) {
      alert("Please fill in all required fields.");
    }

    return valid;
  }
});



// Event Listeners
nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length -1) {
    currentStep++;
    showStep(currentStep);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

// Initialize
showStep(currentStep);

// Optional: Form submission handler
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Booking submitted successfully!");
  // Here you can handle your AJAX request or redirect
});
