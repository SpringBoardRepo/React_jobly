import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import "./CompanyDetail.css";

function CompaniesDetail() {

    const { handle } = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function searchCompanyByHandle() {
            const result = await JoblyApi.getCompany(handle);
            setCompany(result);
        }
        searchCompanyByHandle();
    }, [handle]);

    if (!company) return 'Loading';
    return (
        <>
            <div className="CompanyDetail col-md-8 offset-md-2">
                <h4>{company.name}</h4>
                <p className="description">{company.description}</p>
                <JobCard jobList={company.jobs} />
            </div>
        </>
    )
}

export default CompaniesDetail;