import {useEffect, useState} from "react";
import css from "./Highlight.module.scss";

export const Highlight = ({
	x,
	y,
	large,
}: {
	x: number;
	y: number;
	large: number;
}) => {
	return (
		<div
			className={css.root}
			style={{
				left: `${x - 10}px`,
				top: `${y - 10}px`,
				width: `${large + 20}px`,
			}}
		></div>
	);
};
