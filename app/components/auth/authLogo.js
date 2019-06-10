import React from "react";
import { View, Image } from "react-native";
import logo from "../../assets/nba.png";
const LogoComponent = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={logo}
        resizeMode={"contain"}
        style={{
          width: 250,
          height: 100
        }}
      />
    </View>
  );
};

export default LogoComponent;
