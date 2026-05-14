import React from 'react';

 class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.firstname = {value: ''};
      this.lastname = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
     //this.setState({value: event.target.value});
      this.setState({firstname: event.target.firstname});
      this.setState({lastname: event.target.lastname});
    }
  
    handleSubmit(event) {
      alert('First Name is: ' + this.firstname);
      event.preventDefault();
    }

    setFirst(e) {
      this.setState({
        firstname: e.target.value
      });
      console.log('hit')
    }
  
    render() {
      return (
        <form action="/find_account" id="form1" onSubmit={this.handleSubmit}>
        <label for="firstname">First name:</label>
        <input type="text" id="firstname" name="firstname"  value={this.firstname} onChange={this.handleChange} />
        <br />
            <label for="lastname">Last name:</label>
            <input type="text" id="lastname" name="lastname" value={this.lastname} onChange={this.handleChange} />
            <br />
            <input type="submit" value="Submit" />
    </form> 
      );
    }
  }

  export default SearchForm;