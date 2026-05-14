import React, { useState } from "react";

    const LoginForm = ({ onLogin }) => {  
        const [username, setUsername] = useState("");  
        const [password, setPassword] = useState("")
        const handleSubmit = async e => {    e.preventDefault();    
            onLogin(username, password);  };  


return (    
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-md max-w-sm mx-auto mt-10">  
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>      
        <input        type="text"        placeholder="Username"        className="w-full p-2 mb-3 border rounded"        value={username}        onChange={e => setUsername(e.target.value)}        required      />      
        <input        type="password"        placeholder="Password"        className="w-full p-2 mb-3 border rounded"        value={password}        onChange={e => setPassword(e.target.value)}        required      />

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">       
            Log In      
            </button>    
    </form>
 );
}

 export default LoginForm;