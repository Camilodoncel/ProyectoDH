import React, { useState } from "react";
import DateRangeComp from "./DateRangeComp.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlassLocation,
} from "@fortawesome/free-solid-svg-icons";
import cities from "./cities.json";
import Select from "react-select";
import {
  SearcherStyled
} from "./SearcherStyled.js";

// const styles = {
//   searcher: {
//     maxWidth: "100%",
//     minWidth: "100%",
//     minHeight: "151px",
//     maxHeight: "151px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     flexWrap: "wrap",
//     // backgroundColor: "#5a61bd",
//     background: "rgb(2,0,36)",
//     background:
//       "linear-gradient(21deg, rgba(2,0,36,1) 0%, rgba(90,97,189,1) 58%, rgba(0,11,85,1) 98%)",
//     color: "white",
//   },

//   form: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     gap: "30px",
//     marginBottom: "20px",
//     position: "absolute",
//     marginTop: "80px",
//   },
//   select: {
//     maxWidth: "422px",
//     minWidth: "422px",
//     minHeight: "40px",
//     maxHeight: "40px",
//     color: "Black",
//     boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.15)",
//     borderRadius: "5px",
//   },
//   icons: {
//     color: "#607D8B",
//   },
//   selectLocation: {
//     display: "flex",
//     flexDirection: "row",
//     gap: "10px",
//     alignItems: "center",
//     boxSizing: "border-box",
//     border: "1px solid #F3F1ED",
//     boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.15)",
//     borderRadius: "0px 0px 0px 0px",
//   },
//   cities: {
//     display: "flex",
//     flexDirection: "column",
//     fontSize: "13px",
//     fontWeight: "bold",
//   },
//   country: {
//     fontWeight: "lighter",
//     fontSize: "11px",
//   },
//   selectLabel: {
//     color: "#607D8B",
//     fontWeight: "normal",
//     fontSize: "14px",
//     fontWeight: "500",
//     marginLeft: "8px",
//   },
//   button: {
//     // backgroundColor:"#efecbb",
//     background: "rgb(34,195,155)",
//     background:
//       "linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,0.6895133053221288) 100%)",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     maxWidth: "206px",
//     minWidth: "206px",
//     maxHeight: "40px",
//     minHeight: "40px",
//     boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.12)",
//   },
// };

function Searcher() {
  const handSelectChange = ({ value }) => {
    console.log(value);
  };

  return (
    <SearcherStyled>
      <section className="searcher" /*style={styles.searcher}*/>
        <h1>Busca ofertas en departamentos, casas y mucho más</h1>
        <form /*style={styles.form}*/>
          <div className="location" /*style={styles.select}*/>
            <Select
              defaultValue={{
                label: (
                  <>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faMagnifyingGlassLocation}
                      /*style={styles.icons}*/
                    />
                    <span className="selectLabel"/*style={styles.selectLabel}*/>¿A dónde vamos? </span>
                  </>
                ),
                value: "default",
              }}
              options={cities.map((city) => ({
                label: (
                  <div className="selectLocation" /*style={styles.selectLocation}*/>
                    <div>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="icon"
                        /*style={styles.icons}*/
                      />
                    </div>
                    <div className="cities" /*style={styles.cities}*/>
                      <span> {city.city} </span>{" "}
                      <span  className="country"/*style={styles.country}*/> {city.country}</span>
                    </div>
                  </div>
                ),
                value: city.city,
              }))}
              onChange={handSelectChange}
            />
          </div>
          <DateRangeComp className="Calendar" />
          <button className="search" /*style={styles.button}*/>Buscar</button>
        </form>
      </section>
    </SearcherStyled>
  );
}

export { Searcher };
