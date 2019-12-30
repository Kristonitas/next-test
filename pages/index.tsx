import React from "react";

const Label = props => {
	const { text } = props;
	return <p>{text}</p>;
};

const Index = () => {
	return (
		<div>
			<h1>Hello World</h1>

			<Label text="This is next-test, not cache!" />
		</div>
	);
};

export default Index;
