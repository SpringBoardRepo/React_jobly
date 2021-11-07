import { useEffect, useState } from "react";
import JoblyApi from "./api"
import CompanyCard from "./CompanyCard";

function CompaniesList() {

    const [cList, setCList] = useState([]);

    useEffect(() => {
        async function getCompanyList() {
            const response = await JoblyApi.getCompaniesList();
            setCList(response.companies);
        }
        getCompanyList();
    }, []);
    return (
        <>
            <CompanyCard cList={cList} />
        </>
    )
}



export default CompaniesList;