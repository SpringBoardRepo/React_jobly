
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./CompanyCard.css"

function CompanyCard({ cList }) {
    // const [companyHandle, setCompanyHandle] = useState([]);

    // useEffect(() => {

    //     async function getCompanyByHandle() {

    //         const let = await JoblyApi.getCompany();
    //      }

    //     getCompanyByHandle();
    // })
    return (
        <div>
            {cList.map(c => (
                <Card className="Card" key={c.name}>
                    <Link to="/">
                        {/* <img src={c.logoUrl} className="float-right ml-5" /> */}
                        <CardTitle className="CardTitle">{c.name}</CardTitle>
                        <CardText>{c.description}</CardText>
                    </Link>
                </Card>
            ))}

        </div>
    )
}

export default CompanyCard;