import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  emailChanged,
  passwordChanged,
  signupUser,
} from '../redux/auth/authActions';
import {Card, CardSection, Input, Button} from '../components/common';

const Signup = () => {
  const {email, password, loading, user, signupError} = useSelector(
    state => state.auth,
  );
  const dispatch = useDispatch();

  const renderButtons = React.useCallback(
    () => (
      <>
        <View>
          <Button onPress={() => dispatch(signupUser(email.trim(), password))}>
            Signup
          </Button>
        </View>
      </>
    ),
    [],
  );

  const renderErrors = React.useCallback(() => {
    if (signupError) {
      return (
        <View>
          <Text style={styles.errorText}>{signupError}</Text>
        </View>
      );
    }
  }, [signupError]);

  console.log(signupError);
  return (
    <View style={styles.loginContainer}>
      <Card>
        {/* <CardSection>
          <Input
            label="Company Name"
            placeholder="Company Name"
            value={companyName}
            onChangeText={setCompanyName}
          />
        </CardSection> */}
        <CardSection>
          <Input
            label="Email"
            placeholder="Email"
            value={email}
            onChangeText={text => dispatch(emailChanged(text))}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="Password"
            value={password}
            onChangeText={text => dispatch(passwordChanged(text))}
            secureTextEntry
          />
        </CardSection>
        {renderErrors()}
        {renderButtons()}
      </Card>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'red',
  },
});
