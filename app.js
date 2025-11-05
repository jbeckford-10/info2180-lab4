const button = document.getElementById("search-button");
const input = document.getElementById("search-input");
const result = document.getElementById("result-box");

function getAvengers() {
  const query = document.getElementById("search-input").value.trim();
  const url = "superheroes.php?query=" + encodeURIComponent(query);
  fetch(url)
    .then(function(response) {
      return response.text(); 
    })
    .then(function(data) {
      document.getElementById("result-box").innerHTML = data; 
    })
    .catch(function(error) {
      document.getElementById("result-box").innerHTML = "Can't get the data."; 
    });
}

document.getElementById("search-button").addEventListener("click", getAvengers);
