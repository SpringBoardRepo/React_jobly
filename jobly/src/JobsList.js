import JoblyApi from "./api";
import { useEffect, useState } from "react"

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
            {jList.map(j => j.title)}
        </>
    )
}


export default JobsList;