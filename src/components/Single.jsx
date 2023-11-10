import "./Single.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ArrowIcon from "@mui/icons-material/ArrowBack";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Single = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const setMode = props.setMode;
  const mode = props.mode;
  const [item, setItem] = useState([]);
  const [borderCountries, setBorders] = useState([]);

  async function getData() {
    await axios
      .get(`https://restcountries.com/v3.1/alpha/${params.code}`)
      .then((res) => {
        setItem(res.data);
        getDataCode(res.data[0].borders.join(","));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function getDataCode(code) {
    await axios
      .get(`https://restcountries.com/v3.1/alpha?codes=${code}`)
      .then((res) => {
        setBorders(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const buttonList = borderCountries.map((item) => {
    return (
      <button
        onClick={() => {
          navigate(`/countries/${item.cca2}`);
          window.location.reload();
        }}
        className="borderBTN"
        style={{
          background: mode === "light" ? "white" : "hsl(209, 23%, 22%)",
          color: mode === "light" ? "black" : "white",

          boxShadow:
            mode === "light"
              ? "0px 0px 4px 0px hsl(0, 0%, 58%)"
              : "0px 0px 4px 0px black",
        }}
        key={item.name.common}
      >
        {item.name.common}
      </button>
    );
  });

  const list = item.map((item) => {
    item.name.nativeName ? console.log("jest") : console.log("nie ma");
    return (
      <div key={item.name.common} className="singleCountryContainer">
        <img
          alt=""
          className="flagImg"
          src={item.flags.png}
          style={{
            boxShadow:
              mode === "light"
                ? "0px 0px 4px 0px hsl(0, 0%, 58%)"
                : "0px 0px 4px 0px black",
          }}
        ></img>
        <div className="rightContainer">
          <div className="moreDetailsContainer">
            <div
              className="moreDetailsContainerLeft"
              style={{
                color: mode === "light" ? "black" : "white",
              }}
            >
              <h2 className="detailsCountryName">{item.name.common}</h2>

              <p>
                <strong>Native name: </strong>
                {item.name.nativeName
                  ? item.name.nativeName[Object.keys(item.name.nativeName)[0]]
                      .common
                  : ""}
              </p>
              <p>
                <strong>Population: </strong>
                {item.population.toLocaleString("en-US")}
              </p>
              <p>
                <strong>Region: </strong>
                {item.region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {item.subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {item.capital}
              </p>
            </div>
            <div
              className="moreDetailsContainerRight"
              style={{
                color: mode === "light" ? "black" : "white",
              }}
            >
              <p>
                <strong>Top Level Domain: </strong>
                {item.tld}
              </p>
              <p>
                <strong>Currencies: </strong>
                {item.currencies
                  ? item.currencies[Object.keys(item.currencies)[0]].name
                  : ""}
              </p>
              <div style={{ display: "flex", gap: "2px" }}>
                <strong>Languages:</strong>

                {item.languages
                  ? Object.values(item.languages).map((item) => {
                      return <p key={item}>{item}</p>;
                    })
                  : ""}
              </div>
            </div>
          </div>
          <div
            className="borderContainer"
            style={{
              color: mode === "light" ? "black" : "white",
            }}
          >
            <p>
              <strong>Border Countries: </strong>
            </p>
            <div className="borderBTNContainer">{buttonList}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="singleContainer">
      <Navbar setMode={setMode} mode={mode} />
      <div className="singleLowerContainer">
        <button
          onClick={() => navigate("/countries")}
          className="backBTN"
          style={{
            background: mode === "light" ? "white" : "hsl(209, 23%, 22%)",
            color: mode === "light" ? "black" : "white",

            boxShadow:
              mode === "light"
                ? "0px 0px 4px 0px hsl(0, 0%, 58%)"
                : "0px 0px 4px 0px black",
          }}
        >
          <ArrowIcon /> Back
        </button>
        {list}
      </div>
    </div>
  );
};

export default Single;
