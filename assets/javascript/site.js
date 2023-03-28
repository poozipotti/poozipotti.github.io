document.addEventListener("scroll", updateNavSelection);

function updateNavSelection(event) {
  const data = [
    {
      link: document.getElementById("work-link"),
      boundingBox: document
        .getElementById("work-section")
        .getBoundingClientRect(),
    },
    {
      link: document.getElementById("projects-link"),
      boundingBox: document
        .getElementById("projects-section")
        .getBoundingClientRect(),
    },
    {
      link: document.getElementById("about-link"),
      boundingBox: document
        .getElementById("about-section")
        .getBoundingClientRect(),
    },
  ];
  data.forEach(({ link, boundingBox }) => {
    if (boundingBox.top <= 300 && boundingBox.bottom >= 300) {
      link.classList.add("selected");
    } else {
      link.classList.remove("selected");
    }
  });
}
