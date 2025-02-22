let li = document.querySelectorAll(" li ");
//======================================
//  Add And  Remove All Class List
// li.forEach((item) => {
//   item.addEventListener("mouseenter", function () {
//     li.forEach((li) => li.classList.remove("active"));
//     this.classList.add("active");
//   });

//   item.addEventListener("mouseleave", function () {
//     this.classList.remove("active");
//   });
// });
//===========================================
li.forEach((e) => {
  e.addEventListener("click", function () {
    const link = this.querySelector("a");
    if (link) {
      link.click();
    }
  });
});

