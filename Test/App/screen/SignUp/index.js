/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import SignUpStyle from './SignUpStyle';
import { BLACK, WHITE } from '../../helper/Color';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      phoneNo: '',
      loading: false,
      customer: true,
    };
  }

  render() {
    return(
      <SignUpStyle.WrapperViewVertical>
        <SignUpStyle.AbsoluteImage source={require('../../assets/background.png')}  />
        <SignUpStyle.WrapperViewVertical>
          <SignUpStyle.SafeView>
            <SignUpStyle.SignInInnerView>
              <SignUpStyle.UserImage source={require('../../assets/user.png')}/>
              <SignUpStyle.SIgnInText>
                Sign Up {" "}
              </SignUpStyle.SIgnInText>
              <SignUpStyle.TextInputWrapperView>
                <SignUpStyle.TextInputImage source={require('../../assets/userBlack.png')}/>
                <SignUpStyle.TextInputField
                  value={this.state.name}
                  onChangeText={(name) => this.setState({name})}
                  placeholder={"Name"}/>
              </SignUpStyle.TextInputWrapperView>
              <SignUpStyle.TextInputWrapperView style={{marginTop: 25}}>
                <SignUpStyle.TextInputImage
                  source={require('../../assets/email.png')}/>
                <SignUpStyle.TextInputField
                  value={this.state.email}
                  onChangeText={(email) => this.setState({email})}
                  keyboardType={"email-address"}
                  placeholder={"Email"} />
              </SignUpStyle.TextInputWrapperView>
              <SignUpStyle.TextInputWrapperView style={{marginTop: 25}}>
                <SignUpStyle.TextInputImage source={require('../../assets/password.png')}/>
                <SignUpStyle.TextInputField
                  value={this.state.password}
                  onChangeText={(password) => this.setState({password})}
                  secureTextEntry={true}
                  placeholder={"Password"} />
              </SignUpStyle.TextInputWrapperView>
              <SignUpStyle.TextInputWrapperView style={{marginTop: 25}}>
                <SignUpStyle.TextInputImage source={require('../../assets/phone.png')}/>
                <SignUpStyle.TextInputField
                  value={this.state.password}
                  onChangeText={(password) => this.setState({password})}
                  placeholder={"Phone #"} />
              </SignUpStyle.TextInputWrapperView>
              <SignUpStyle.DontHaveAccountView>
                <SignUpStyle.ToggleView onPress={() => this.setState({customer: false})}>
                  <SignUpStyle.CheckView style={{backgroundColor: !this.state.customer ? BLACK.dark : WHITE.dark}}/>
                  <SignUpStyle.ToogleText>
                    Service Provider
                  </SignUpStyle.ToogleText>
                </SignUpStyle.ToggleView>
                <SignUpStyle.ToggleView
                  onPress={() => this.setState({customer: true})}
                  style={{justifyContent: 'flex-end'}}>
                  <SignUpStyle.CheckView style={{backgroundColor: this.state.customer ? BLACK.dark : WHITE.dark}}/>
                  <SignUpStyle.ToogleText>
                    Customer
                  </SignUpStyle.ToogleText>
                </SignUpStyle.ToggleView>
              </SignUpStyle.DontHaveAccountView>
              <SignUpStyle.LoginButton onPress={() => this.props.navigation.navigate('Main')}>
                <SignUpStyle.LoginButtonText>
                  SIGN UP {' '}
                </SignUpStyle.LoginButtonText>
              </SignUpStyle.LoginButton>
              <SignUpStyle.DontHaveAccountView>
                <SignUpStyle.DontHaveAccountText>
                  Already have account ?{"  "}
                  <SignUpStyle.LoginButtonText onPress={() => this.props.navigation.navigate("SignUp")}>
                    SIGN IN{' '}
                  </SignUpStyle.LoginButtonText>
                </SignUpStyle.DontHaveAccountText>
              </SignUpStyle.DontHaveAccountView>
            </SignUpStyle.SignInInnerView>
          </SignUpStyle.SafeView>
        </SignUpStyle.WrapperViewVertical>
      </SignUpStyle.WrapperViewVertical>
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
)(SignUp);
