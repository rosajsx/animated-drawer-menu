import { StyleSheet, View, Text } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { DrawerSceneWrapper } from "../components/drawer-scene-wrapper";

export default function Notification() {
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.username}>Notificações</Text>

          <DrawerToggleButton />
        </View>
      </View>
    </DrawerSceneWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  username: {
    fontSize: 16,
    fontWeight: "700",
    flex: 1,
  },
});
