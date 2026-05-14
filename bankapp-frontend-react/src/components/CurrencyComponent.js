import React, { useState, useEffect } from 'react';
import { getCurrencies, saveCurrency } from '../services/currencyService';

const CurrencyComponent = () => {
    const [currencies, setCurrencies] = useState([]);
    const [newCurrency, setNewCurrency] = useState('');

    useEffect(() => {
        fetchCurrencies();
    }, []);

    const fetchCurrencies = async () => {
        try {
            const data = await getCurrencies();
            setCurrencies(data);
            console.log(data);
        } catch (error) {
            console.error('Failed to fetch currencies', error);
        }
    };

    const handleSaveCurrency = async () => {
        try {
            await saveCurrency(newCurrency);
            fetchCurrencies();
            setNewCurrency('');
        } catch (error) {
            console.error('Failed to save currency', error);
        }
    };

    return (
        <div>
            <h5>Accepted Currencies</h5>
               <table>
                <tbody>
                    {currencies && currencies.map((currency) => (
                            <tr align="left">
                                <td className='textcolumn'>
                                    {currency.name},
                                </td>
                                <td className='textcolumn'>
                                    {currency.code},
                                </td>
                                <td className='textcolumn'>
                                    {currency.symbol}
                                </td>
                            </tr>
        ))}
      </tbody>
    </table>
            <input
                type="text"
                value={newCurrency}
                onChange={(e) => setNewCurrency(e.target.value)}
                placeholder="Enter new currency"
            />
            <button onClick={handleSaveCurrency}>Save Currency</button>
        </div>
    );
};

export default CurrencyComponent;