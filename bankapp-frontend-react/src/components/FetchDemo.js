import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/hello';
//const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

class FetchDemo extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        posts: []
      };
    }
  
    componentWillMount() {
       let currentComponent = this;
      //axios.get(`http://10.11.202.253:8080/ETLTool/getAllDBProfile`)
      axios.get(API_URL)
        .then(function (response) {
      console.log(response);
      console.log(response.data);
  
      currentComponent.setState({
          posts: response.data
        });
  
  
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  
   render() {
      const renderItems = this.state.posts.map(function(item, i) {
        return <li key={i}>{item.title}</li>
      });
  
      return (
        <ul className="FetchDemo">
          {renderItems}
        </ul>
      );
   }
  }

export default FetchDemo;