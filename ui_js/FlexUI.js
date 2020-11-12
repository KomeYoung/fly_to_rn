/**
 * @author lenovo
 * @date 2020-11-12 23:21
 */
import React, {Component} from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';
class FlexUI extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Press Me" color="#841584" />
        <Button title="Press Me" color="#841584" />
        <Button title="Press Me" color="#841584" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default FlexUI;
