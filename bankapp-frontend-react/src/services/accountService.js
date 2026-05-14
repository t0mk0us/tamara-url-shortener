import axios from 'axios';

const username = 'user';
const password = 'password';
const API_URL = 'http://localhost:8090/bankapplication/account';

var ID = '2';
var firstName = 'Tamara';
var lastName = 'Melnikova';

export const getAccounts = async () => {
    try {
        console.log("Fetching accounts from " + API_URL + "/list", '');
        const response = await axios.get(`${API_URL}/list`, {
              auth: {
                username: username,
                password: password
                }
            });
        console.log("Got ", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching accounts:', error);
        throw error;
    }
};

export const getAccountById = async () => {
        try {
            console.log("Searching for account with ID = " + ID + "from " + API_URL + "/" + ID + "with u= " + username + " and p= " + password);

            const response = await axios.get(`${API_URL}/${ID}`, {
                  auth: {
                    username: username,
                    password: password
                    }/* ,
          params: {
            id: formData.id
          } */
                });

            console.log("Searching by ID:" + ID);
            // alert("Got " + response.data);
            return response.data;

        } catch (error) {
            console.error('Error finding account:', error);
            throw error;
        }
    };

    export const getAccountByFirstAndLast = async () => {
        try {
            console.log("Searching for account with owner First Name = " + firstName + " and Last Name = " + lastName + " from " + API_URL + "/by_owner/" + lastName + "/" + firstName + " with u= " + username + " and p= " + password, null);

            const response = await axios.get(`${API_URL}/by_owner/${lastName}/${firstName}`, {
                withCredentials: true,
                  auth: {
                    username: username,
                    password: password
                    }
                });

            console.log('Searching for account with owner First Name = ' + firstName + ' and Last Name = ' + lastName, response.data);
            alert("Got " + response.data);
            return response.data;

        } catch (error) {
            console.error('Error finding account:', error);
            throw error;
        }
    };

export const saveAccount = async (content) => {
    try {
        alert("Saving " + content);
        const response = await axios.post(`${API_URL}/account/list`, { content });
        return response.data;
    } catch (error) {
        console.error('Error saving messaccountage:', error);
        throw error;
    }
};