export function readMore() {
  const readMoreBtn = document.getElementById('read-more');
  readMoreBtn.addEventListener('click', () => {
    const expandInfo = document.getElementById("more-info-js");
    const mainHeadings = document.getElementById("main-headings-js");
    mainHeadings.style.transform = "scale(0.7)";
    expandInfo.style.height = "350px";
  });
}