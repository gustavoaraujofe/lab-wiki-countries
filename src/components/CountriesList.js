import countries from '../countries.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

let selectCountry;
let bgColor;
let color;
let listaFiltrada;
let timer;

function CountriesList() {
  const [newCountries, setNewCountries] = useState(countries);
  const [search, setSearch] = useState('');
  let listCountries = [...newCountries];

  function clickCountry(currentCountry) {
    selectCountry = currentCountry.cca3;
    setNewCountries(listCountries);
  }

  function handleChange(word) {
    setSearch(word);
  }

  if (search) {
    const re = new RegExp(`${search}`, 'gi');
    listaFiltrada = [];
    listCountries.forEach((currentCountry) => {
      if (currentCountry.name.common.match(re) !== null) {
        listaFiltrada.push(currentCountry);
      }
    });
  } else {
    listaFiltrada = listCountries;
  }

  return (
    <div className="list-group">
      <div className="mb-3 mt-1">
        <input
          onChange={(event) => {
            clearTimeout(timer);
            timer = setTimeout(() => handleChange(event.target.value), 700);
          }}
          type="text"
          className="form-control"
          placeholder="Search country"
        />
      </div>
      <ul className="list-unstyled">
        {listaFiltrada.map((currentCountry) => {
          if (selectCountry === currentCountry.cca3) {
            bgColor = '#0D6EFD';
            color = '#fff';
          } else {
            bgColor = '#fff';
            color = '#212529';
          }

          return (
            <li key={currentCountry.name.common}>
              <Link
                style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
                onClick={() => clickCountry(currentCountry)}
                className="list-group-item list-group-item-action"
                to={currentCountry.cca3}
              >
                <ReactCountryFlag
                  className="m-2"
                  countryCode={currentCountry.cca2}
                  svg
                />{' '}
                {currentCountry.name.common}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CountriesList;
