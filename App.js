import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import myStore from './src/store';
import  HomeScreen  from './src/HomeScreen';
import PhotoScreen from './src/PhotoScreen';


const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  ViewPhoto:{
    screen: PhotoScreen
  },

}, {initialRouteName: 'Home'});

export default class App extends React.Component {
  render() {
    return(
    <Provider store={myStore} >
      <RootStack/>
    </Provider>);
  }
}
