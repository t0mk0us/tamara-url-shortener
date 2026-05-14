import axios from 'axios';

const username = 'user';
const password = 'password';
const API_URL = 'http://localhost:8080';

export const getMessages = async () => {
    try {
        alert("Fetching messages from " + API_URL + "/hello" + "with u= " + username + " and p= " + password);
        const response = await axios.get(`${API_URL}/hello`, {
              auth: {
                username: username,
                password: password
                }
            });
            //const response = await axios.get(`${API_URL}/hello`);
        alert("Got " + response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
};

export const saveMessage = async (content) => {
    try {
        alert("Saving " + content);
        const response = await axios.post(`${API_URL}/hello`, { content });
        return response.data;
    } catch (error) {
        console.error('Error saving message:', error);
        throw error;
    }
};