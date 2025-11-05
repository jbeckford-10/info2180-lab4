function getAvengers() {
  fetch("superheroes.php")
    .then(function(response) {
      return response.text(); 
    })
    .then(function(data) {
      alert(data); 
    });
}

document.getElementById("search-button").addEventListener("click", getAvengers);
