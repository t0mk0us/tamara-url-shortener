    import React, { useEffect, useState } from 'react';
    import axios from 'axios'; // npm install axios

    const username = 'user';
    const password = 'password';

    export default function AccountSearch2() {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        const [searchBy, setSearchBy] = useState("id");
        const [formData, setFormData] = useState({
            id: 0,
            firstName: "",
            lastName: "",
        });

    const [results, setResults] = useState(null);

/*       useEffect(() => {
        axios.get('http://localhost:8080/bankapplication/account/' + 1)
          .then(response => {
            setData(response.data);
            setLoading(false);
          })
          .catch(err => {
            setError(err);
            setLoading(false);
          });
      }, []); */

      // ... rest of your component


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setResults(null);

    if (searchBy === "id" && formData.id.trim()) {
      console.log("Searching by ID:", formData.id);
      // 🔗 Call API: /accounts?id=123
       const response = axios.get('http://localhost:8090/bankapplication/account/' + formData.id, {
            auth: {
                    username: username,
                    password: password
          }/* ,
          params: {
            id: formData.id
          } */
        }).then(response => {
            setData(response.data);
            setLoading(false);
          })
          .catch(err => {
            setError(err);
            setLoading(false);
          });

       // alert("Got " + response.data);
/*         setResults(response);
        console.log(response);
        console.log(results);
        console.log("Results length is " + results.data);
        console.log("Response length is " + response.length); */
       // return response.data;
    } else if (searchBy === "name" && (formData.firstName.trim() || formData.lastName.trim())) {
      console.log("Searching by Name:", formData.firstName, formData.lastName);
      // 🔗 Call API: /accounts?firstName=...&lastName=...
        const response = axios.get('http://localhost:8090/bankapplication/account/by_owner/' +  formData.lastName + '/' + formData.firstName, {
          auth: {
            username: username,
            password: password
            } /*,
           params: {
            firstName: formData.firstName,
            lasttName: formData.lastName
          } */
        }).then(response => {
            setData(response.data);
            setLoading(false);
          })
          .catch(err => {
            setError(err);
            setLoading(false);
          });
        /* alert("Got " + response.data);
        return response.data; */
    } else {
      alert("Please enter valid search criteria.");
    }
  };

     if (loading) return <p>Loading data...</p>;  
      if (error) return <p>Error: {error.message}</p>;
      //if (!data) return <p>No data available.</p>;

       return (
        <div>
             <h2 className="text-xl font-semibold mb-4">Search Account</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Search Type */}
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="searchBy"
              value="id"
              checked={searchBy === "id"}
              onChange={() => setSearchBy("id")}
            />
            By ID
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="searchBy"
              value="name"
              checked={searchBy === "name"}
              onChange={() => setSearchBy("name")}
            />
            By Name
          </label>
        </div>

        {/* ID Input */}
        {searchBy === "id" && (
          <input
            type="number"
            name="id"
            placeholder="Enter Account ID"
            value={formData.id}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        )}

        {/* Name Inputs */}
        {searchBy === "name" && (
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="p-2 border rounded-lg"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="p-2 border rounded-lg"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>
      <br />
          <h5>Accounts:</h5>
          {Array.isArray(data) ? (
            <ul>
              {data.map(item => (
                <li key={item.id}> {/* Use a unique key for list items */}
                  {item.name} - {item.description}
                </li>
              ))}
            </ul>
          ) : (

            <pre>{JSON.stringify(data, null, 2)}</pre> // For single object or raw JSON
          )}
        </div>
      );
    }
