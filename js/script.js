function openTab(tabName) {
  let x = document.getElementsByClassName("tab");

  /*x.array.forEach((element) => {
    element.style.display = "none";
  });*/

  let i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
