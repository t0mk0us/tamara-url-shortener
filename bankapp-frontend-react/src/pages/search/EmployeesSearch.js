import React from 'react';

 function EmployeesSearch() {

    const [firstname, setFirstName] = React.useState('');
    const [lastname, setLastName] = React.useState('');
    const [employeeid, setEmployeeId] = React.useState('');
  
    const handleFirstNameChange = (event) => {

      setFirstName(event.target.value);
   
    };

    const handleLastNameChange = (event) => {

      setLastName(event.target.value);
   
    };
  
    const handleEmployeeIdChange = (event) => {

      setEmployeeId(event.target.value);
   
    };

    const handleSubmit = (event) => {
      alert('First Name is: ' + firstname);
      alert('Last Name is: ' + lastname);
      alert('Employee Id is: ' + employeeid);
      event.preventDefault();
    };

      return (
        <form action="/find_employee" id="form1" onSubmit={handleSubmit}>
            <table class="texttable">
                <tr>
                    <td colspan="2">
                        <h5>Find an Employee(s)</h5>
                    </td>
                </tr>
                <tr>
                    <td class="columntitle">
                        <b>Search by name</b>
                    </td>
                    <td class="columntitle">
                        <b>Search by Employee ID</b>
                    </td>
                    </tr>
                    <tr>
                    <td class="textcolumn">
                        <label for="firstname">First name:</label>
                        &nbsp;
                        <input type="text" id="firstname" name="firstname"  value={firstname} onChange={handleFirstNameChange} />
                            <br />
                        <label for="lastname">Last name:</label>
                        &nbsp;
                        <input type="text" id="lastname" name="lastname" value={lastname} onChange={handleLastNameChange} />                   
                    </td>
                    <td class="textcolumn">
                    <label for="employeeid">Employee ID:</label>
                    &nbsp;
                        <input type="text" id="employeeid" name="employeeid"  value={employeeid} onChange={handleEmployeeIdChange} />            
                    </td>
                </tr>
                  <tr>
                    <td colspan ="2" align="right">
                    <button class="searchbutton" onClick={handleSubmit}>
                        Search
                    </button>
                    </td>
                </tr>
            </table>
    </form> 
      );
    }

  export default EmployeesSearch;