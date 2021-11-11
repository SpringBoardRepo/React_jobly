
import { useContext, useEffect, useState } from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import "./JobCard.css";
import UserContext from './UserContext';

function JobCard({ id, title, salary, equity, companyHandle }) {

    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();

    useEffect(function updateApplyStatus() {

        setApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]);

    async function handleApply(evt) {
        if (hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
    }

    return (
        <div>

            <Card className="JobCard" key={id} id={id}>
                <CardBody>
                    <CardTitle className="CardTitle">{title}</CardTitle>
                    <CardText>
                        <b> {companyHandle}</b>
                        <p>Salary : {salary}</p>
                        <p>Equity : {equity}</p>
                    </CardText>
                </CardBody>
                <Button className="applyBtn danger" size="lg" onClick={handleApply} disabled={applied}>
                    {applied ? "Applied" : "Apply"}</Button>
            </Card>

        </div>

    )
}



export default JobCard;