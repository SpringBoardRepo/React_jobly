import JoblyApi from "./api";
import { useEffect, useState } from "react"
import JobCard from "./JobCard";

function JobsList() {

    const [jList, setJList] = useState([]);

    useEffect(() => {
        async function getJobsList() {
            const response = await JoblyApi.getJobsList();
            setJList(response.jobs);

        }
        getJobsList();
    }, []);
    return (
        <>
            {jList.map(job => (
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