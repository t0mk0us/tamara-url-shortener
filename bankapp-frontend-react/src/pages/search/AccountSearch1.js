import { useState, useEffect } from "react";
import axios from 'axios';
import { getAccountById, saveAccount } from '../../services/accountService';

const username = 'user';
const password = 'password';

export default function AccountSearchForm() {

    const [account, setAccount] = useState([]);

    useEffect(() => {
        fetchAccount();
    }, []);

    const fetchAccount = async () => {
        try {
            const data = await getAccountById(formData.id);
            setAccount(data);
            console.log(data);
        } catch (error) {
            console.error('Failed to fetch Accounts', error);
        }
    };

  const [searchBy, setSearchBy] = useState("id");
  const [formData, setFormData] = useState({
    id: 0,
    firstName: "",
    lastName: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

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
        });
       // alert("Got " + response.data);
        setResults(response);
        console.log(response);
        console.log(results);
        console.log("Results length is " + results.data);
        console.log("Response length is " + response.length);
       // return response.data;
    } else if (searchBy === "name" && (formData.firstName.trim() || formData.lastName.trim())) {
      console.log("Searching by Name:", formData.firstName, formData.lastName);
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

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Search Account</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Search Type */}
        <div className="flex gap-4" align="left">
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
      <h5>Accounts</h5>
{/*             <ul>
                {accounts.map((account) => (
                    <li key={account.ID}>{account.balance},{account.currency.name},{account.currency.code},{account.currency.symbol},{account.type};<br/></li>
                ))}
            </ul> */}
            {error && <p className="text-red-500">{error}</p>}
        {results && results.length > 0 && (
    <table>
      <tbody>
         {results.map((item) => (
                            <tr align="left">
                                <td className='textcolumn'>
                                Balance
                                    {item.balance},
                                </td>
                                <td className='textcolumn'>
                                   {account.owner.firstName}, 
                                </td>
                                 <td className='textcolumn'>
                                   {account.owner.lastName}, 
                                </td>
                                <td className='textcolumn'>
                                    {account.currency.name},
                                </td>
                                <td className='textcolumn'>
                                    {account.currency.code},
                                </td>
                                <td className='textcolumn'>
                                    {account.currency.symbol},
                                </td>
                                <td className='textcolumn'>
                                    {account.type}
                                </td>
                            </tr>
              ))}
            </tbody>
          </table>
        )}
        {results && Array.isArray(results) && results.length === 0 && (
          <p className="text-gray-500 mt-2">No accounts found.</p>
        )}
      </div>

  );
}
