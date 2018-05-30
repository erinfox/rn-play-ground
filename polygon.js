import React from "react";
import { Circle, Polygon, Svg } from "react-native-svg";

type Props = {
  active: boolean,
  color: string,
  secondaryColor: string,
  size: number
};

export default ({
  active = false,
  color = "#000000",
  secondaryColor = "#ffffff",
  size = 30
}: Props) => (
  <Svg viewBox="0 0 30 30" width={size} height={size}>
    <Circle
      stroke={active ? "transparent" : color}
      fill={active ? secondaryColor : "transparent"}
      cx={15}
      cy={15}
      r={8}
    />
    <Polygon
      strokeWidth={2}
      stroke={color}
      fill={color}
      points="13,13 13,17 17,15"
      // points="17.69 15 13.62 17.79 13.62 12.2 17.69 15"
    />
  </Svg>
);
