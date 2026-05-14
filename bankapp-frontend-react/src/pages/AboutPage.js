import React from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; */
import visa from './images/visalogo.jpg'
import masterlogo from './images/masterlogow.jpg'

function AboutPage () {

    return (
        <>
        <table>
              <tr>
                  <td colSpan="2">
                      <h5>Hello!</h5>
                  </td>
              </tr>
              <tr>
                  <td class="textcolumn" align="left">
                  Our Bank provides both 
                  <br />
                  retail and enterprise services.
                  </td>  
                  <td class="textcolumn" align="left" valign="top">
                  We offer to our clients 
                  <br />
                  the following Credit Cards:
                  <br />
                  <br />
                    <img src={visa} alt="visa_logo" width="60" class="cardlogo"/>
	                &nbsp; Visa
                    &nbsp;&nbsp;
                    <img src={masterlogo} alt="mastercard_logo" width="60" class="cardlogo"/>
	                &nbsp; MasterCard
                  </td>  
              </tr>
          </table>  
    </>
    )
} 

export default AboutPage;