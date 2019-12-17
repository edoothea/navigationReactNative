import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class Empat extends Component {
    render(){
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                <Text style={{fontSize:30, padding:50, color:'green'}}>Page 4</Text>
                <Text style={{padding:30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                
            </View>
        )
    }
}

export default Empat;