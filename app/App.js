import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity
} from 'react-native';


import Picker from 'react-native-picker';

export default class CountDownTimer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      timer: [] // [hours, min]
    };

    this._showTimerSetter();
  }

  // 23h 59m までのデータを作る
  _createTimerData = () => {
    let hours = [], min = [];

    for (let i=0; i<24; i++) {
      hours.push(i);
    }

    for (let i=0; i<60; i++) {
      min.push(i);
    }

    return [hours, min];
  };

  _startTimer = (value) => {
    this.setState({
      timer: value
    })
  };

  _showTimerSetter = () => {
    Picker.init({
      pickerData: this._createTimerData(),
      pickerToolBarFontSize: 16,
      pickerFontSize: 16,
      pickerFontColor: [0, 0 ,0, 1],
      pickerConfirmBtnText: 'Start Timer',
      pickerCancelBtnText: 'Cancel',
      pickerTitleText: '',
      onPickerConfirm: (pickedValue, pickedIndex) => {
        this._startTimer(pickedValue);
      },
      // onPickerCancel: (pickedValue, pickedIndex) => {
      //   console.log('date', pickedValue, pickedIndex);
      // },
      // onPickerSelect: (pickedValue, pickedIndex) => {
      //   console.log('date', pickedValue, pickedIndex);
      // }
    });

    // Pickerを表示させる
    Picker.show();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.timer[0]}hours {this.state.timer[1]}min</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('CountDownTimer', () => CountDownTimer);
