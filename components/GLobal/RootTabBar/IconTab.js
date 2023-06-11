import { FontAwesome5, Ionicons } from "@expo/vector-icons"

const IconTab = (routeName, selectedTab) => {
  let icon = ""

  switch (routeName) {
    case "Home":
      icon = "ios-home-outline"
      return (
        <Ionicons
          name={icon}
          size={25}
          color={routeName === selectedTab ? "#004AAD" : "gray"}
        />
      )

    case "Profile":
      icon = "user-circle"
      return (
        <FontAwesome5
          name={icon}
          size={25}
          color={routeName === selectedTab ? "#004AAD" : "gray"}
        />
      )

    case "Wishlist":
      icon = "heart"
      return (
        <FontAwesome5
          name={icon}
          size={25}
          color={routeName === selectedTab ? "#004AAD" : "gray"}
        />
      )
    case "Transaksi":
      icon = "receipt-outline"
      return (
        <Ionicons
          name={icon}
          size={25}
          color={routeName === selectedTab ? "#004AAD" : "gray"}
        />
      )
  }


}

export default IconTab