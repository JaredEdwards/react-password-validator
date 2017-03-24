

import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to React Password Checker</h2>
        </div>
        <p className="App-intro">
            Please Sign In:
        </p>
          <PassForm />
      </div>
    );
  }
}

class PassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',
            confirmPass:''
        };
        // this.checkEmail = this.checkEmail.bind(this);
        // this.checkPassword = this.checkPassword.bind(this);
        // this.checkConfirm = this.checkConfirm.bind(this);
        this.checkInput = this.checkInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // checkEmail(e) {
    //   let email = e.target.email
    //     this.setState({
    //           [email]: e.target.value
    //         });
    // }
    // checkPassword(e) {
    //   let password = e.target.password
    //     this.setState({
    //           [password]: e.target.value
    //         });
    // }
    // checkConfirm(e) {
    //   let confirm = e.target.confirm
    //     this.setState({
    //           [confirm]: e.target.value
    //         });
    // }
    checkInput( e ){
      let email = e.target.email
      let password = e.target.password
      let confirm = e.target.confirm
      this.setState({
            [email]: e.target.value,
            [password]: e.target.value,
            [confirm]: e.target.value
          });
    }

    handleSubmit(e){
    let pass = e.target.password.value;
    let confirmed = e.target.confirm.value;
    if(pass === confirmed){
      alert('PASS');
    }
    else{
      this.setState({
        [email]: e.target.value.val(),
        [password]: e.target.value.val(),
        [confirm]: e.target.value.val()
      })
      alert('NOPE')
    }
    // (pass === confirmed) ? alert('PASS') : alert("NOPE");
      e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input
                       type="text"
                       name="email"
                       value={this.state.value}
                       onChange={this.checkEmail} />
                </label>
                <br />
                <label>
                    Password:
                    <input
                      type="text"
                      name="password"
                      value={this.state.value}
                      onChange={this.checkPassword} />
                </label>
                <br />
                <label>
                    ConfirmPassword:
                    <input
                      type="text"
                      name="confirm"
                      value={this.state.value}
                      onChange={this.checkConfirm} />
                </label>
                <br />
                <input
                  type="submit"
                  value="Submit" />
            </form>
        );
    }
}


export default App;
