document.addEventListener("DOMContentLoaded", function () {
  const nameText = document.querySelector(".name");
  const nameContent = "Student | Developer | Designer";
  const cursor = document.querySelector(".cursor");
  let isTyping = true;

  function typeText(index) {
    nameText.textContent = nameContent.slice(0, index);
  }

  function startTyping() {
    let index = 0;
    const typingInterval = setInterval(function () {
      typeText(index);
      index++;
      if (index > nameContent.length) {
        index = 0;
        clearInterval(typingInterval); // Stop typing animation
        setTimeout(function () {
          startTyping(); // Resume typing after 10 seconds
        }, 10000); // Adjust the pause duration
      }
    }, 100); // Adjust the typing speed
  }

  startTyping();
});

document.addEventListener("DOMContentLoaded", function () {
  // Reveal about-me section on scroll
  var aboutMe = document.querySelector(".about-me");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function revealAboutMe() {
    if (isElementInViewport(aboutMe)) {
      aboutMe.classList.add("reveal");
    }
  }

  // Initial check on page load
  revealAboutMe();

  // Check when the user scrolls
  window.addEventListener("scroll", revealAboutMe);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Reveal skills section on scroll
  var skillsSection = document.querySelector(".skill");

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  function handleScroll() {
    if (isInViewport(skillsSection)) {
      skillsSection.classList.add("reveal");
      window.removeEventListener("scroll", handleScroll);
    }
  }

  // Trigger the handleScroll function on page load
  window.addEventListener("scroll", handleScroll);
});

//project section

function expandProject(element) {
  // Remove 'expanded' class from all projects
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.classList.remove("expanded");
    project.classList.add("project-small");
  });

  // Add 'expanded' class to the clicked project
  element.classList.remove("project-small");
  element.classList.add("expanded");
}
