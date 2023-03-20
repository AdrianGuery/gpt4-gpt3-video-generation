export const example = {
	code: "import React, { useState, useEffect } from 'react';\nfunction CountdownTimer() {\n const [seconds, setSeconds] = useState(60);\n\n useEffect(() => {\n const interval = setInterval(() => {\n setSeconds(seconds - 1);\n }, 1000);\n return () => clearInterval(interval);\n }, [seconds]);\n\n return (\n <div>\n {seconds} seconds remaining\n </div>\n );\n}",
	language: "javascript",
	highlightExplanations: [
		{
			highlight: "import React, { useState, useEffect } from 'react';",
			explanation:
				"This imports the required dependencies from the React library.",
		},
		{
			highlight: "const [seconds, setSeconds] = useState(60);",
			explanation:
				"This uses the `useState` hook to initialize the `seconds` state variable with a value of 60 and create a function to update its value, `setSeconds`.",
		},
		{
			highlight: "const interval = setInterval(() => {",
			explanation:
				"This sets up an interval that will run the anonymous function inside every 1000 milliseconds (1 second).",
		},
		{
			highlight: "setSeconds(seconds - 1);",
			explanation:
				"This decreases the value of the `seconds` state variable by 1 every time the interval runs.",
		},
		{
			highlight: "return () => clearInterval(interval);",
			explanation:
				"This is the cleanup function for the `useEffect` hook. It clears the interval when the component unmounts to prevent memory leaks.",
		},
		{
			highlight: "{seconds} seconds remaining",
			explanation:
				"This displays the current value of the `seconds` state variable in the component's render output.",
		},
	],
};

export const example2 = {
	code: "<button id='disappearing-button'>Click me!</button>\n<style>\n#disappearing-button {\n display: block;\n}\n#disappearing-button:active {\n display: none;\n}\n</style>\n<script>\n document.getElementById('disappearing-button').addEventListener('click', function() {\n this.style.display = 'none';\n });\n</script>",
	language: "html",
	highlightExplanations: [
		{
			highlight: "display: block;",
			explanation:
				"This sets the display property of the button to 'block', which makes it visible on the page.",
		},
		{
			highlight: "display: none;",
			explanation:
				"This sets the display property of the button to 'none', which makes it hidden on the page.",
		},
		{
			highlight: "document.getElementById('disappearing-button')",
			explanation:
				"This gets a reference to the button element on the page by its ID.",
		},
		{
			highlight: "addEventListener('click', function()",
			explanation:
				"This sets up a click event listener on the button element, which means that the anonymous function inside will be executed when the button is clicked.",
		},
		{
			highlight: "this.style.display = 'none';",
			explanation:
				"Inside the event listener function, 'this' refers to the element that the event listener is attached to (in this case, the button element). Setting the 'display' property of this element to 'none' makes it hidden on the page.",
		},
	],
};

export const example3 = {
	//code for an animation of button scaling on click
	code: "<button id='scaling-button'>Click me!</button>\n<style>\n#scaling-button {\n width: 100px;\n height: 100px;\n}\n#scaling-button:active {\n transform: scale(0.5);\n}\n</style>\n<script>\n document.getElementById('scaling-button').addEventListener('click', function() {\n this.style.transform = 'scale(0.5)';\n });\n</script>",
	language: "html",
	highlightExplanations: [
		{
			highlight: "width: 100px;",
			explanation: "This sets the width of the button to 100 pixels.",
		},
		{
			highlight: "height: 100px;",
			explanation: "This sets the height of the button to 100 pixels.",
		},
		{
			highlight: "transform: scale(0.5);",
			explanation:
				"This sets the transform property of the button to scale it by 0.5, which makes it half its original size.",
		},
		{
			highlight: "document.getElementById('scaling-button')",
			explanation:
				"This gets a reference to the button element on the page by its ID.",
		},
		{
			highlight: "addEventListener('click', function()",
			explanation:
				"This sets up a click event listener on the button element, which means that the anonymous function inside will be executed when the button is clicked.",
		},
		{
			highlight: "this.style.transform = 'scale(0.5)';",
			explanation:
				"Inside the event listener function, 'this' refers to the element that the event listener is attached to (in this case, the button element). Setting the 'transform' property of this element to 'scale(0.5)' makes it half its original size.",
		},
	],
};

export const example4 = {
	code: `import React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst Portal = () => {\n return ReactDOM.createPortal(\n  <div>\n   <h1>Portal Example</h1>\n   <p>This component is rendered outside the current DOM tree.</p>\n  </div>,\n document.getElementById('portal-root')\n );\n};\n\nconst App = () => {\n return (\n <div>\n  <h1>App</h1>\n  <Portal />\n </div>\n );\n};\n\nReactDOM.render(<App />, document.getElementById('root'));`,
	language: "jsx",
	highlightExplanations: [
		{
			highlight: "import ReactDOM from 'react-dom';",
			explanation: "This imports the ReactDOM library from React.",
		},
		{
			highlight: "ReactDOM.createPortal(",
			explanation:
				"This creates a portal with the contents of the component passed in as an argument.",
		},
		{
			highlight: "document.getElementById('portal-root')",
			explanation: "This is the DOM node that the portal will be attached to.",
		},
		{
			highlight: "<Portal />",
			explanation: "This renders the portal in the App component.",
		},
		{
			highlight: "ReactDOM.render(<App />, document.getElementById('root'));",
			explanation:
				"This renders the App component in the DOM node with the id 'root'.",
		},
	],
};

export const example5 = {
	code: `<style>\n.button {\nbackground-color: #4CAF50; /* Green */\nborder: none;\ncolor: white;\npadding: 15px 32px;\ntext-align: center;\ntext-decoration: none;\ndisplay: inline-block;\nfont-size: 16px;\nmargin: 4px 2px;\ncursor: pointer;\n}\n.button:hover {\nbackground-color: #3e8e41;\n}\n</style>\n<button class="button">Click me!</button>\n`,
	language: "html",
	highlightExplanations: [
		{
			highlight: ".button {",
			explanation:
				"This is the start of the CSS block for styling the button. The '.' before 'button' indicates that this block applies to any element with a class of 'button'.",
		},
		{
			highlight: "background-color: #4CAF50;",
			explanation:
				"This sets the background color of the button to green. The color is specified using a hexadecimal code.",
		},
		{
			highlight: "border: none;",
			explanation: "This removes any border around the button.",
		},
		{
			highlight: "color: white;",
			explanation: "This sets the text color of the button to white.",
		},
		{
			highlight: "padding: 15px 32px;",
			explanation:
				"This sets the padding (space inside the button) to 15 pixels on the top and bottom, and 32 pixels on the left and right.",
		},
		{
			highlight: "text-align: center;",
			explanation: "This centers the text inside the button.",
		},
		{
			highlight: "text-decoration: none;",
			explanation:
				"This removes any underline from the text inside the button.",
		},
		{
			highlight: "display: inline-block;",
			explanation:
				"This makes the button an inline element, so it can be placed inline with other elements.",
		},
		{
			highlight: "font-size: 16px;",
			explanation:
				"This sets the font size of the text inside the button to 16 pixels.",
		},
		{
			highlight: "margin: 4px 2px;",
			explanation:
				"This sets the margin (space outside the button) to 4 pixels on the top and bottom, and 2 pixels on the left and right.",
		},
		{
			highlight: "cursor: pointer;",
			explanation:
				"This changes the cursor to a pointer when the mouse is over the button, to indicate that the button is clickable.",
		},
		{
			highlight: ".button:hover {",
			explanation:
				"This is the start of the CSS block for styling the button when it is hovered over. The ':hover' pseudo-class is used to specify styles for an element when the mouse is over it.",
		},
	],
};
