import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/reducers/AuthReducer';
 
import styles from './style';
import { MyButton, MyInput, PasswordInput } from '../../components/common';
import { COLORS } from '../../assets';
 
 

const LoginScreen = () => {
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {userData, isLoading} = useSelector(state => state.Auth);

  const LoginFunction = async () => {
    const obj = {
      username: userName,
      password: password,
    };
     
    await dispatch(loginUser(obj));
    console.log("userData:", userData);
  };

  return (
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Welcome Back</Text>
          <Text style={styles.HText}>Login to your account</Text>
        </View>
        <View style={styles.inputContainer} >
 
        <MyInput
          value={userName}
          placeholder="Email / Username"
          keyboardType={'email-address'}
          onChangeText={text => setName(text)}
        />
        </View>
        {/* <MyInput
       
        /> */}
        <PasswordInput 
           value={password}
           placeholder="Password"
           secureTextEntry={true}
           onChangeText={text => setPassword(text)}
        />
        <View style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot Password ?</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator  size={'large'} />
        ) : (
          <MyButton
            textColor={COLORS.black}
            bgColor={COLORS.lightGreen}
            Label="Login"
            press={LoginFunction}
          />
        )}

        <View style={styles.linkContainer}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: COLORS.grey1}}>
            Don't have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.linkText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
  
  );
};

export default LoginScreen;


