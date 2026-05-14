import axios from 'axios';

const username = 'user';
const password = 'password';
const API_URL = 'http://localhost:8090/bankapplication';
//const PROXY_URL = 'https://cors-anywhere.herokuapp.com//';

export const getCurrencies = async () => {
    try {
        //alert("Fetching curencies from " + API_URL + "/currency/list" + "with u= " + username + " and p= " + password);
        const response = await axios.get(`${API_URL}/currency/list`, {
              auth: {
                username: username,
                password: password
                }
            });
            //const response = await axios.get(`${API_URL}/hello`);
        //alert("Got " + response.data);
        return response.data;
    } catch (error) {
        alert("Got error fetching currencies" + error);
        console.error('Error fetching currencies:', error);
        throw error;
    }
};

export const saveCurrency = async (content) => {
    try {
        alert("Saving " + content);
        const response = await axios.post(`${API_URL}/currency`, { content });
        return response.data;
    } catch (error) {
        console.error('Error saving currency:', error);
        throw error;
    }
};