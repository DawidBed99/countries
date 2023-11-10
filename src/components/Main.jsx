import "./Main.css";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
const Main = (props) => {
  const navigate = useNavigate();

  const setMode = props.setMode;
  const mode = props.mode;

  const [items, setItems] = useState([]);
  async function getData() {
    await axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      setItems(res.data);
    });
  }

  const [arrowUp, setArrowUp] = useState("block");
  const [arrowDown, setArrowDown] = useState("none");
  const [textField, setTextField] = useState("Filter by Region");
  const [country, setCountry] = useState("");

  const handleSearch = () => {
    setDisp("Search");
  };
  useEffect(() => {
    getData();
  }, []);
  const [disp, setDisp] = useState("All");

  const FILTER_MAP = {
    All: () => true,
    Africa: (item) => item.region === "Africa",
    Americas: (item) => item.region === "Americas",
    Asia: (item) => item.region === "Asia",
    Europe: (item) => item.region === "Europe",
    Oceania: (item) => item.region === "Oceania",
    Search: (item) =>
      item.name.common.toLowerCase().includes(country.toLowerCase()),
  };

  const list = items.filter(FILTER_MAP[disp]).map((item) => {
    return (
      <div
        className="singleCountry"
        key={item.cca2}
        style={{
          background: mode === "light" ? "white" : "hsl(209, 23%, 22%)",
          color: mode === "light" ? "black" : "white",

          boxShadow:
            mode === "light"
              ? "0px 0px 4px 0px hsl(0, 0%, 58%)"
              : "0px 0px 4px 0px black",
        }}
      >
        <img
          alt=""
          onClick={() => navigate(`/countries/${item.cca2}`)}
          className="flag"
          src={item.flags.png}
          style={{
            boxShadow:
              mode === "light"
                ? "0px 0px 4px 0px hsl(0, 0%, 58%)"
                : "0px 0px 4px 0px black",
          }}
        ></img>
        <div className="infoContainer">
          <h2 className="countryName"> {item.name.common}</h2>
          <h3 className="countryInfo">
            <strong>Population:</strong>{" "}
            {item.population.toLocaleString("en-US")}
          </h3>
          <h3 className="countryInfo">
            <strong>Region:</strong> {item.region}
          </h3>
          <h3 className="countryInfo">
            <strong>Capital:</strong> {item.capital}
          </h3>
        </div>
      </div>
    );
  });

  return (
    <Box className="mainContainer">
      <Navbar setMode={setMode} mode={mode} />
      <div className="container">
        <div className="filters">
          <div className="formSearch">
            <SearchIcon
              className="searchIcon"
              onClick={(e) => {
                handleSearch();
              }}
              sx={{ color: mode === "light" ? "hsl(200, 15%, 8%)" : "white" }}
            />
            <input
              className="search"
              placeholder="Search for a country..."
              onChange={(e) => {
                setCountry(e.target.value);
                handleSearch();
              }}
              style={{
                background: mode === "light" ? "white" : "hsl(209, 23%, 22%)",
                color: mode === "light" ? "black" : "white",

                boxShadow:
                  mode === "light"
                    ? "0px 0px 4px 0px hsl(0, 0%, 58%)"
                    : "0px 0px 4px 0px black",
              }}
            ></input>
          </div>
          <div className="selectContainer">
            <span
              className="arrowDown"
              style={{
                display: arrowDown,
                background: mode === "light" ? "hsl(200, 15%, 8%)" : "white",
              }}
            ></span>
            <span
              className="arrowDown2"
              style={{
                display: arrowDown,
                background: mode === "light" ? "hsl(200, 15%, 8%)" : "white",
              }}
            ></span>
            <span
              className="arrowUp"
              style={{
                display: arrowUp,
                background: mode === "light" ? "hsl(200, 15%, 8%)" : "white",
              }}
            />
            <span
              className="arrowUp2"
              style={{
                display: arrowUp,
                background: mode === "light" ? "hsl(200, 15%, 8%)" : "white",
              }}
            />
            <div
              className="regions"
              id="regions"
              onClick={() => {
                arrowDown === "block"
                  ? setArrowDown("none")
                  : setArrowDown("block");

                arrowUp === "none" ? setArrowUp("block") : setArrowUp("none");
              }}
              style={{
                color: mode === "light" ? "hsl(200, 15%, 8%)" : "white",
                background: mode === "light" ? "white" : "hsl(209, 23%, 22%)",
                boxShadow:
                  mode === "light"
                    ? "0px 0px 4px 0px hsl(0, 0%, 58%)"
                    : "0px 0px 4px 0px black",
              }}
            >
              {textField}
              <div
                className="optionsContainer"
                style={{
                  display: arrowDown,
                  color: mode === "light" ? "hsl(200, 15%, 8%)" : "white",
                  background: mode === "light" ? "white" : "hsl(209, 23%, 22%)",
                  boxShadow:
                    mode === "light"
                      ? "0px 0px 4px 0px hsl(0, 0%, 58%)"
                      : "0px 0px 4px 0px black",
                }}
              >
                <div
                  onClick={(e) => {
                    setTextField(e.target.innerHTML);
                    setDisp("All");
                  }}
                  className="option"
                >
                  All
                </div>
                <div
                  onClick={(e) => {
                    setTextField(e.target.innerHTML);
                    setDisp("Africa");
                  }}
                  className="option"
                >
                  Africa
                </div>
                <div
                  onClick={(e) => {
                    setTextField(e.target.innerHTML);
                    setDisp("Americas");
                  }}
                  className="option"
                >
                  Americas
                </div>
                <div
                  onClick={(e) => {
                    setTextField(e.target.innerHTML);
                    setDisp("Asia");
                  }}
                  className="option"
                >
                  Asia
                </div>
                <div
                  onClick={(e) => {
                    setTextField(e.target.innerHTML);
                    setDisp("Europe");
                  }}
                  className="option"
                >
                  Europe
                </div>
                <div
                  onClick={(e) => {
                    setTextField(e.target.innerHTML);
                    setDisp("Oceania");
                  }}
                  className="option"
                >
                  Oceania
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="countriesContainer">{list}</div>
      </div>
    </Box>
  );
};

export default Main;
