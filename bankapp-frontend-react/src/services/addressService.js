import axios from 'axios';

const username = 'user';
const password = 'password';
const API_URL = 'http://localhost:8090/bankapplication';

export const getAddresses = async () => {
    try {
        //alert("Fetching addresses from " + API_URL + "/address/list" + "with u= " + username + " and p= " + password);
        const response = await axios.get(`${API_URL}/address/list`, {
              auth: {
                username: username,
                password: password
                }
            });
            //const response = await axios.get(`${API_URL}/address/list`);
        console.log('Request successful:', response.data);
          //alert("Got " + response.data);
        return response.data;

    } catch (error) {
        console.error('Error fetching addresses:', error);
        throw error;
    }
};

export const saveAddress = async (content) => {
    try {
        alert("Saving " + content);
        const response = await axios.post(`${API_URL}/address/list`, { content });
        return response.data;
    } catch (error) {
        console.error('Error saving address:', error);
        throw error;
    }
};