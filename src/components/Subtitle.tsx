import React from "react";
import {interpolate, useCurrentFrame} from "remotion";
import {COLOR_1, FONT_FAMILY} from "../utils/constants";

const subtitle: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontSize: 30,
	textAlign: "center",
	position: "absolute",
	bottom: 40,
	width: "100%",
	color: COLOR_1,
};

export const Subtitle = ({text}: {text: string}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return <div style={{...subtitle, opacity}}>{text}</div>;
};
