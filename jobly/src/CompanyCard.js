
import { Card, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./CompanyCard.css"

function CompanyCard({ cList }) {
    return (
        <div>
            {cList.map(c => (
                <Card className="Card" key={c.name}>
                    <Link to={`/companies/${c.handle}`}>
                        {/* <img src={c.logoUrl} className="float-right ml-5" /> */}
                        <CardTitle className="CardTitle">{c.name}</CardTitle>
                        <CardText><small>{c.description}</small></CardText>
                    </Link>
                </Card>
            ))}

        </div>
    )
}

export default CompanyCard;