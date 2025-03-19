// Add your code here
// Function to make a POST request using fetch
function submitData(name, email) {
    // Perform the fetch request
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response => response.json()) // Parse the response JSON
    .then(data => {
      // Append the new ID to the DOM
      const body = document.querySelector('body');
      const newIdElement = document.createElement('p');
      newIdElement.textContent = `New ID: ${data.id}`;
      body.appendChild(newIdElement);
    })
    .catch(error => {
      // Append error message to the DOM
      const body = document.querySelector('body');
      const errorMessageElement = document.createElement('p');
      errorMessageElement.textContent = `Error: ${error.message}`;
      body.appendChild(errorMessageElement);
    });
  }
  