import './App.css';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NerdGirl2 from './pages/images/NerdGirl2.jpg';
import D4LogicLogoNew from './pages/images/d4logic_2_flat.jpg';
import NavBar from './NavBar';
import Footer from './Footer';


function Login() {

  const navigate = useNavigate();

/*   const logOut = () => {
      navigate('/logout');
  } */

  const navigateToEnterprisesSearch = () => {

      navigate('/search/enterprises');
  }

  return (

    // <BrowserRouter> (put in the index.js (hence on the top level which includes App.js) to apply to useNavigate as well)
    
    <div className="App">
      <header className="App-header">
        
        </header>
      <table cellPadding="0px" cellSpacing="0px">
      <tr>
        <td class="logo">
          &nbsp;&nbsp;
          <img src={D4LogicLogoNew} alt="Design4Logic logo" width="200" /> 
        </td>
        <td class="topimage" colspan="3" valign="top" width="100%" height="100">
          <br />
        </td>
      </tr>
      <tr>
        <td colspan="4" valign="top">
          <div>

          </div>
        </td>
      </tr>
      <tr>
        <td rowspan="6" valign="top" width="250">
        {/* <div> */}
        <br />
          {/* <Avatar /> */}
          <img src={NerdGirl2} alt="Nerd Girl" width="250" />
          {/* </div> */}
          <h4>Hi!
            <br />
            I am Tamara!
            <br />
            Welcome to my
            <br />
          <b>Super Bank !</b>
          </h4> 
          </td>
        </tr>
        <tr>
          <td>
      <div id="page-body">
 <form onSubmit={handleSubmit}>
                  <label>User name:</label>
                  <input 
              type="text" 
              name="user" 
              value={inputs.user || ""} 
              onChange={handleChange}
                      />
                        <br />
                  <label >Password:</label>
                      <input type="text" name="password" value={inputs.password || ""} 
                      onChange={handleChange}
                      />
                        <br />
                      <input type="submit" value="Submit" />
      </form>
      </div>
      </td>
        </tr>
</table> 
      <div>
        <Footer />
      </div>
    </div>
    // </BrowserRouter>
  );

}

export default App;
