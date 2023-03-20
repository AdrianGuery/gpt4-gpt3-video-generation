import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Composition} from "remotion";
import {example5 as example} from "./datas/examples";
import {TutorialVideo} from "./Sequences/TutorialVideo";

const queryClient = new QueryClient();

// Each <Composition> is an entry in the sidebar!
export const RemotionVideo: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RemotionCompositions />
		</QueryClientProvider>
	);
};

const RemotionCompositions: React.FC = () => {
	return (
		<>
			<Composition
				id="TutorialVideo"
				component={TutorialVideo}
				durationInFrames={
					example.code.length + example.highlightExplanations.length * 150 + 150
				}
				fps={30}
				width={1080}
				height={example.code.split("\n").length * 30 + 200}
			/>
		</>
	);
};
