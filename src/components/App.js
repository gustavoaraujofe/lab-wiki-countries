import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <CountriesList />
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/" element="" />
              <Route path=":country" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
