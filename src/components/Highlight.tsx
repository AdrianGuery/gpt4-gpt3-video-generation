import {useEffect, useState} from "react";
import css from "./Highlight.module.scss";

export const Highlight = ({
	x,
	y,
	width,
}: {
	x: number;
	y: number;
	width: number;
}) => {
	return (
		<div
			className={css.root}
			style={{
				left: `${x - 10}px`,
				top: `${y - 10}px`,
				width: `${width + 20}px`,
			}}
		></div>
	);
};
