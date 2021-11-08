import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCard from "./JobCard";


function CompaniesDetail() {

    const { handle } = useParams();
    const [company, setCompany] = useState([]);

    useEffect(() => {
        async function searchCompanyByHandle() {
            const result = await JoblyApi.getCompany(handle);
            console.log(result);
            setCompany(result);
        }
        searchCompanyByHandle();
    }, [handle]);

    if (!company) return 'Loading';
    return (
        <>
            <div className="CompanyDetail col-md-8 offset-md-2">
                <h4>{company.name}</h4>
                <p>{company.description}</p>
                <JobCard jobList={company.jobs} />
            </div>
        </>
    )
}

export default CompaniesDetail;