// =============================
// Feature 1: Dark Mode Toggle
// =============================
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// =============================
// Feature 2: Counter
// =============================
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// =============================
// Feature 3: FAQ Toggle
// =============================
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");
faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display = faqAnswer.style.display === "none" ? "block" : "none";
});

// =============================
// Form Validation
// =============================
document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let errors = [];

  if (name === "") errors.push("Name is required.");
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) errors.push("Invalid email.");
  if (password.length < 6) errors.push("Password must be at least 6 characters.");

  if (errors.length > 0) {
    alert("Form errors:\n" + errors.join("\n"));
  } else {
    alert("Form submitted successfully!");
    document.getElementById("signupForm").reset();
  }
});
