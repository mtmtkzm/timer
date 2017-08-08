import React, {Component} from 'react';
import Picker from 'react-native-picker';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class CountDownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: [0, 0], // [hours, min]
      containerStyles: styles.containerDefault
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
    this.setState({ timer: timer })
  };

  _startTimer = () => {
    setInterval(() => {
      let currentSeconds = this._convertArrayToSeconds(this.state.timer);
      if (currentSeconds <= 0) {
        this._timeup();
        return;
      }
      currentSeconds = currentSeconds - 1;

      this.setState({
        timer: this._convertSecondsToArray(currentSeconds)
      })
    }, 1000);
  };

  _timeup = () => {
    this.setState({
      containerStyles: styles.containerTimeup
    })
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
      pickerFontSize: 22,
      pickerToolBarBg: [255, 255, 255, 0.1],
      pickerBg: [55, 68, 92, 1],
      pickerFontColor: [255, 255, 255, 1],
      pickerCancelBtnColor: [255, 255, 255, 1],
      pickerConfirmBtnColor: [255, 255, 255, 1],
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
    Picker.show();
  };

  render() {
    return (
      <View style={ this.state.containerStyles }>
        <Text style={[styles.timer, styles.minutes]}>{this.state.timer[0]}</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={[styles.timer, styles.seconds]}>{this.state.timer[1]}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  containerDefault: {
    flex: 1,
    backgroundColor: '#36445D',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containerTimeup: {
    flex: 1,
    backgroundColor: '#AB3335',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  timer: {
    flex:3,
    color: '#FFFFFF',
    fontSize: 90,
    textAlign: 'right',
    fontFamily: 'Futura',
    paddingBottom: 140,
    backgroundColor: 'transparent',
  },
  minutes: {
  },
  seconds: {
    position: 'relative',
    right: 35,
  },
  colon: {
    flex:1,
    color: '#FFFFFF',
    fontSize: 100,
    paddingLeft: 20,
    paddingBottom: 160,
    textAlign: 'center',
  }
});

AppRegistry.registerComponent('CountDownTimer', () => CountDownTimer);
