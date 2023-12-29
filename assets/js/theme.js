const themeSettings = {
  dark: {
    colors: {
      "--background-color": "#131418",
      "--color": "#ffffff",
      "--shadow-color": "#ffffff44",
      "--link-color": "#ff5277",
    },
    icon: "/assets/images/dark-mode.svg",
  },
  light: {
    colors: {
      "--background-color": "#ffffff",
      "--color": "#000000",
      "--shadow-color": "#00000088",
      "--link-color": "#3232a8",
    },
    icon: "/assets/images/light-mode.svg",
  },
};

function getCurrentTheme() {
  return localStorage.getItem("theme") || "light";
}

function setColors(settings) {
  const root = document.querySelector(":root");
  for (const key in settings.colors) {
    root.style.setProperty(key, settings.colors[key]);
  }
}

function setLamp(settings) {
  const element = document.getElementById("theme-toggle");
  element.setAttribute("src", settings.icon);
}

function initTheme(theme) {
  const settings = themeSettings[theme];
  setColors(settings);
  setLamp(settings);
  initSocialMediaIcons(theme);
}

function initSocialMediaIcons(theme) {
  const icons = document.querySelectorAll(".social-item .icon");
  for (const icon of icons) {
    if (theme === "dark") {
      icon.classList.add("dark");
    } else if (theme === "light") {
      icon.classList.remove("dark");
    }
  }
}

function switchTheme() {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  initTheme(newTheme);
  localStorage.setItem("theme", newTheme);
}
