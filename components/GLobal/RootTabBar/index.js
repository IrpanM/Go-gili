import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import {
  Alert,
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native"
import { CurvedBottomBar } from "react-native-curved-bottom-bar"
import Ionicons from "react-native-vector-icons/Ionicons"
import Home from "../../../screens/Root/Home"
import Profile from "../../../screens/Root/Profile/Profile"
import Wishlist from "../../../screens/Root/Wishlist"
import RenderTab from "./RenderTab"

export const RootTabBar = () => {

  return (
    <View style={{ flex: 1 }}>
      <CurvedBottomBar.Navigator
        style={styles.bottomBar}
        strokeWidth={0.5}
        strokeColor="#DDDDDD"
        height={55}
        circleWidth={55}
        bgColor="white"
        initialRouteName="Home"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <LinearGradient
            colors={['#004AAD', '#47B5FF']}
            end={{ x: 0.9, y: 0.3 }}
            style={styles.btnCircle}
          >
            <Animated.View >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center"
                }}
                onPress={() => Alert.alert("Click Action")}
              >
                <Image
                  style={{ width: 34, height: 34 }}
                  source={require('../../../assets/static/icons/scan.png')}
                />
              </TouchableOpacity>
            </Animated.View>
          </LinearGradient>
        )}
        tabBar={RenderTab}
      >
        <CurvedBottomBar.Screen
          name="Home"
          position="LEFT"
          component={Home}
          options={{ headerShown: false }}
        />
        <CurvedBottomBar.Screen
          name="Transaksi"
          component={Wishlist}
          position="LEFT"
        />
        <CurvedBottomBar.Screen
          name="Wishlist"
          component={Wishlist}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          name="Profile"
          component={Profile}
          position="RIGHT"
          options={{ headerShown: false }}
        />
      </CurvedBottomBar.Navigator>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  button: {
    marginVertical: 5
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    padding: 10,
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    // elevation: 1,
    bottom: 30
  },
  imgCircle: {
    width: 30,
    height: 30,
    // tintColor: "gray"
  },
  img: {
    width: 30,
    height: 30
  }
})
