let li = document.querySelectorAll(" li ");
//===========================================
li.forEach((e) => {
  e.addEventListener("click", function () {
    const link = this.querySelector("a");
    if (link) {
      link.click();
    }
  });
});
