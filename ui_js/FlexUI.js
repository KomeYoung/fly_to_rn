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
        <Button style={styles.button} title="Press Me" color="#841584" />
        <Button title="Press Me11" color="#841584" />
        <Button title="Press Me22" color="#841584" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000',
    borderLeftWidth: 10,
    borderLeftColor: 'red',

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    borderLeftWidth: 10,
    borderLeftColor: 'red',
  },
});
export default FlexUI;
