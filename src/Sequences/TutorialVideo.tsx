import {useEffect, useMemo, useState} from "react";
import {AbsoluteFill, Sequence, useCurrentFrame} from "remotion";
import {Highlight} from "../components/Highlight";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";

import {atomDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import {Subtitle} from "../components/Subtitle";
import {example as exampleData} from "../datas/examples";
import {
	findFirstAndLastElements,
	findHighlightTokens,
} from "../utils/highlightUtils";
import MacOsWindow from "../components/MacOsWindow";

export const TutorialVideo: React.FC = () => {
	const frame = useCurrentFrame();
	const completeCode = exampleData.code;
	const numberLine = completeCode.split("\n").length;

	const [highlightProps, setHighlightProps] = useState<{
		x: number;
		y: number;
		width: number;
	}>();

	const displayedCode = completeCode.slice(0, frame * 2);

	const completedFrame = useMemo(
		() => frame,
		[completeCode.length === displayedCode.length]
	);

	const currentHighlightIndex = useMemo(
		() => Math.round((frame - completedFrame) / 150),
		[Math.round((frame - completedFrame) / 150)]
	);

	useEffect(() => {
		if (
			completedFrame > 0 &&
			currentHighlightIndex >= 0 &&
			currentHighlightIndex < exampleData.highlightExplanations.length
		) {
			const allSpans = document.getElementsByTagName("span");
			const highlightsToFind =
				exampleData.highlightExplanations[currentHighlightIndex].highlight;
			const highlightTokens = findHighlightTokens(highlightsToFind);
			const {firstElement, lastElement} = findFirstAndLastElements(
				allSpans,
				highlightTokens,
				highlightsToFind
			);

			const firstRect = firstElement?.getBoundingClientRect();
			const lastRect = lastElement?.getBoundingClientRect();
			if (firstRect && lastRect) {
				setHighlightProps({
					x: firstRect.x,
					y: firstRect.y,
					width: lastRect.x - firstRect.x + lastRect.width,
				});
			}
		}
	}, [currentHighlightIndex]);

	return (
		<AbsoluteFill
			style={{
				background:
					"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
			}}
		>
			<AbsoluteFill>
				<Sequence from={0}>
					<div style={{position: "absolute", margin: "5%", width: "90%"}}>
						<MacOsWindow />
						<SyntaxHighlighter
							customStyle={{
								width: "100%",
								height: `${numberLine * 33}px`,
								fontSize: "20px",
							}}
							language={exampleData.language}
							style={atomDark}
							wrapLines={true}
							wrapLongLines
						>
							{displayedCode}
						</SyntaxHighlighter>
					</div>
					{currentHighlightIndex >= 0 &&
						currentHighlightIndex < exampleData.highlightExplanations.length &&
						highlightProps && (
							<>
								<Highlight
									x={highlightProps.x}
									y={highlightProps.y}
									width={highlightProps.width}
								/>
								<Subtitle
									text={
										exampleData.highlightExplanations[currentHighlightIndex]
											.explanation
									}
								/>
							</>
						)}
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
