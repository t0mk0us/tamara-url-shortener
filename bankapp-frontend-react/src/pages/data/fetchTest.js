const fetchingFunction = () => {

    fetch('http://localhost:1433/books', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    }).then(function(response) {
 
       return response.json();
 
    }).then(data => console.log(data))
 
  }