import React from 'react';
import Dropdown from '../lists/Dropdown';

 //class BranchesSearch extends React.Component {
  function BranchesSearch() {

    const [province, setProvince] = React.useState('Make a Choice');
    const [transit, setTransit] = React.useState('');

    const handleProvinceChange = (event) => {

      setProvince(event.target.value);
      alert("Province is set to " + province);
   
    };

    const handleTransitChange = (event) => {

      setTransit(event.target.value);
   
    };
  
    const handleSubmit = (event) => {
      alert('Province is: ' + province);
      alert('Transit is: ' + transit);
      event.preventDefault();
    };
  
      return (
        <form action="/find_branch" id="form2" onSubmit={handleSubmit}>
            <table>
                    <tr>
                        <td colspan="2">
                            <h5>Find a Branch(es)</h5>
                        </td>
                    </tr>
                    <tr>
                        <td class="columntitle">
                            <b>Search by Province</b>
                        </td>
                        <td class="columntitle">
                            <b>Search by Transit #</b>
                        </td>
                    </tr>
                    <tr>
                        <td class="textcolumn">
                            <Dropdown

                                selectclass="selectclass"
                                optionclass="optionclass"

                                label="Province: &nbsp;"
                                                               
                                options={[
                                   /* { label: 'Choose a Province', value: 'Unknown'},*/
                                    { label: 'Alberta', value: 'Alberta' },
                                    { label: 'British Columbia', value: 'British Columbia' },
                                    { label: 'Manitoba', value: 'Manitoba' },
                                    { label: 'New Brunswick', value: 'New Brunswick' },
                                    { label: 'Newfoundland and Labrador', value: 'Newfoundland and Labrador' },
                                    { label: 'Nova Scotia', value: 'Nova Scotia' },
                                    { label: 'Ontario', value: 'Ontario' },
                                    { label: 'Prince Edward Island', value: 'Prince Edward Island' },
                                    { label: 'Quebec', value: 'Quebec' },
                                    { label: 'Saskatchewan', value: 'Saskatchewan' }
                                ]}
                                
                                value={province}

                                onChange={handleProvinceChange}
                                
                                />
                        </td>
                        <td class="textcolumn">
                        <label for="transit">Transit Number:</label>
                        &nbsp;&nbsp;
                        <input class="text" type="text" id="transit" name="transit" value={transit} onChange={handleTransitChange} />            
                        </td>
                    </tr>
                  <tr>
                    <td colspan ="2" align="right">
                    <button class="searchbutton" onClick={handleSubmit}>
                        Search
                    </button>
                    </td>
                </tr>
                <tr>
                  <td colspan="2">
                  </td>
                </tr>
            </table>
    </form> 
    
      );
    }

  export default BranchesSearch;