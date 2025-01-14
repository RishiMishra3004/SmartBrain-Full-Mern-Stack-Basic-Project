import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
            Name: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({Email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({Password: event.target.value})
    }

    onNameChange = (event) => {
        this.setState({Name: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.Email,
                password: this.state.Password,
                name: this.state.Name
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }

    render() {
        return (
            <div>
                <article className="br3 ba b--black-20 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input 
                                    onChange={this.onNameChange}
                                    className="br2 pa2 input-reset ba b--black bw1 bg-transparent hover-bg-black hover-white w-100" 
                                    type="text"
                                    name="name"  
                                    id="name " />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    onChange={this.onEmailChange}
                                    className="br2 pa2 input-reset ba b--black bw1 bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                    onChange={this.onPasswordChange}
                                    className="br2 b pa2 input-reset ba bw1 b--black bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password" />
                            </div>
                            </fieldset>
                            <div className="">
                                <input 
                                    onClick={this.onSubmitSignIn}
                                    className="b br2 ph3 pv2 input-reset ba bw1 b--black bg-transparent grow pointer f6 dib" 
                                    type="submit" 
                                    value="Register" 
                                />
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        );
    }

}

export default Register;