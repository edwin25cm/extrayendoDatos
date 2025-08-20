fetch('http://localhost:4000/api/datos')
  .then(response => response.json())
  .then(data => console.log(data));
