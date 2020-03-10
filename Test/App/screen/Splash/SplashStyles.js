import styled from 'styled-components/native';
import {BLUE} from '../../helper/Color';
import { SCREEN } from '../../helper/Constant';
const SplashStyles = {
  WrapperViewVertical: styled.View`
    background-color: ${BLUE.background};
    flex: 1;
    justify-content: center;
  `,
  ActivityProcessing: styled.ActivityIndicator`
    align-self: center;
    position: absolute;
  `,
};

export default SplashStyles;
