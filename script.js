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


const steps = document.querySelectorAll(".form-step");
const stepIndicators = document.querySelectorAll(".form-steps .step");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const submitBtn = document.getElementById("submitBtn");

let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("current", i === index);
    stepIndicators[i].classList.toggle("active", i === index);
  });

  prevBtn.style.display = index === 0 ? "none" : "inline-block";
  nextBtn.style.display = index === steps.length -1 ? "none" : "inline-block";
  submitBtn.style.display = index === steps.length -1 ? "inline-block" : "none";
}

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
