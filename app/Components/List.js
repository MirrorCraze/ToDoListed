import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions, AsyncStorage} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export default class List extends React.Component {

  render() {

    return (
      <View key = {this.props.keyval} styles = {styles.notes}>
        <Text styles = {styles.notesText}> {this.props.val.date}</Text>
        <Text styles = {styles.notesText}> {this.props.val.note}</Text>
        <TouchableOpacity onpress = {this.props.deleteMethod} style = {styles.Button}>
          <Text styles = {styles.noteDel}>-</Text>
        </TouchableOpacity>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  notes: {
        position: 'relative',
        padding: 20,
        paddingRight:100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
        backgroundColor: '#f9c9ff',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91e63',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: 'white',
    }﻿,
    Button: {
      zIndex: 11,
      position: 'absolute',
      right: 0,
      width: SCREEN_WIDTH/10,
      height: SCREEN_WIDTH/10,
      borderRadius: 50,
      backgroundColor: '#f5a9ff',
      justifyContent: 'center',
      alignItems: 'center',
    }

});
