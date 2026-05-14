import React from 'react';
import ReactDOM from 'react-dom/client';


function MyForm() {
  return (
    <form>
                <label for="firstname">First name:</label>
                <input type="text" id="firstname" name="firstname">
                    <label for="lastname">Last name:</label>
                    <input type="text" id="lastname" name="lastname" />
                    <input type="submit" value="Submit" />
                </input>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);