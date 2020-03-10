import styled from 'styled-components/native';
import { SCREEN } from '../../helper/Constant';
import { BLACK, WHITE, BLUE } from '../../helper/Color';
const SignUpStyle = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${BLACK.transParent};
  `,
  AbsoluteImage: styled.Image`
    height: ${SCREEN.height}px;
    width: ${SCREEN.width}px;
    position: absolute;
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
    justifyContent: center;
  `,
  SignInInnerView: styled.View`
    minHeight: ${SCREEN.height /2}px;
    width: ${SCREEN.width - 40}px;
    alignSelf: center;
    backgroundColor: ${WHITE.transParent};
    borderRadius: 10px;
    alignItems: center;
  `,
  UserImage: styled.Image`
    height: 80px;
    width: 80px;
    borderRadius: 40px;
    position: absolute;
    top: -40px;
  `,
  SIgnInText: styled.Text`
    marginTop: 60px;
    fontSize: 28px;
    fontWeight: bold;
  `,
  TextInputWrapperView: styled.View`
    height: 44px;
    backgroundColor: ${WHITE.dark};
    width: ${SCREEN.width - 80}px;
    flexDirection: row;
    marginTop: 15px;
    borderRadius: 5px;
    alignItems: center;
  `,
  TextInputImage: styled.Image`
    height: 44px;
    width: 44px;
    resizeMode: contain;
    borderRadius: 22px;
  `,
  TextInputField: styled.TextInput`
    height: 44px;
    width: ${SCREEN.width - 124}px;
  `,
  LoginButton: styled.TouchableOpacity`
    height: 44px;
    width: ${SCREEN.width -80}px;
    marginTop: 35px;
    backgroundColor: ${BLUE.light};
    borderRadius: 10px;
    justifyContent: center;
    alignItems: center;
  `,
  LoginButtonText: styled.Text`
    color: ${WHITE.dark};
    fontWeight: bold;
    fontSize: 18px;
  `,
  DontHaveAccountView: styled.View`
  height: 44px;
  width: ${SCREEN.width - 80}px;
  flexDirection: row;
  marginTop: 15px;
  alignItems: center;
  justifyContent: flex-end;
  `,
  DontHaveAccountText: styled.Text`
    color: ${WHITE.dark};
    fontSize: 16px;
  `,
  ToggleView: styled.TouchableOpacity`
    flex: 1;
    flexDirection: row;
    alignItems: center;
  `,
  CheckView: styled.View`
    height: 30px;
    width: 30px;
    backgroundColor: ${WHITE.dark};
  `,
  ToogleText: styled.Text`
    fontSize: 16px;
    color: ${WHITE.dark};
    marginLeft: 5px;
  `,
};

export default SignUpStyle;
