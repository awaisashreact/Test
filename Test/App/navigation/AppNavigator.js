import {Animated, Easing} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from '../screen/SignIn';
import Home from '../screen/Home';
import Splash from '../screen/Splash';
import SignUp from '../screen/SignUp';

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.linear,
  },
});

// login stack
const LoginStack = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {header: null, gesturesEnabled: false},
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {header: null, gesturesEnabled: false},
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {header: null, gesturesEnabled: false},
  },
  Main: {
    screen: Home,
    navigationOptions: {header: null, gesturesEnabled: false},
  },
});

// eslint-disable-next-line no-undef
export default (SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: LoginStack,
    App: LoginStack,
    Auth: SignIn,
  },
  {
    initialRouteName: 'AuthLoading',
    transitionConfig: noTransitionConfig,
  },
));
