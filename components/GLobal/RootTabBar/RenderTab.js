import { TouchableOpacity } from "react-native"
import IconTab from "./IconTab"

const RenderTab = ({ routeName, selectedTab, navigate }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {IconTab(routeName, selectedTab)}
    </TouchableOpacity>
  )
}

export default RenderTab