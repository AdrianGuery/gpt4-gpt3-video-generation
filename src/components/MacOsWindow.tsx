const MacOsWindow = () => {
	return (
		<div
			style={{
				position: "absolute",
				display: "flex",
				flexDirection: "row",
				padding: "10px",
				backgroundColor: "#273138",
				opacity: "0.9",
				width: "100%",
				borderRadius: "7px 7px 0px 0px",
				top: "-10px",
			}}
		>
			<div
				style={{
					backgroundColor: "#FF6057",
					width: "10px",
					height: "10px",
					borderRadius: "50%",
					marginRight: "4px",
				}}
			></div>
			<div
				style={{
					backgroundColor: "#FFBD2E",
					width: "10px",
					height: "10px",
					borderRadius: "50%",
					marginRight: "4px",
				}}
			></div>
			<div
				style={{
					backgroundColor: "#27C93F",
					width: "10px",
					height: "10px",
					borderRadius: "50%",
					marginRight: "4px",
				}}
			></div>
		</div>
	);
};

export default MacOsWindow;
