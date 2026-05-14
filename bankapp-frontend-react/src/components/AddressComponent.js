import React, { useState, useEffect } from 'react';
import { getAddresses, saveAddress } from '../services/addressService';

const AddressComponent = () => {
    const [addresses, setAddresses] = useState([]);
    const [newAddress, setNewAddress] = useState('');

    useEffect(() => {
        fetchAddresses();
    }, []);

    const fetchAddresses = async () => {
        try {
            const data = await getAddresses();
            setAddresses(data);
            console.log(data);
        } catch (error) {
            console.error('Failed to fetch addresses', error);
        }
    };

    const handleSaveAddress = async () => {
        try {
            await saveAddress(newAddress);
            fetchAddresses();
            setNewAddress('');
        } catch (error) {
            console.error('Failed to save address', error);
        }
    };

    return (
        <div>
            <h5>Addresses</h5>
{/*             <ul>
                {addresses.map((address) => (
                    <li key={address.id}>{address.id},{address.number},{address.street},{address.appartment},
                    {address.city},{address.state_province},{address.postalCode},{address.country.name},
                    {address.country.symbol},{address.country.currency.name},{address.country.currency.code},
                    {address.country.currency.symbol},{address.country.continent.name};</li>
                
                ))}
            </ul> */}
    <table>
      <tbody>
        {addresses && addresses.map((address) => (
                            <tr align="left">
                                <td className='textcolumn'>
                                    {address.number},
                                </td>
                                <td className='textcolumn'>
                                    {address.street},
                                </td>
                                <td className='textcolumn'>
                                    {address.appartment}
                                </td>
                                <td className='textcolumn'>
                                    {address.country.symbol},
                                </td>
                                <td className='textcolumn'>
                                    {address.city},
                                    
                                     </td>
                                <td className='textcolumn'>
                                    {address.state_province},
                                    
                                     </td>
                                <td className='textcolumn'>
                                    {address.postalCode},
                                    
                                     </td>
                                <td className='textcolumn'>
                                    {address.country.name},
                                 </td>
                                <td className='textcolumn'>    
                    {address.country.symbol},
                     </td>
                                <td className='textcolumn'>
                    {address.country.currency.name},
                     </td>
                                <td className='textcolumn'>
                    {address.country.currency.code},
                     </td>
                                <td className='textcolumn'>
                    {address.country.currency.symbol},
                     </td>
                                <td className='textcolumn'>
                    {address.country.continent.name};
                                </td>
                            </tr>
        ))}
      </tbody>
    </table>
            <input
                type="text"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                placeholder="Enter new address"
            />
            <button onClick={handleSaveAddress}>Save Address</button>
        </div>
    );
};

export default AddressComponent;