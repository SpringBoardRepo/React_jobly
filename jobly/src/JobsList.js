
import JobCard from "./JobCard";

function JobsList({ jobList }) {

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


export default JobsList;