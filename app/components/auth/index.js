import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  ActivityIndicator
} from "react-native";

class AuthComponent extends Component {
  render() {
    return (
      <View>
        <Text>Hello from Auth side</Text>
        <Button
          title="go"
          onPress={() => this.props.navigation.navigate("App")}
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
// });

export default AuthComponent;
