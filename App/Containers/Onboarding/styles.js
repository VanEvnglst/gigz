import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#2C2C2C'
},
headerContainer: { 
  flex: 1, 
  justifyContent: 'center', 
  alignItems: 'center' 
},
imageContainer: { 
  marginTop: 100, 
  marginBottom: 30, 
  width: 270,
  height: 270,
  borderRadius: 270/2,
  backgroundColor: '#4A484884', 
  alignItems: 'center', 
  justifyContent: 'center'
},
image: { 
  width: 245, 
  height: 245, 
  borderRadius: 245/2 
},
contentContainer: { 
  flex: 1, 
  width: '100%', 
  alignItems: 'center' 
},
headerTextStyle: { 
  fontSize: 20, 
  fontWeight: 'bold', 
  color: '#FFFFFF' 
},
subTextStyle: { 
  marginTop: 15, 
  fontSize: 14, 
  color: '#FFFFFF', 
  opacity: 0.5, 
  textAlign: 'center', 
  width: '80%', 
  lineHeight: 21
}

});

export default styles;