import React, { useEffect, useState } from 'react';
import axios from 'axios'; // npm install axios
import { getAccounts, getAccountById, saveAccount } from '../../services/accountService';

const username = 'user';
const password = 'password';
const API_URL = 'http://localhost:8090/bankapplication/account/';
/* var ID = '1';
var firstName = '';
var lastName =''; */

 function AccountsSearch() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState('');

  const [searchBy, setSearchBy] = useState("id");
  const [formData, setFormData] = useState({
      accountId: "",
      firstName: "",
      lastName: "",
  });

  const [results, setResults] = useState([]);

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [accountId, setAccountId] = React.useState('');

    const handleChange = (e) => {
      alert("Inside handleChange");
       const { name, value } = e.target;
      setFormData((prev) => ({
      ...prev,
      [name]: value,
      })); 
      //setValue(e.target.value);
      alert("Value of " + e.target.name + " = " + e.target.value);
    };

    const handleAccountIdChange = (e) => {
      //alert("Inside handleAccountIdChange");
      setAccountId(e.target.value);
      //alert("Account Id is: " + accountId);
    };

    const handleFirstNameChange = (e) => {
      //alert("Inside handleAccountIdChange");
      setFirstName(e.target.value);
      //alert("First Name is: " + firstName);
    };
    
    const handleLastNameChange = (e) => {
      //alert("Inside handleLastNameChange");
      setLastName(e.target.value);
      //alert("Last Name is: " + lastName);
    };

    const findAccountById = async () => {
        try {
            const data = await getAccountById();
            setResults(data);
            console.log(data);
        } catch (error) {
            console.error('Failed to fetch Account', error);
        }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if(accountId==='' || (!firstName==='' && !lastName==='')) {
        alert(("Please, enter search parameters"));
        return;
      }
      alert(accountId);
      alert(firstName);
      alert(lastName);
      setLoading(true);
      setError(null);
      setResults(null);

      //if (searchBy === "id" && formData.id.trim()) {
      if (searchBy === "id" && accountId.trim()) {
      console.log("Searching by ID:", accountId);
      // 🔗 Call API: /accounts?id=123
       const response = axios.get(API_URL + accountId, {
            auth: {
                    username: username,
                    password: password
          }
/*           ,
          params: {
            accountId: formData.id
          } */
        });
       // alert("Got " + response.data);
        setResults(response);
        console.log("Response is: " + response);
        console.log("Results are: " + results);
        console.log("Results length is " + results.data);
        console.log("Response length is " + response.length);
       // return response.data;
    } else if (searchBy === "name" && (firstName.trim() || lastName.trim())) {
       //} else if (searchBy === "name" && (formData.firstName.trim() || formData.lastName.trim())) {
      console.log("Searching by Name:", firstName, lastName);
      // 🔗 Call API: /accounts?firstName=...&lastName=...
        const response = axios.get('http://localhost:8090/bankapplication/account/', {
          auth: {
            username: username,
            password: password
            },  
          params: {
            firstName: formData.firstName,
            lasttName: formData.lastName
          }
        });
        alert("Got " + response.data);
        return response.data;
    } else {
      alert("Please enter valid search criteria.");
    }
  };
{data && (
  <div>
    <h3>Data for Account</h3>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
)}
      if (loading) return <p>Loading data...</p>;  
      if (error) return <p>Error: {error.message}</p>;
      if (!data) return <p>No data available.</p>;

      return (
        
        <form id="form1" onSubmit={handleSubmit}>
            <table class="texttable">
              <tr align="left">
                <td colspan="2">
                    <h5>Find an Account(s)</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex gap-4" align="left">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="searchBy"
                        value="id"
                        checked={searchBy === "id"}
                        onChange={() => setSearchBy("id")}
                      />
                      <b>By Account #</b>
                    </label>
                    <br />
                    <label className="flex items-center gap-2" align="left">
                      <input
                        type="radio"
                        name="searchBy"
                        value="name"
                        checked={searchBy === "name"}
                        onChange={() => setSearchBy("name")}
                      />
                      <b>By Owner's Name</b>
                    </label>
                  </div>
                </td>
              </tr>
                <tr>
                  <td class="textcolumn">   
        {/* Name Inputs */}
        {searchBy === "name" && (
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              name="firstNameInput"
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              className="p-2 border rounded-lg"
            />
            <input
              type="text"
              name="lastNameInput"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
              className="p-2 border rounded-lg"
            />
          </div>
        )}        
        </td>                       
          <td class="textcolumn">
          {searchBy === "id" && (   
            <div className="grid grid-cols-2 gap-2">             
              <input 
                type="text" 
                name="accountIdInput"  
                placeholder="Enter Account ID" 
                value={accountId} 
                onChange={handleAccountIdChange} 
                className="p-2 border rounded-lg"
                />   
                </div>
        )}        
        </td>
      </tr>
      <tr>
        <td colspan ="2" align="right">
        <button class="searchbutton" type="submit" onSubmit={handleSubmit}>
            Search
        </button>
        </td>
    </tr>
  </table>
</form> 
      )      
};

  export default AccountsSearch;