import React, { useState } from 'react';
import axios from 'axios'; // npm install axios

const username = 'user';
const password = 'password';
const API_URL = 'http://localhost:8090/bankapplication/login';

function LoginPage() {
  // State for form input firstName (controlled component approach)
  const [userName, setUserName] = useState('');
  // State for form input lastName (controlled component approach)
  const [userPass, setUserPass] = useState('');
  // State for storing the API result
  const [message, setMessage] = useState('');
  //const [apiResult, setApiResult] = useState(null);
  // State for handling loading status
  const [isLoading, setIsLoading] = useState(false);
  // State for handling potential errors
  const [error, setError] = useState(null);

    // 1. Manage form data in state
/*     const [formData, setFormData] = useState({
      userName: '',
      userPass: '',
    }); */

  // Function to handle the form submission
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default browser page reload

    setIsLoading(true); // Set loading state to true
    setError(null); // Reset any previous errors

    try {
      alert(userName + " is trying to log in with password " + userPass);
      alert(" Log In page URL: " + `${API_URL}/${userName}/${userPass}`);
      // Make the API call (replace with your actual API endpoint and method)
      //alert(`Querying ${API_URL}/by_owner/${formData.lastName}/${formData.firstName}`);
      const response = await axios.post(`${API_URL}/${userName}/${userPass}`, {
              auth: {
                username: username,
                password: password
                }
                //,  userName, userPass
                //,
                //method: 'GET'// Use 'POST' or other methods as required by your API
        // Add headers or body for POST requests as needed
        } );
        setMessage(response.data.message);
    } catch (error) {
        setMessage("Login failed. Check your username or password.");
    }
};

const handleSubmit = async () => {
  //const userData = { userName: "Tamara", userPass: "K1ev2oo1" };

    const url = API_URL;
    const userData = {
      userName: 'Tamara',
      userPass: 'K1ev2oo1'
  };

  try {
    alert("url = " + url);
    alert("userData = " + userData.userName + " " + userData.userPass);
    const response = await axios.post(url, userData);
    console.log('Success:', response.data);
  } catch (error) {
    console.error('Error sending data:', error);
  }
};

  return (
    <div>
      <form onSubmit={handleLogin}>
         <table>
            <tr>
                <td align='right'>
                  User Name:&nbsp;  
                </td>
                <td align='left'>
                    <label>
                        <input
                        type="text"
                        name="userName" // Must match the state key
                        //value={formData.userName}
                        onChange={e => setUserName(e.target.value)} required
                        />
                    </label>
                </td>
            </tr>
            <tr>
                <td align='right'>
                    Password:
                </td>
                <td align='right'>
                    <label>
                        <input
                        type="password"
                        name="userPass" // Must match the state key
                        //value={formData.userPass}
                        onChange={e => setUserPass(e.target.value)} required
                        />
                    </label>
                </td>
            </tr>
            <tr>
                <td colspan ="2" align="right">
                    <button class="searchbutton" type="submit" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Log In'}
                    
                    </button>
                    <br />
                    {message && <p>{message}</p>}
                </td>
           </tr>
         </table>
      </form>
      
      {/* Display the result, loading, or error message */}
      {isLoading && <p>Loading data...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
}

export default LoginPage;