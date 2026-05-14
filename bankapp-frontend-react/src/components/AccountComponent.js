import React, { useState, useEffect } from 'react';
import { getAccounts, getAccountById, getAccountByFirstAndLast, saveAccount } from '../services/accountService';

const AccountComponent = () => {
    const [accounts, setAccounts] = useState([]);
    const [anaccount, setAnaccount] = useState([]);
    const [newAccount, setNewAccount] = useState('');

    useEffect(() => {
        fetchAccounts();
        fetchAccountById();
        //fetchAccountsByFirstAndLast();
    }, []);

    const fetchAccounts = async () => {
        try {
            const data = await getAccounts();
            setAccounts(data);
            //alert("Accounts are " + data);
            console.log(data);
        } catch (error) {
            console.error('Failed to fetch Accounts', error);
        }
    };

    const fetchAccountById = async () => {
        try {
            const data = await getAccountById();
            setAnaccount(data);
            //alert("Account is " + data);
            console.log("Account is " + data);
        } catch (error) {
            console.error('Failed to fetch Account by ID', error);
        }
    };

/*         const fetchAccountsByFirstAndLast = async () => {
        try {
            const data = await getAccountByFirstAndLast();
            alert("Got: " + data);
            setAccounts(data);
            console.log("Accounts are " + data);
        } catch (error) {
            console.error('Failed to fetch Account by owner First and Last names', error);
        }
    }; */

    const handleSaveAccount = async () => {
        try {
            await saveAccount(newAccount);
            fetchAccounts();
            setNewAccount('');
        } catch (error) {
            console.error('Failed to save Account', error);
        }
    };

    return (
        <div>
            <h5>Accounts</h5>
    <table>
      <tbody>        
        {accounts && accounts.map((account) => (
                            <tr align="left">
                                <td className='textcolumn'>
                                    {account.balance},
                                </td>
                                <td className='textcolumn'>
                                   {account.owner.firstName}, 
                                </td>
                                 <td className='textcolumn'>
                                   {account.owner.lastName}, 
                                </td>
                                <td className='textcolumn'>
                                    {account.currency.name},
                                </td>
                                <td className='textcolumn'>
                                    {account.currency.code},
                                </td>
                                <td className='textcolumn'>
                                    {account.currency.symbol},
                                </td>
                                <td className='textcolumn'>
                                    {account.type}
                                </td>
                            </tr>
        ))}
      </tbody>
    </table>
    {(anaccount !== null) ?
                <h5>Account with ID {anaccount.id}</h5>
                : ""}
    <table>
        <tbody>
            {(anaccount === null)  ? 
            <tr align="left">
                        <td className='textcolumn'>
                            {anaccount.balance},
                        </td>
                        <td className='textcolumn'>
                            {anaccount.owner.firstName}, 
                        </td>
                            <td className='textcolumn'>
                            {anaccount.owner.lastName}, 
                        </td>
                        <td className='textcolumn'>
                            {anaccount.currency.name},
                        </td>
                        <td className='textcolumn'>
                            {anaccount.currency.code},
                        </td>
                        <td className='textcolumn'>
                            {anaccount.currency.symbol},
                        </td>
                        <td className='textcolumn'>
                            {anaccount.type}
                        </td>
                    </tr>
                    : ""}
        </tbody>
    </table>

            <input
                type="text"
                value={newAccount}
                onChange={(e) => setNewAccount(e.target.value)}
                placeholder="Enter new account"
            />
            <button onClick={handleSaveAccount}>Save Account</button>
        </div>
    );
};

export default AccountComponent;