import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  ActivityIndicator
} from "react-native";

import Logo from "./authLogo";
import AuthForm from "./authForm";

class AuthComponent extends Component {
  state = {
    loading: false
  };

  goNext = () => {
    this.props.navigation.navigate("App");
  };
  render() {
    if (this.state.loading) return <ActivityIndicator style={styles.loading} />;
    else {
      return (
        <ScrollView style={styles.container}>
          <Logo />
          <AuthForm goNext={this.goNext} />
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c3179",
    padding: 50
  },
  loading: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AuthComponent;
