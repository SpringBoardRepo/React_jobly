import { useEffect, useState } from 'react';
import JoblyApi from './api';
import "./Companies.css";
import JobsList from './JobsList';
import SearchForm from './SearchForm';
function Jobs() {

    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        searchJobByName();
    }, []);

    async function searchJobByName(title) {
        const response = await JoblyApi.getJobsList(title);
        setJobList(response.jobs);
    }

    return (
        <>
            <SearchForm search={searchJobByName} />
            {jobList.length ?
                <JobsList jobList={jobList} /> :
                <p>No Result Found</p>}
        </>
    )
}




export default Jobs;