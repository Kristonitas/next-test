type Props = {
	text: string;
};

const Label = (props: Props) => {
	const { text } = props;
	return <p>{text}</p>;
};

export default Label;
