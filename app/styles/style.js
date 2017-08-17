import {
  StyleSheet,
} from 'react-native';
export default styles = StyleSheet.create({
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