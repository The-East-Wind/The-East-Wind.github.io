const themeMap = {
    "dark": {
        "--background-color": "#222222",
        "--color": "#ffffff",
        "--shadow-color": "#ffffff44",
        "icon": "/assets/images/dark-mode.svg"
    },
    "light": {
        "--background-color": "#ffffff",
        "--color": "#000000",
        "--shadow-color": "#00000088",
        "icon": "/assets/images/light-mode.svg"
    }
}

const colorToogleMap = {
    "#ffffff": "#000000",
    "#000000": "#ffffff",
    "#00000088": "#ffffffaa",
    "#ffffffaa": "#00000088"
};

const iconToogleMap = {
    "/assets/images/light-mode.svg": "/assets/images/dark-mode.svg",
    "/assets/images/dark-mode.svg": "/assets/images/light-mode.svg"
};

function handleThemeToogle() {
    toogleColors();
    toogleIcon();
    invertSocialMediaIcons();
}

function toogleColors() {
    const root = document.querySelector(":root");
    const styles = getComputedStyle(root);
    const backgroundColor = styles.getPropertyValue("--background-color");
    const color = styles.getPropertyValue("--color");
    const shadowColor = styles.getPropertyValue("--shadow-color");
    root.style.setProperty("--background-color", colorToogleMap[backgroundColor]);
    root.style.setProperty("--color", colorToogleMap[color]);
    root.style.setProperty("--shadow-color", colorToogleMap[shadowColor]);
}

function toogleIcon() {
    const element = document.getElementById("theme-toggle");
    const icon = element.getAttribute("src");
    element.setAttribute("src", iconToogleMap[icon]);
}

function invertSocialMediaIcons() {
    const icons = document.querySelectorAll(".social-item .icon");
    icons.forEach((icon) => {
        if(icon.classList.contains("dark")) {
            icon.classList.remove("dark");
        } else {
            icon.classList.add("dark");
        }
    });
}