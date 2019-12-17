import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Satu from './component/Satu'
import Dua from './component/Dua'

const MainNavigator = createStackNavigator(
  {
    HalSatu : {screen: Satu},
    HalDua : {screen: Dua},
  },
  {
  initialRouteName: 'HalSatu',
  }
);

const AppContainer = createAppContainer(MainNavigator)

class App extends Component {
  render (){
    return(
      <AppContainer/>
    )
  }
}

export default App;