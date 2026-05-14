import AccountComponent from '../components/AccountComponent';

const AccountsPage = () => {

    return (
        <>
            <table>
                <tr>
                    <td width="25%">
                        </td>
                    <td colSpan="3">
                        <h5>Available Individual Accounts</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        &nbsp;
                    </td>
                    <td class="columntitle">
                        <b>Deposit</b>
                    </td>
                    <td class="columntitle">
                        <b>Loans</b>
                    </td>
                    <td class="columntitle">
                        <b>Investments</b>
                    </td>
                </tr>
                <tr>
                    <td class="textcolumn" width="30%">
                        <br />
                        &nbsp;
                        </td>
                    <td align="left" class="textcolumn">
                        Checking
                        <br />
                        Saving
                        <br />
                        High Interest Saving
                        <br />                       
                    </td>  
                    <td align="left" class="textcolumn">
                        Personal Loan
                        <br />
                        Garanteed Line of Credit
                        <br />
                        Mortgage
                        <br />
                    </td>  
                    <td align="left" class="textcolumn">
                        RSP
                        <br />
                        GIC                      
                        <br />
                    </td> 
                </tr>
                <tr>
                    <td colSpan="4">
                    <AccountComponent />
                    </td>
                </tr>
            </table>  
        </>
        
    )
} 

export default AccountsPage;