import React from 'react';

  function EnterpriseSearch() {
  
  const [name, setName] = React.useState('Type');
  const [industry, setIndustry] = React.useState('');

  const handleNameChange = (event) => {

    setName(event.target.value);
  
  };

  const handleIndustryChange = (event) => {

    setIndustry(event.target.value);
  
  };

  const handleSubmit = (event) => {
    alert('Company Name is: ' + name);
    alert('Company Industry is: ' + industry);
    event.preventDefault();
  };

      return (
        <form action="/find_company" id="form2" onSubmit={handleSubmit}>
            <table class="texttable">
                <tr>
                    <td colspan="2">
                        <h5>Find a Company</h5>
                    </td>
                </tr>
                <tr>
                    <td class="columntitle">
                        <b>Search by Name</b>
                    </td>
                    <td class="columntitle">
                        <b>Search by Industry</b>
                    </td>
                </tr>
                <tr>
                    <td class="textcolumn">
                        <label for="name">Company Name:</label>
                        &nbsp;
                        <input type="text" id="name" name="name"  value={name} onChange={handleNameChange} /> 
                    </td>
                    <td class="textcolumn">
                    <label for="industry">Company Industry:</label>
                    &nbsp;
                        <input type="text" id="industry" name="industry"  value={industry} onChange={handleIndustryChange} />            
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

  export default EnterpriseSearch;