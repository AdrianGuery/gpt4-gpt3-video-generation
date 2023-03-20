export const findHighlightTokens = (highlight: string) => {
	const highlightTokens = highlight.split(/([\s\.,():{};])/);
	return highlightTokens.filter(token => token !== "");
};

const findSpanText = (
	allSpans: HTMLCollectionOf<Element>,
	spanIndex: number,
	tokenLength: number
) => {
	let spanText = "";
	for (let k = 0; k < tokenLength + 4; k++) {
		spanText += allSpans[spanIndex + k]?.textContent ?? "";
	}
	return spanText;
};

const isSingleTokenHighlight = (highlightTokens: string[]) => {
	return highlightTokens.length === 1;
};

const findSingleTokenHighlightElements = (
	allSpans: HTMLCollectionOf<Element>,
	spanIndex: number,
	highlightTokens: string[]
) => {
	return {
		firstElement: allSpans[spanIndex],
		lastElement: allSpans[spanIndex + highlightTokens.length - 1],
	};
};

const findMultiTokenHighlightElements = (
	allSpans: HTMLCollectionOf<Element>,
	spanIndex: number,
	highlightsToFind: string,
	highlightTokens: string[]
) => {
	const spanText = findSpanText(allSpans, spanIndex, highlightTokens.length);
	let firstElement, lastElement;

	if (spanText.includes(highlightsToFind)) {
		firstElement = allSpans[spanIndex];
		lastElement = allSpans[spanIndex + highlightTokens.length - 1];
		for (let lastIndex = 0; lastIndex < highlightTokens.length; lastIndex++) {
			if (
				allSpans[spanIndex + lastIndex].textContent?.includes(
					highlightTokens[highlightTokens.length - 1]
				)
			) {
				lastElement = allSpans[spanIndex + lastIndex];
			}
		}
	}

	return {firstElement, lastElement};
};

export const findFirstAndLastElements = (
	allSpans: HTMLCollectionOf<Element>,
	highlightTokens: string[],
	highlightsToFind: string
) => {
	let firstElement;
	let lastElement;

	for (let spanIndex = 0; spanIndex < allSpans.length; spanIndex++) {
		for (
			let tokenIndex = 0;
			tokenIndex < highlightTokens.length;
			tokenIndex++
		) {
			const spanTextContent = allSpans[spanIndex].textContent;
			if (
				tokenIndex === 0 &&
				!spanTextContent?.includes(highlightTokens[tokenIndex])
			) {
				break;
			}

			if (isSingleTokenHighlight(highlightTokens)) {
				const elements = findSingleTokenHighlightElements(
					allSpans,
					spanIndex,
					highlightTokens
				);
				firstElement = elements.firstElement;
				lastElement = elements.lastElement;
				break;
			} else {
				const elements = findMultiTokenHighlightElements(
					allSpans,
					spanIndex,
					highlightsToFind,
					highlightTokens
				);
				firstElement = elements.firstElement;
				lastElement = elements.lastElement;
			}
		}
	}

	return {firstElement, lastElement};
};
