import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {useSelector, useDispatch} from 'react-redux';

import {emailChanged, passwordChanged} from '../redux/auth/authActions';
import {Card, CardSection, Input, Button} from '../components/common';

const Login = () => {
  const {email, password, loading, user, signupError, loginError} = useSelector(
    state => state.auth,
  );
  const dispatch = useDispatch();

  const renderButtons = useCallback(
    () => (
      <>
        <View>
          <Button>Login</Button>
        </View>
        <View>
          <Button onPress={() => Actions.signup()}>Signup</Button>
        </View>
      </>
    ),
    [],
  );
  return (
    <View style={styles.loginContainer}>
      <Card>
        <CardSection>
          <Input
            label="email"
            placeholder="Email"
            value={email}
            onChangeText={text => dispatch(emailChanged(text))}
          />
        </CardSection>
        <CardSection>
          <Input
            label="password"
            placeholder="Password"
            value={password}
            onChangeText={text => dispatch(passwordChanged(text))}
            secureTextEntry
          />
        </CardSection>
        {renderButtons()}
      </Card>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
