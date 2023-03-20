// This is your entry file! Refer to it when you render:
// npx remotion render <entry-file> TutorialVideo out/video.mp4

import {registerRoot} from "remotion";
import {RemotionVideo} from "./Video";

registerRoot(RemotionVideo);
