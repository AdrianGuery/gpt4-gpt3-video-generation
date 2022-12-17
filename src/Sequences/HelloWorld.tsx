import {useEffect, useState} from "react";
import {continueRender, delayRender, spring} from "remotion";
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import {Logo} from "../components/Logo";
import {Subtitle} from "../components/Subtitle";
import {Title} from "../components/Title";
import useGetHelloWorld from "../hooks/api/useGetHelloWorld";

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	//API call
	const [handle] = useState(() => delayRender());

	const {
		data: helloWorldFromAPI,
		isLoading,
		isSuccess,
		isError,
	} = useGetHelloWorld();

	useEffect(() => {
		if (isSuccess) {
			continueRender(handle);
		}
	}, [isSuccess]);

	console.log("helloWolrdFromAPI", helloWorldFromAPI);

	// Animate from 0 to 1 after 25 frames
	const logoTranslationProgress = spring({
		frame: frame - 25,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[0, -150]
	);

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: "white"}}>
			<AbsoluteFill style={{opacity}}>
				<AbsoluteFill style={{transform: `translateY(${logoTranslation}px)`}}>
					<Logo />
				</AbsoluteFill>
				{/* Sequences can shift the time for its children! */}
				<Sequence from={35}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				{/* The subtitle will only enter on the 75th frame. */}
				<Sequence from={75}>
					<Subtitle />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
