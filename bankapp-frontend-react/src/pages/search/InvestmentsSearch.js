import React from 'react';
import Dropdown from '../lists/Dropdown';

 function InvestmentsSearch() {

  const [stocktype, setStockType] = React.useState('Make a Choice');
  const [stockname, setStockName] = React.useState('');
  const [stocksymbol, setStockSymbol] = React.useState('');

  const handleStockTypeChange = (event) => {

    setStockType(event.target.value);
  
  };

  const handleStockNameChange = (event) => {

    setStockName(event.target.value);
  
  };

  const handleStockSymbolChange = (event) => {

    setStockSymbol(event.target.value);
  
  };
  
  const handleSubmit = (event) => {
    alert('Stock Type is: ' + stocktype);
    alert('Stock Name is: ' + stockname);
    alert('Stock Symbol is: ' + stockname);
    event.preventDefault();
  };
  
      return (
        <form action="/find_stock" id="form1" onSubmit={handleSubmit}>
            <table class="texttable">
                <tr>
                    <td colspan="2">
                        <h5>Find an Investment(s)</h5>
                    </td>
                </tr>
                <tr>
                        <td class="columntitle">
                            <b>Search by Stock Type</b>
                        </td>
                        <td class="columntitle">
                            <b>Search by Stock Name</b>
                        </td>
                        <td class="columntitle">
                            <b>Search by Stock Symbol</b>
                        </td>
                    </tr>
                    <tr>
                        <td class="textcolumn">
                        <Dropdown

                          label="Security Type: &nbsp;"

                          selectclass="selectclass"                            
                          optionclass="optionclass"
                                                        
                          options={[
                              { label: 'Mutual Funds', value: 'Mutual Funds' },
                              { label: 'ETF (Exchange-Traded Fund)', value: 'ETF' },
                              { label: 'Bonds', value: 'Bonds' },
                              { label: 'Stocks', value: 'Stocks' },
                              { label: 'Options', value: 'Options' },
                              { label: 'Hedge Funds', value: 'Hedge Funds' },
                              { label: 'Index Funds', value: 'Index Funds' },
                              { label: 'Equities', value: 'Equities' },
                              { label: 'Fixed Income', value: 'Fixed Income' },
                              { label: 'Bond Funds', value: 'Bond Funds' },
                              { label: 'Certificate of Deposit', value: 'Certificate of Deposit' },
                              { label: 'GICs', value: 'GICs' }
                          ]}

                          value={stocktype}

                          onChange={handleStockTypeChange}

                          />
                          </td>
                        <td class="textcolumn">
                        <label for="stockname">Stock Name:&nbsp;</label>
                        &nbsp;
                            <input type="text" id="stockname" name="stockname"  value={stockname} onChange={handleStockNameChange} />            
                        </td>
                        <td class="textcolumn">
                        <label for="stocksymbol">Stock Symbol:&nbsp;</label>
                        &nbsp;
                            <input type="text" id="stocksymbol" name="stocksymbol"  value={stocksymbol} onChange={handleStockSymbolChange} />            
                        </td>
                    </tr>
                  <tr>
                    <td colspan ="3" align="right">
                    <button class="searchbutton" onClick={handleSubmit}>
                        Search
                    </button>
                    </td>
                </tr>
            </table>
    </form> 
      );
    }

  export default InvestmentsSearch;