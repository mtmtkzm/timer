import React, {Component} from 'react';
// import Picker from 'react-native-picker';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Picker,
  Dimensions
} from 'react-native';

export default class CountDownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: ['03', '00'], // [hours, min]
      containerStyles: styles.containerDefault
    };

    // this._showTimerSetter();
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

  _convertArrayToSeconds = array => {
    // FROM [min, sec](array) TO sec(Number)
    return Number(array[0] * 60) + Number(array[1]);
  };

  _convertSecondsToArray = seconds => {
    // FROM sec(Number) TO [min, sec](array)
    return [Math.floor(seconds / 60), seconds % 60];
  };

  render() {
    return (
      <View style={[ styles.container ]}>
        <View style={[ styles.picker ]}>
          <View style={[ styles.pickerMinutes ]}>
            <Picker itemStyle={[ styles.pickerItem ]} selectedValue="3">
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
              <Picker.Item label="13" value="13" />
              <Picker.Item label="14" value="14" />
              <Picker.Item label="15" value="15" />
            </Picker>
            <Text style={[ styles.pickerMinutesUnit ]}>分</Text>
          </View>

          <View style={[ styles.pickerSeconds ]}>
            <Picker itemStyle={[ styles.pickerItem ]} selectedValue="0">
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
              <Picker.Item label="13" value="13" />
              <Picker.Item label="14" value="14" />
              <Picker.Item label="15" value="15" />
            </Picker>
            <Text style={[ styles.pickerSecondsUnit ]}>秒</Text>
          </View>
        </View>
        <View style={[ styles.timer ]}>
          <Text style={[ styles.timerMinutes]}>{this.state.timer[0]}</Text>
          <Text style={[ styles.timerColon ]}>:</Text>
          <Text style={[ styles.timerSeconds]}>{this.state.timer[1]}</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#36445D',
  },
  containerTimeup: {
    backgroundColor: '#AB3335',
  },

  picker: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerMinutes: {
    flex: 1,
    paddingLeft: 50,
  },
  pickerSeconds: {
    flex: 1,
    paddingRight: 80,
  },
  pickerItem: {
    color: '#ffffff',
  },
  pickerMinutesUnit: {
    position: 'absolute',
    bottom: 100,
    right: 25,
    color: '#ffffff'
  },
  pickerSecondsUnit: {
    position: 'absolute',
    bottom: 100,
    right: 105,
    color: '#ffffff'
  },

  timer: {
    flex: 1,
    flexDirection: 'row',
  },
  timerMinutes: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 90,
    textAlign: 'center',
    paddingLeft: 20,
  },
  timerColon: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -10,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 90,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  timerSeconds: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 90,
    textAlign: 'center',
    paddingRight: 20,
  },

});

AppRegistry.registerComponent('CountDownTimer', () => CountDownTimer);
