import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Content, List, ListItem, Text} from 'native-base';
import {Actions} from 'react-native-router-flux';

const Menu = () => {
  return (
    <View style={{flex: 1}}>
      <Content>
        <List>
          <ListItem itemHeader first onPress={() => Actions.main()}>
            <Text>Dashboard</Text>
          </ListItem>
          <ListItem onPress={() => Actions.profile()}>
            <Text>Profile</Text>
          </ListItem>
        </List>
      </Content>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
