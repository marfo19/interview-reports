import classes from "./CandidatesFilter.module.scss";

const CandidateFilter = ({ onFilter }) => {
	return (
		<section className={classes.filter}>
			<h2>Candidates</h2>
			<input
				type="text"
				placeholder="Search..."
				onChange={(event) => onFilter(event.target.value)}
			/>
		</section>
	);
};

export default CandidateFilter;
