window.addEventListener("load", (event) => {
    document.getElementById("body").style.transition = "background-color ease 2s, color ease 0.1s";
    document.getElementById("heading").style.transition = "background-color ease 2s";
    document.getElementById("footer").style.transition = "background-color ease 2s";
    if (document.getElementById("hr") != null) {
        document.getElementById("hr").style.transition = "color ease-in-out 1s";
    }
  });
document.getElementById("lightswitchborder").onclick = function() {
    if (localStorage.getItem("currentMode") == "light") {
        localStorage.setItem("currentMode", "dark");
        document.getElementById("body").setAttribute("data-bs-theme", localStorage.getItem("currentMode"));
        document.getElementById("LinkedinLogo").setAttribute("src", "Images/Linkedin.png");
        document.getElementById("GithubLogo").setAttribute("src", "Images/GitHub.png");
        document.getElementById("EmailLogo").setAttribute("src", "Images/Mail_Icon.png");
        setTimeout(function() {document.getElementById("switchicon").setAttribute("class", "lighticon")}, 100);
    }
    else {
        localStorage.setItem("currentMode", "light");
        document.getElementById("body").setAttribute("data-bs-theme", localStorage.getItem("currentMode"));
        document.getElementById("LinkedinLogo").setAttribute("src", "Images/LinkedinLight.png");
        document.getElementById("GithubLogo").setAttribute("src", "Images/GitHubLight.png");
        document.getElementById("EmailLogo").setAttribute("src", "Images/Mail_Icon_Light.png");
        setTimeout(function() {document.getElementById("switchicon").setAttribute("class", "darkicon")}, 100);
    }
};