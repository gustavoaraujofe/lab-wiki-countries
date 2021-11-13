import countries from '../countries.json';
import { useParams, Link } from 'react-router-dom';

function CountryDetails() {
  const country = useParams();

  //Encontra país de acordo com o URL
  const foundCountry = countries.find((currentCountry) => {
    return currentCountry.cca3 === country.country;
  });

  //Encontra País pelo cca3
  function cca3ToName(cca3) {
    return countries.find((currentCountry) => {
      return currentCountry.cca3 === cca3;
    });
  }

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>
              <ul className="list-unstyled">
                {foundCountry.capital.map((currentCountry) => (
                  <li key={currentCountry}>{currentCountry}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((currentBorder) => {
                  return (
                    <li key={currentBorder}>
                      <Link to={`/${currentBorder}`}>
                        {cca3ToName(currentBorder).name.common}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
