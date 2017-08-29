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
      minutes: 3,
      seconds: 0,
      containerStyles: styles.containerDefault
    };
  }

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
