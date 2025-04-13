document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  // Simple validation
  if (!fullname || !email || !password || !confirmPassword) {
    message.textContent = "Please fill out all fields.";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password should be at least 6 characters.";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    return;
  }

  // Simulate successful sign-up
  message.style.color = "green";
  message.textContent = "Sign up successful! Redirecting...";

  setTimeout(() => {
    window.location.href = "#"; // Change to login page URL
  }, 2000);
});
