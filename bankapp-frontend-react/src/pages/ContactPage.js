import React from 'react';
import ReactDOM from 'react-dom/client';
import EmailComponent from '../components/EmailComponent';
import PhoneComponent from '../components/PhoneComponent';

function ContactPage() {

    return (
        <>
            <table>
                <tr>
                    <td width="30%">
                        </td>
                    <td colSpan="2">
                        <h5>Contact Us</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        &nbsp;
                    </td>
                    <td class="columntitle">
                        <b>Address</b>
                    </td>
                    <td class="columntitle">
                        <b>Phone Numbers</b>
                    </td>
                </tr>
                <tr>
                    <td class="textcolumn" width="30%">
                        <br />
                        &nbsp;
                        </td>
                    <td class="textcolumn" align="left">
                        5899, Hochelaga Street
                        <br />
                        Suite 203
                        <br />
                        Montreal
                        <br />
                        Quebec
                        <br />
                        H1N 1X2
                        <br />
                    </td>  
                    <td class="textcolumn" align="left">
                        General Inquiries: &nbsp; <b>514-742-6851</b> &nbsp; x 777
                        <br />
                        President: &nbsp; <b>514-742-6851</b> &nbsp; x 101
                        <br />
                        Client Service: &nbsp; <b>514-742-6851</b> &nbsp; x 333
                        <br />
                        Complaints: &nbsp; <b>514-742-6851</b> &nbsp; x 666
                    </td>  
                </tr>
                <tr>
                    <td align='left'>
                        <EmailComponent email='tamara9@rogers.com'>Contat by email:</EmailComponent>
                        <br/>
                        <PhoneComponent phone='514-742-6851'>Contact by phone</PhoneComponent>
                    </td>
                </tr>
            </table>               
        </>
        
    )
} 

export default ContactPage;