import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class Satu extends Component {
    render(){
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                <Text style={{fontSize:30, color:'blue', padding:30}}>Page 1</Text>
                <Text style={{padding:30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Button title='Go to Page 2' onPress={()=> this.props.navigation.navigate('HalDua')}/>
            </View>
        )
    }
}

export default Satu;