import JoblyApi from "./api";
import { useEffect, useState } from "react"
import JobCard from "./JobCard";

function JobsList() {

    const [jList, setJList] = useState([]);

    useEffect(() => {
        async function getJobsList() {
            const response = await JoblyApi.getJobsList();
            console.log(response);
            setJList(response.jobs);

        }
        getJobsList();
    }, []);
    return (
        <>
            <JobCard jobList={jList} />

        </>
    )
}


export default JobsList;