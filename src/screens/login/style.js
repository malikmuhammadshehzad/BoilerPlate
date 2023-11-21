import {COLORS} from '../../assets';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:12
  },
  textContainer: {
    marginBottom: 27,
  },
  heading: {
    fontSize: 40,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  HText: {
    color: COLORS.grey1,
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer:{
    marginBottom:20
  },
  forgotContainer: {
    alignItems: 'flex-end',
    width: '78%',
    marginBottom: 79,
  },
  forgotText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 12,
  },

  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:20
  },
  linkText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 7,
  },
});

export default styles;
