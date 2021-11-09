
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import "./JobCard.css";

function JobCard({ jobList }) {

    return (

        <div>
            {jobList.map(job => (
                <Card className="JobCard" key={job.id}>
                    <CardBody>
                        <CardTitle className="CardTitle">{job.title}</CardTitle>
                        <CardText>
                            <b> {job.companyHandle}</b>
                            <p>Salary : {job.salary}</p>
                            <p>Equity : {job.equity}</p>
                        </CardText>
                    </CardBody>
                    <Button className="applyBtn danger" size="lg">Apply</Button>
                </Card>
            ))}

        </div>

    )
}



export default JobCard;