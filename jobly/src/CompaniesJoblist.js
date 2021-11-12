import JobCard from "./JobCard";

function CompainesJoblist({ jobList }) {

    return (

        <>
            {jobList.map(job => (
                <JobCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    companyHandle={job.companyHandle}

                />
            ))}
        </>
    )
}

export default CompainesJoblist;