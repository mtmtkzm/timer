import React, {Component} from 'react';
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
  constructor(props) {
    super(props);

    this.state = {
      timer: [0, 0] // [hours, min]
    };

    this._showTimerSetter();
  }

  // 59m 59s までのデータを作る
  _createTimerData = () => {
    let minutes = [], seconds = [];
    for (let i = 0; i < 60; i++) {
      minutes.push(i)
    }
    for (let i = 0; i < 60; i++) {
      seconds.push(i)
    }
    return [minutes, seconds];
  };

  _setTimer = (timer) => {
    this.setState({
      timer: timer
    })
  };

  _startTimer = () => {
    setInterval(() => {
      let currentSeconds = this._convertArrayToSeconds(this.state.timer);
      currentSeconds = currentSeconds - 1;

      this.setState({
        timer: this._convertSecondsToArray(currentSeconds)
      })
    }, 1000);
  };

  _convertArrayToSeconds = (array) => {
    // FROM [min, sec](array)
    // TO   sec(Number)
    return Number(array[0] * 60) + Number(array[1]);
  };

  _convertSecondsToArray = seconds => {
    // FROM sec(Number)
    // TO   [min, sec](array)

    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    return [min, sec];
  };

  _showTimerSetter = () => {
    Picker.init({
      pickerData: this._createTimerData(),
      pickerToolBarFontSize: 16,
      pickerFontSize: 16,
      pickerFontColor: [0, 0, 0, 1],
      pickerConfirmBtnText: 'Start Timer',
      pickerCancelBtnText: 'Cancel',
      pickerTitleText: '',
      onPickerConfirm: pickedValue => {
        this._setTimer(pickedValue);
        this._startTimer();
      },
      onPickerSelect: pickedValue => {
        this._setTimer(pickedValue);
      }
    });

    // Pickerを表示させる
    Picker.show();
  };

  render() {
    return (
      <View style={styles.styles}>
        <Text>{this.state.timer[0]}minutes {this.state.timer[1]}seconds</Text>
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
  styles: {
    flex: 1,
    backgroundColor: '#36445D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('CountDownTimer', () => CountDownTimer);
