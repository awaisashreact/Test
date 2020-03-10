/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import SignInStyle from './SignInStyle';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { SCREEN } from '../../helper/Constant';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  render() {
    return(
      <SignInStyle.WrapperViewVertical>
        <SignInStyle.AbsoluteImage source={require('../../assets/background.png')}  />
        <SignInStyle.WrapperViewVertical>
          <SignInStyle.SafeView>
            <SignInStyle.SignInInnerView>
              <SignInStyle.UserImage source={require('../../assets/user.png')}/>
              <SignInStyle.SIgnInText>
                Sign In {" "}
              </SignInStyle.SIgnInText>
              <SignInStyle.TextInputWrapperView>
                <SignInStyle.TextInputImage source={require('../../assets/email.png')}/>
                <SignInStyle.TextInputField value={this.state.email} onChangeText={(email) => this.setState({email})} keyboardType={"email-address"}/>
              </SignInStyle.TextInputWrapperView>
              <SignInStyle.TextInputWrapperView style={{marginTop: 25}}>
                <SignInStyle.TextInputImage source={require('../../assets/password.png')}/>
                <SignInStyle.TextInputField value={this.state.password} onChangeText={(password) => this.setState({password})} secureTextEntry={true}/>
              </SignInStyle.TextInputWrapperView>
              <SignInStyle.LoginButton>
                <SignInStyle.LoginButtonText>
                  SIGN IN {' '}
                </SignInStyle.LoginButtonText>
              </SignInStyle.LoginButton>

        <LoginButton
        style={{height: 44, width: SCREEN.width - 80, marginTop: 10, borderRadius: 10, fontSize: 18,}}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    this.props.navigation.navigate('Main');
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
              <SignInStyle.DontHaveAccountView>
                <SignInStyle.DontHaveAccountText>
                  Dont't have account ?{"  "}
                  <SignInStyle.LoginButtonText onPress={() => this.props.navigation.navigate("SignUp")}>
                    SIGN Up{' '}
                  </SignInStyle.LoginButtonText>
                </SignInStyle.DontHaveAccountText>
              </SignInStyle.DontHaveAccountView>
            </SignInStyle.SignInInnerView>
          </SignInStyle.SafeView>
        </SignInStyle.WrapperViewVertical>
      </SignInStyle.WrapperViewVertical>
      );
  }
}

function mapStateToProps(state, props) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
