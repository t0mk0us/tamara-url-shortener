import { useState } from 'react';

    function EmployeePage() {

    const [inputs, setInputs, firstname, lastname] = useState({});

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The last name you entered was: ${lastname}`);
      alert(`The first name you entered was: ${firstname}`)
    }

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

  return (
    <table>
      <tr>
        <td>
      <form onSubmit={handleSubmit}>
                  <label>First name:</label>
                  <input 
              type="text" 
              name="firstname" 
              value={inputs.firstname || ""} 
              onChange={handleChange}
                      />
                        <br />
                  <label >Last name:</label>
                      <input type="text" name="lastname" value={inputs.lastname || ""} 
                      onChange={handleChange}
                      />
                        <br />
                      <input type="submit" value="Submit" />
      </form>
      </td>
      </tr>
    </table>
  )
}

export default EmployeePage;