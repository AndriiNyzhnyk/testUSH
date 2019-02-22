import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class AuthPage extends Component {
    constructor(props) {
        super(props);

        this.authUser = this.authUser.bind(this);
    }

   async authUser(e) {
       e.preventDefault();
       console.log('Ura');

       try {
           let response = await axios.post('/api/signInAdmin', {
               login: this.props.login,
               password: this.props.password
           });

           // console.log(response);

           let cookie = this.getCookie('auth');

           if(cookie === 'welcome') {
               console.log('redirect here');
               this.props.redirect();
           }


       } catch (err) {
            console.log(err);
       }

   }

    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;

    }

    render() {
        if(this.props.auth) {
            return <Redirect to='app' />;
        } else {
            return (
                <div className="authPage">
                    <form  onSubmit={this.authUser}>
                        <p>
                            <label htmlFor="login">Логін:</label>
                            <input type="text"
                                   value={this.props.login}
                                   onChange={this.props.handlerChangeLogin}
                                   autoComplete="off" required />
                        </p>

                        <p>
                            <label htmlFor="password">Пароль:</label>
                            <input type="password"
                                   value={this.props.password}
                                   onChange={this.props.handlerChangePassword}
                                   autoComplete="off"
                                   required />
                        </p>

                        <p className="login-submit">
                            <button type="submit" className="login-button">Ввійти</button>
                        </p>

                        <p className="forgot-password">Забули пароль ?</p>
                    </form>
                </div>

            );
        }

    }
}

export default AuthPage;