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

import { connect } from "react-redux";
import { autoSignIn } from "../../store/actions/user_actions";
import { bindActionCreators } from "redux";

import { getTokens, setTokens } from "../../utils/misc";

class AuthComponent extends Component {
  state = {
    loading: true
  };

  goNext = () => {
    this.props.navigation.navigate("App");
  };

  componentDidMount() {
    getTokens(values => {
      if (values[0][1] === null) {
        this.setState({ loading: false });
      } else {
        this.props.autoSignIn(values[1][1]).then(() => {
          if (!this.props.User.auth.token) {
            this.setState({ loading: false });
          } else {
            setTokens(this.props.User.auth, () => {
              this.goNext();
            });
          }
        });
      }
    });
  }

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

function mapStateToProps(state) {
  return {
    User: state.User
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ autoSignIn }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthComponent);
