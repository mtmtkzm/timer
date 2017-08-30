import React, {Component} from 'react';
import styles from './styles/style';
import {
  AppRegistry,
  View,
  Text,
  Picker,
  Modal,
  TouchableHighlight
} from 'react-native';

export default class CountDownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: '03',
      seconds: '00',
      isCountDown: false,
    };
  }

  _startCountDownTimer = () => {
    setInterval(this._countDown, 1000);
  }

  _countDown = () => {
    // 今の残り時間
    m = Number(this.state.minutes);
    s = Number(this.state.seconds);

    pastTime = (m * 60) + s - 1;

    // 1秒減らしてそれぞれ返す
    this.setState({
      minutes: this._doubleDigitString(Math.floor(pastTime / 60)),
      seconds: this._doubleDigitString(pastTime % 60)
    })

  }

  _doubleDigitString = num => {
    return ('00'+num.toString()).slice(-2);
  }

  _onPressStartButton = () => {
    this._startCountDownTimer();
    this.setState({
      isCountDown: !this.state.isCountDown
    })
  };

  _onPressCancelButton = () => {};

  render() {
    const n = Array.from(new Array(60)).map((v,i) => i);
    return (
      <View style={[ styles.container ]}>

        <View style={ styles.timerWrapper }>

          <View style={ this.state.isCountDown ? styles.displayNone : styles.picker }>
            <View style={[ styles.pickerMinutes ]}>
              <Picker itemStyle={[ styles.pickerItem ]}
                      selectedValue={this.state.minutes}
                      onValueChange={(itemValue, itemIndex) => this.setState({ minutes: itemValue })}>
                { n.map(i => ( <Picker.Item label={i.toString()} key={i} value={this._doubleDigitString(i)} /> )) }
              </Picker>
              <Text style={[ styles.pickerMinutesUnit ]}>分</Text>
            </View>
            <View style={[ styles.pickerSeconds ]}>
              <Picker itemStyle={[ styles.pickerItem ]}
                      selectedValue={this.state.seconds}
                      onValueChange={(itemValue, itemIndex) => this.setState({ seconds: itemValue })}>
                { n.map(i => ( <Picker.Item label={i.toString()} key={i} value={this._doubleDigitString(i)} /> )) }
              </Picker>
              <Text style={[ styles.pickerSecondsUnit ]}>秒</Text>
            </View>
          </View>

          <View style={ this.state.isCountDown ? styles.timer : styles.displayNone }>
            <Text style={[ styles.timerMinutes]}>{this.state.minutes}</Text>
            <Text style={[ styles.timerColon ]}>:</Text>
            <Text style={[ styles.timerSeconds]}>{this.state.seconds}</Text>
          </View>
        </View>

        <View style={ styles.timerWrapper }>
          <TouchableHighlight style={[styles.cancelButton]} onPress={this._onPressCancelButton}>
            <Text style={[styles.cancelButtonText]} >Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.startButton]} onPress={this._onPressStartButton}>
            <Text style={[styles.startButtonText]} >{ this.state.isCountDown ? 'Stop' : 'Start' }</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }

}

AppRegistry.registerComponent('CountDownTimer', () => CountDownTimer);
