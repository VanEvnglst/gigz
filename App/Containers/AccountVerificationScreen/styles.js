import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    lineHeight: 32,
  },
  subText: {
    marginTop: 10,
    fontSize: 18,
    color: '#333333',
    opacity: 0.5,
    width: '80%',
    lineHeight: 21,
    textAlign: 'center',
  },
  otpContainer: {
    width: '70%',
    height: 150,
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#70707029',
  },
  underlineStyleHighLighted: {
    borderColor: '#707070',
  },
  resendContainer: {
    height: 200,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  newCodeTextStyle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333333',
    opacity: 0.5,
    lineHeight: 21,
  },
  resendTextStyle: {
    fontWeight: 'bold',
  },
});

export default styles;
