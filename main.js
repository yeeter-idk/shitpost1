let searchBar = document.getElementById("searchBar");

searchBar.addEventListener("change", ()=>{
  searchBar.value = "lol";
  alert("Lol, this doesn't work");
});