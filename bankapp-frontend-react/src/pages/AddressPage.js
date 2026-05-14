import AddressComponent from '../components/AddressComponent';

const AddressPage = () => {

    return (
        <>
            <table>
                <tr>
                    <td width="25%">
                        </td>
                    <td colSpan="3">
                        <h5>Customer Addresses</h5>
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
                    <td colSpan="4">
                    <AddressComponent />
                    </td>
                </tr>
            </table>  
        </>
        
    )
} 

export default AccountsPage;