import './App.css';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AccountsPage from './pages/AccountsPage';
import EnterprisePage from './pages/EnterprisePage';
import InvestmentPage from './pages/InvestmentPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AccountsSearch from './pages/search/AccountsSearch';
//import AccountsSearchForm from './pages/search/AccountSearch1';
//import AccountsSearch2 from './pages/search/AccountSearch2';
//import TestSearch from './pages/search/TestSearch2';
import InvestmentsSearch from './pages/search/InvestmentsSearch';
import BranchesSearch from './pages/search/BranchesSearch';
import EmployeesSearch from './pages/search/EmployeesSearch';
import EnterpriseSearch from './pages/search/EnterpriseSearch';
import CurrencyPage from './pages/CurrencyPage';
import NerdGirl2 from './pages/images/NerdGirl2.jpg';
//import D4LogicLogo from './pages/images/D4LogicLogo.jpg';
import D4LogicLogoNew from './pages/images/d4logic_2_flat.jpg';
import NavBar from './NavBar';
import Footer from './Footer';
import AccountComponent from './components/AccountComponent';
import AddressComponent from './components/AddressComponent';
//import MessageComponent from './components/MessageComponent';
import CurrencyComponent from './components/CurrencyComponent';

function App() {

  const navigate = useNavigate();

/*   const navigateHome = () => {
      navigate('/');
  } */

  const navigateToAccountsSearch= () => {

      navigate('/search/accounts');
  }

  const navigateToEnterprisesSearch = () => {

    navigate('/search/enterprises');
}

  const navigateToInvestmentSearch = () => {

      navigate('/search/investments');
  }

const navigateToEmployeeSearch = () => {

  navigate('/search/employees');
}

const navigateToBranchesSearch = () => {

  navigate('/search/branches');
}

const navigateToTestSearch = () => {

  navigate('/search/test');
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
            <NavBar />
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
        <Routes>
          <Route path="/login" element={< LoginPage />} />
          <Route path="/" element={< HomePage />} />
          <Route path="/about" element={< AboutPage />} />
          {/* <Route path="/search/accounts" element={< AccountsSearch />} /> */}
          <Route path="/search/accounts" element={< AccountsSearch />} />
          <Route path="/search/investments" element={< InvestmentsSearch />} />
          <Route path="/search/branches" element={< BranchesSearch />} />     
          <Route path="/search/employees" element={< EmployeesSearch />} />  
          <Route path="/search/enterprises" element={< EnterpriseSearch/>} />     
          <Route path="/currency" element={< CurrencyPage />} />
          <Route path="/accounts" element={< AccountsPage />} />
          <Route path="/enterprises" element={< EnterprisePage />} />
          <Route path="/investments" element={< InvestmentPage />} />
          <Route path="/services" element={< ServicesPage />} />
          <Route path="/contact" element={< ContactPage />} />
          {/* <Route path="/search/test" element={< TestSearch />} /> */}
        </Routes> 
      </div>
      </td>
        </tr>
        <tr>
          <td>
      <div class="buttons" id="buttons" align="left" valign="top">
         <m class="insidetitle">SEARCH</m>
       &nbsp;&nbsp;
        <Link to="/search/accounts">
          <button onClick={navigateToAccountsSearch}>Client Accounts</button>  
        </Link>
        <Link to="/search/enterprises">
          <button onClick={navigateToEnterprisesSearch}>Enterprise Accounts</button>
        </Link>
        <Link to="/search/investments">
          <button onClick={navigateToInvestmentSearch}>Investments</button>
        </Link>
        <Link to="/search/branches">
          <button onClick={navigateToBranchesSearch}>Branches</button>
        </Link>
        <Link to="/search/employees">
          <button onClick={navigateToEmployeeSearch}>Employees</button>
        </Link>
        <Link to="/search/test">
          <button onClick={navigateToTestSearch}>Test</button>
        </Link>
      </div>
    </td>
  </tr>
  <tr>
      <td colSpan="4">
      <AccountComponent />
      </td>
  </tr>
  <tr>
      <td colSpan="4">
      <AddressComponent />
      </td>
  </tr>
    <tr>
      <td colSpan="4">
    <CurrencyComponent />
      </td>
  </tr>
  <tr>
  <td colSpan="4">
      {/* <MessageComponent /> */}
      </td>
    <br />
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
