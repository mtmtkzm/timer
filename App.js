import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      time: 5, // 秒
      styles: {
        flex: 1,
        backgroundColor: '#36445D',
        alignItems: 'center',
        justifyContent: 'center',
      },

    };

    // カウントダウン
    let si = setInterval(() => {
      this.countDown();
      if (this.isTimeup()) {
        clearInterval(si);
      }
    }, 1000);
  }

  countDown () {
    this.setState(previousState => {
      return {
        time: previousState.time - 1
      }
    });
  }

  isTimeup () {
    if ( this.state.time > 0 ) return;

    this.changeBackgroundColor({
      backgroundColor: '#AA3434'
    });
    return true;
  }

  changeBackgroundColor (newStyles) {
    this.setState(previousState => {
      let prevStyles = Object.assign({}, previousState.styles);

      return {
        styles: Object.assign(prevStyles, newStyles)
      };
    });
  }

  render() {
    return (
      <View style={ this.state.styles }>
        <Text style={ baseStyle.text }>{ this.state.time }</Text>
      </View>
    );
  }
}

const baseStyle = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 100
  }
});
