import { country } from "../../data/country";
// import "./Country.css";
import "./Country.scss";

function Country() {
    console.log(country);

    return (
        <>
            <ul className="country">
                {(country || []).map(itemCountry => (
                    <li className="country_item" key={itemCountry.id}>
                        <span className="country_text">{itemCountry.name}</span>
                        <ul className="country_sub">
                            {(itemCountry.city || []).map(itemCity => (
                                <li className="country_sub_item" key={itemCity.id}>{itemCity.name}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Country;