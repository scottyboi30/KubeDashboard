import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Card, CardSection, Input, Button} from '../components/common';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Card>
        <CardSection>
          <Input placeholder="Test" />
        </CardSection>
        <CardSection>
          <Input placeholder="Test" />
        </CardSection>
        <Button>Submit</Button>
      </Card>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
