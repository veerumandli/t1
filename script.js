const profile = {
  name: "Your Name",
  role: "Developer, creator, and lifelong learner",
  bio: "I build thoughtful digital experiences, share what I learn, and enjoy connecting with people who are curious about technology, design, and meaningful work.",
  email: "hello@example.com",
  socials: [
    {
      name: "GitHub",
      handle: "@yourgithub",
      url: "https://github.com/yourgithub",
      icon: "GH"
    },
    {
      name: "LinkedIn",
      handle: "Your Name",
      url: "https://www.linkedin.com/in/yourprofile",
      icon: "in"
    },
    {
      name: "X",
      handle: "@yourhandle",
      url: "https://x.com/yourhandle",
      icon: "X"
    },
    {
      name: "Instagram",
      handle: "@yourinstagram",
      url: "https://www.instagram.com/yourinstagram",
      icon: "IG"
    }
  ]
};

const nameElement = document.querySelector("#profile-name");
const roleElement = document.querySelector("#profile-role");
const bioElement = document.querySelector("#profile-bio");
const emailLink = document.querySelector("#email-link");
const copyEmailButton = document.querySelector("#copy-email");
const socialLinks = document.querySelector("#social-links");
const themeToggle = document.querySelector(".theme-toggle");
const toast = document.querySelector("#toast");

let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}

function renderProfile() {
  document.title = `${profile.name} | Profile`;
  nameElement.textContent = profile.name;
  roleElement.textContent = profile.role;
  bioElement.textContent = profile.bio;
  emailLink.href = `mailto:${profile.email}`;

  socialLinks.innerHTML = "";
  profile.socials.forEach((social) => {
    const link = document.createElement("a");
    link.className = "social-link";
    link.href = social.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerHTML = `
      <span class="social-icon" aria-hidden="true">${social.icon}</span>
      <span class="social-text">
        <span class="social-name">${social.name}</span>
        <span class="social-handle">${social.handle}</span>
      </span>
    `;
    socialLinks.appendChild(link);
  });
}

copyEmailButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
    showToast("Email copied");
  } catch {
    showToast(profile.email);
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("profile-theme", theme);
});

const savedTheme = localStorage.getItem("profile-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

renderProfile();
