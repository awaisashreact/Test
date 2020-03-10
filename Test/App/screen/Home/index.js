/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import HomeScreenStyles from './HomeStyles';
import Header from '../../component/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      inProgressItem: [
        {name: 'Jewelry', progress: 'inProgress'},
        {name: 'Sculptures', progress: 'ready'},
        {name: 'clothing', progress: 'ready'},
        {name: 'Wooden Toys', progress: 'inprogress'}]
    };
  }

  render() {
    return (
      <HomeScreenStyles.WrapperViewVertical>
        <HomeScreenStyles.SafeView>
          <HomeScreenStyles.HeaderView>
            <HomeScreenStyles.HeaderText>
              In progress items
            </HomeScreenStyles.HeaderText>
          </HomeScreenStyles.HeaderView>
          <HomeScreenStyles.List
              keyExtractor={(item, index) => index.toString()}
              data={this.state.inProgressItem}
              renderItem={object => (
                <HomeScreenStyles.ItemWrapper>
                  <HomeScreenStyles.ItemText>
                    
                    <HomeScreenStyles.ItemInnerText>
                    {'  '}Product Name {' '}: {'  '}
                    </HomeScreenStyles.ItemInnerText>
                    {object.item.name}
                  </HomeScreenStyles.ItemText>
                  <HomeScreenStyles.ItemText>
                    <HomeScreenStyles.ItemInnerText>
                    {'  '}Provided Date {' '}: {'  '}
                    </HomeScreenStyles.ItemInnerText>
                    04/02/2020
                  </HomeScreenStyles.ItemText>
                  <HomeScreenStyles.ItemText>
                    <HomeScreenStyles.ItemInnerText>
                    {'  '}Delivery date {' '}: {'  '}
                    </HomeScreenStyles.ItemInnerText>
                    04/04/2020
                  </HomeScreenStyles.ItemText>
                  <HomeScreenStyles.ItemText>
                    
                    <HomeScreenStyles.ItemInnerText>
                    {'  '}Status {' '}: {'  '}
                    </HomeScreenStyles.ItemInnerText>
                    {object.item.progress}
                  </HomeScreenStyles.ItemText>
                </HomeScreenStyles.ItemWrapper>
              )}/>
        </HomeScreenStyles.SafeView>
      </HomeScreenStyles.WrapperViewVertical>
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
)(Home);
