import styled from 'styled-components';
import {SCREEN, isIphoneXorAbove} from '../../helper/Constant';
import {WHITE, BLUE} from '../../helper/Color';

const HeaderStyles = {
  WrapperView: styled.View`
    width: 100%;
    height: ${isIphoneXorAbove ? 90 : 50}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    border-color: ${WHITE.borderLight};
    background-color:  ${BLUE.background};
  `,
};

export default HeaderStyles;
