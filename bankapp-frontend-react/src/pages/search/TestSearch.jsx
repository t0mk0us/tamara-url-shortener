import React, { useState, useEffect } from 'react';
import axios from 'axios'; // npm install axios

const username = 'user';
const password = 'password';
const API_URL = 'http://localhost:8090/bankapplication/account';

function TestSearch() {

const [data, setData] = useState([]); // Initialize state as an empty array or null
const [loading, setLoading] = useState(true); // Optional: for showing a loading message
const [error, setError] = useState(null); // Optional: for error handling
const [inputs, setInputs] = useState({ firstName: '', lastName: '' });

  // 1. Manage form data in state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  // Handle input changes to update state
const handleChange = (e) => {
    //alert("Inside handleChange");
    const { name, value } = e.target;
    setFormData((prev) => ({
    ...prev,
    [name]: value,
    })); 
    //setValue(e.target.value);
    alert("Value of " + e.target.name + " = " + e.target.value);
};
const handleClick = (userId, event) => {
    console.log(`User ${userId} was clicked`, event);
  };

    useEffect(() => {

    const fetchData = async (firstName, lastName) => {
      try {
        const response = await axios.get(`${API_URL}/by_owner/${lastName}/${firstName}`);
        {/*
                    auth: {
            username: username,
            password: password
            },
             method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Access-Control-Allow-Origin: https://*
        },
        body: JSON.stringify(response),
      });
            */}
        setData(response.data); // The actual data is in the .data property of the response
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();

  }, []); // The empty dependency array ensures the fetch runs only once when the component mounts

  // 2. Handle the form submission
/*   const handleSubmit = (firstName, lastName, event) => {

    //e.preventDefault(); // Prevent the default browser form submission (page reload)
    alert("Inside HandleSubmit");
    console.log("Inside handleSubmit);", null) */

/*     try {
      // 3. Send the data to the API using fetch
      console.log(`Searching by Name: ${firstName}, ${firstName}`, event);
      alert(`Searching by Name:, ${firstName}, ${firstName}`);
      console.log(`Calling ${API_URL}/by_owner/${lastName}/${firstName}`, null);
      alert("Sending " + API_URL + "/by_owner/" + formData.lastName + "/" + formData.firstName); */
/* 
      console.log("Found ", response);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result =  response.json();
      console.log('Success:', result);
      alert('Form submitted successfully!');
      
      // Optionally reset the form
      setFormData({ firstName: '', lastName: '' }); 

    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }

  }; */
 return (
    <form>
        <table>
            <tr>
                <td>
      <label>
        First Name:
        <input
          type="text"
          name="firstName" // Must match the state key
          value={inputs.firstName}
          onChange={handleChange}
        />
      </label>
      </td>
      </tr>
      <tr>
        <td>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName" // Must match the state key
          value={inputs.lastName}
          onChange={handleChange}
        />
      </label>
        </td>
      </tr>
      <tr>
        <td colspan ="2" align="right">
        <button class="searchbutton" type="submit" onSubmit="">
            Search
        </button>
        <button class="searchbutton" onClick={() => alert("Sending " + API_URL + "/by_owner/" + formData.lastName + "/" + formData.firstName)}>
            Test Alert
        </button>
        </td>
    </tr>
    <tr>
        <td>           
    <h1>Posts from API:</h1>
    {loading && <p>Loading data...</p>}
    {error && <p>Error: {error.message}</p>}
    {!loading && !error && (
      <ul>
        {data.map((post) => ( // Use .map() to iterate over an array of data
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    )}
        </td>
    </tr>
  </table> 
</form> 
  );
}

export default TestSearch;
