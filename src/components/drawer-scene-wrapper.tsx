import { PropsWithChildren } from "react";
import { useDrawerProgress, useDrawerStatus } from "@react-navigation/drawer";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Text } from "react-native";

export function DrawerSceneWrapper({ children }: PropsWithChildren) {
  const progress = useDrawerProgress();
  const drawerStatus = useDrawerStatus();

  const animatedStyled = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          progress.value, //! Valor
          [0, 1], //! Range -> Nesse caso pode ser 0 para fechado e 1 para aberto
          [1, 0.8], //! outputRange -> o valor do scale quando aberto ou fechado
          Extrapolation.CLAMP //!extrapolate -> Determina o que vai acontecer se o valor estrapolar os limites que estabelecemos. Nesse caso, a ideia é que ele respeite.
        ),
      },
      {
        translateX: interpolate(
          progress.value,
          [0, 1],
          [0, 200],
          Extrapolation.CLAMP
        ),
      },
      {
        rotateY:
          interpolate(progress.value, [0, 1], [0, -25], Extrapolation.CLAMP) +
          "deg",
      },
    ],
    borderRadius: drawerStatus === "open" ? 20 : 0,
    overflow: "hidden",
  }));
  return (
    <Animated.View style={[{ flex: 1 }, animatedStyled]}>
      {children}
    </Animated.View>
  );
}
