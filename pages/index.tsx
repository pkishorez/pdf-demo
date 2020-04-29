export default () => {
	return (
		<>
			<Section>
				<h1 className="text-3xl">OYO Guest Card</h1>
			</Section>
			<Section>Another section</Section>
		</>
	);
};

const Section = ({ children }) => {
	return (
		<section className="sheet padding-10mm bg-gray-200">{children}</section>
	);
};
