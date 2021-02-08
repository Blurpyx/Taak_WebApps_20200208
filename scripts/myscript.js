function toggleActive(element) {
  document.getElementById("tabEagle").classList.remove("active");
  document.getElementById("tabHamster").classList.remove("active");
  document.getElementById("tabQuokka").classList.remove("active");
  document.getElementById("tabInfo").classList.remove("active");
  element.classList.add("active");
}

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});