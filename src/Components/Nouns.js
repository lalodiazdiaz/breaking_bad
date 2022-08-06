import React, { useState, useEffect } from "react";
import Person from "./Person";
import "./components.css";

const Nouns = () => {
  const [info, setInfo] = useState();
  const [loading, setloading] = useState(false);
  const [value, setValue] = useState("");

  /**Llamada a la api con fetch */
  const getNouns = async () => {
    var url = "https://www.breakingbadapi.com/api/characters";
    const resp = await fetch(url);
    const data = await resp.json(); //conversion a json
    console.log(data);
    setInfo(data);
    setloading(true);
  };
  /**Capturar input  */
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  /**filtrar resultado de busqueda */
  const filterNames = info.filter((person) => {
    return person.name.toLowerCase().includes(value.toLowerCase());
  });

  /**Llamar el metodo al inicar */
  useEffect(async () => {
    var url = "https://www.breakingbadapi.com/api/characters";
    const resp = await fetch(url);
    const data = await resp.json(); //conversion a json
    console.log(data);
    setInfo(data);
    setloading(true);
  }, []);

  return (
    <main>
      <input
        type="text"
        placeholder="Search"
        className="form-control"
        onChange={handleChange}
        value={value}
      />
      {loading ? (
        <ul>
          {filterNames.map((noun, i) => (
            <Person key={i} {...noun} />
          ))}
        </ul>
      ) : (
        <h2>Loading</h2>
      )}
    </main>
  );
};

export default Nouns;
