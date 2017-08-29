import React, {Component} from 'react';
import styles from './styles/style';
import {
  AppRegistry,
  View,
  Text,
  Picker,
} from 'react-native';

export default class CountDownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: ['03', '00'], // [hours, min]
      minutes: 3,
      seconds: 0,
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
    const n = Array.from(new Array(60)).map((v,i) => i);
    return (
      <View style={[ styles.container ]}>
        <View style={[ styles.picker ]}>
          <View style={[ styles.pickerMinutes ]}>
            <Picker itemStyle={[ styles.pickerItem ]}
                    selectedValue={this.state.minutes}
                    onValueChange={(itemValue, itemIndex) => this.setState({minutes: itemValue})}>
              { n.map(i => ( <Picker.Item label={i.toString()} key={i} value={i} /> )) }
            </Picker>
            <Text style={[ styles.pickerMinutesUnit ]}>分</Text>
          </View>

          <View style={[ styles.pickerSeconds ]}>
            <Picker itemStyle={[ styles.pickerItem ]}
                    selectedValue={this.state.seconds}
                    onValueChange={(itemValue, itemIndex) => this.setState({seconds: itemValue})}>
              { n.map(i => ( <Picker.Item label={i.toString()} key={i} value={i} /> )) }
            </Picker>
            <Text style={[ styles.pickerSecondsUnit ]}>秒</Text>
          </View>
        </View>
        <View style={[ styles.timer ]}>
          <Text style={[ styles.timerMinutes]}>{this.state.minutes}</Text>
          <Text style={[ styles.timerColon ]}>:</Text>
          <Text style={[ styles.timerSeconds]}>{this.state.seconds}</Text>
        </View>
      </View>
    );
  }

}

AppRegistry.registerComponent('CountDownTimer', () => CountDownTimer);
