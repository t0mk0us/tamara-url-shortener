import React, { useState, useEffect } from 'react';
import axios from 'axios'; // npm install axios

const username = 'user';
const password = 'password';
const API_URL = 'http://localhost:8090/bankapplication/account';

function TestSearch2() {
  // State for form input firstName (controlled component approach)
  const [firstName, setFirstName] = useState('');
  // State for form input lastName (controlled component approach)
  const [lastName, setLastName] = useState('');
  // State for storing the API result
  const [apiResult, setApiResult] = useState(null);
  // State for handling loading status
  const [isLoading, setIsLoading] = useState(false);
  // State for handling potential errors
  const [error, setError] = useState(null);

    // 1. Manage form data in state
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
    });

  // Function to handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default browser page reload

    setIsLoading(true); // Set loading state to true
    setError(null); // Reset any previous errors

    try {
      // Make the API call (replace with your actual API endpoint and method)
      //alert(`Querying ${API_URL}/by_owner/${formData.lastName}/${formData.firstName}`);
      const response = await axios.get(`${API_URL}/by_owner/${formData.lastName}/${formData.firstName}`, {
              auth: {
                username: username,
                password: password
                }
                //,
                //method: 'GET'// Use 'POST' or other methods as required by your API
        // Add headers or body for POST requests as needed
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = response.json(); // Parse the JSON response
      setApiResult(data); // Update state with the result
    } catch (err) {
      setError(err.message); // Handle errors and set the error state
    } finally {
      setIsLoading(false); // Set loading state to false after the request is complete
    }
  };

  // Handle input changes to update state
const handleChange = (e) => {
    //alert("Inside handleChange");
    const { name, value } = e.target;
    setFormData((prev) => ({
    ...prev,
    [name]: value,
    })); 
    //setValue(e.target.value);
    //alert("Value of " + e.target.name + " = " + e.target.value);
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
         <table>
            <tr>
                <td>
                    <label>
                        First Name:
                        <input
                        type="text"
                        name="firstName" // Must match the state key
                        value={formData.firstName}
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
                        value={formData.lastName}
                        onChange={handleChange}
                        />
                    </label>
                </td>
            </tr>
            <tr>
                <td colspan ="2" align="right">
                    <button class="searchbutton" type="submit" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </td>
           </tr>
         </table>
      </form>
      
      {/* Display the result, loading, or error message */}
      {isLoading && <p>Loading data...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {apiResult && (
        <div>
          <h3>API Result:</h3>
          {/* Display the result in a user-friendly format */}
          <pre>{JSON.stringify(apiResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default TestSearch2;
