import CurrencyComponent from '../components/CurrencyComponent';

function CurrencyPage() {

    return (
        <>
            <table>
 {/*                <tr>
                    <td width="30%">
                        </td>
                    <td colSpan="2">
                        <h5>Accepted Currencies</h5>
                    </td>
                </tr>
                <tr>
                    <td class="textcolumn" width="30%">
                        <br />
                        &nbsp;
                        </td>
                    <td class="textcolumn" align="left">
                        US Dollar
                        <br />
                        Canadian Dollar
                        <br />
                        Euro
                        <br />
                        Pound Sterling
                        <br />
                        Japanese Yen
                        <br />
                    </td>  
                    <td class="textcolumn" align="left">
                        Swedish Krona
                        <br />
                        Danish Krone
                        <br />
                        Swiss Frank
                        <br />
                        Norwegian Krone
                        <br />
                        Luxembourg frank
                    </td>  
                </tr> */}
                <tr>
                    <td colSpan="4">
                    <CurrencyComponent />
                    </td>
                </tr>
            </table>               
        </>
        
    )
} 

export default CurrencyPage;