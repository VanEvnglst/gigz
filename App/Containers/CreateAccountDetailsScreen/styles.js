import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1, 
    marginHorizontal: 30,
    marginTop: 60
  },
  headerTextStyle: { 
    paddingLeft: 10, 
    fontWeight: 'bold', 
    color: "#1D262C", 
    lineHeight: 20, 
    fontSize: 16
  },
  inputStyle: { 
    borderWidth: 1, 
    width: '100%', 
    height: 51, 
    borderRadius: 25, 
    padding: 15, 
    borderColor: '#70707029',
    marginVertical: 10
  },
  profileTextStyle: { 
    paddingLeft: 10, 
    marginTop: 20, 
    fontWeight: 'bold', 
    color: "#1D262C",
    lineHeight: 20, 
    fontSize: 16 
  },
  profileButtonStyle: {
    borderStyle: 'dashed', 
    borderColor: '#70707029',
    borderWidth: 1,
    borderRadius: 25, 
    width: '100%', 
    alignItems: 'center', 
    height: 51, 
    justifyContent: 'center', 
    marginTop: 10,
    flexDirection: 'row'
  },
  profileBtnTextStyle: { 
    color: '#333333', 
    opacity: 0.3, 
    lineHeight: 21, 
    fontSize: 12, 
  },
  profileBtnRedTextStyle: { 
    color: '#FA3830',  
    lineHeight: 21, 
    fontSize: 12, 
    fontWeight: '600'
  },
  noteTextStyle: { 
    alignSelf: 'center',
    lineHeight: 21, 
    fontSize: 10,
    color: '#333333', 
    opacity: 0.3,
    marginTop: 5,
  },
  buttonContainer: { 
    marginTop: 60, 
    width: '100%',
    alignItems: 'center', 
  },
  buttonStyle: { 
    height: 51, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '50%', 
    borderRadius: 25, 
    backgroundColor: '#FA3830' 
  },
  buttonTextStyle: {
    color: '#FFFFFF'
  },
});

export default styles;