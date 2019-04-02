import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity, Dimensions, AsyncStorage} from 'react-native';
import List from './List.js';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Main extends React.Component {
  constructor(props)
  {
    super(props);
    this.state= {
      noteArray:[],
      noteText: '',
    }
  }
  addNote(){
    if(this.state.noteText.trim())
    {
      var d = new Date();
      this.state.noteArray.push({
        'date': d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate(),
        'note': this.state.noteText.trim(),
      });
      this.setState({noteArray: this.state.noteArray});
      this.setState({ noteText: ''});
    }
  }
  deleteNote(key)
  {
    this.state.noteArray.splice(key,1);
    this.setState({ noteArray: this.state.noteArray});
  }
  showKey()
  {
        alert(this.state.noteArray.key);
  }
  render() {
    let notes = this.state.noteArray.map((val,key) =>{
      return <List key = {key} keyval = {key} val = {val}
          deleteMethod={ ()=>this.deleteNote(key)} />
    });


    //add = (ToDoText) =>
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style = {styles.header}>
          <Text style = {styles.headText}>This is your ToDo List!</Text>
        </View>
        <ScrollView style = {styles.scroll}>
          {notes}

        </ScrollView>
        <KeyboardAvoidingView style = {styles.footer}>
          <TextInput
            style = {styles.TextBox}
            placeholder = "New ToDo Type Here!"
            placeholderTextColor = "#000000"
            onChangeText = {(noteText) => this.setState({noteText})}
            value = {this.state.noteText}>
          </TextInput>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style = {styles.addButton}
          onPress = {this.addNote.bind(this)}>
          <Text>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    flex: 1,
    marginBottom: 100,
  },
  header: {
    paddingTop: SCREEN_HEIGHT/20,
    paddingBottom: SCREEN_HEIGHT/40,
    backgroundColor:'#d4d3fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headText: {
    fontWeight: 'bold',
    color: '#000000',
  },
  TextBox: {
    backgroundColor: '#fce5ff',
    height: 50,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  addButton: {
    zIndex: 11,
    position: 'absolute',
    bottom: 50,
    right: 0,
    width: SCREEN_WIDTH/5,
    height: SCREEN_WIDTH/5,
    borderRadius: 50,
    backgroundColor: '#f5a9ff',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
