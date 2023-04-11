import React, { useState, useEffect } from "react";
import { Form, FormControl, ListGroup } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Flow 1.css";
function SearchBar() {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!value) {
      setOptions([]);
    }
  }, [value]);

  async function handleChange(event) {
    const searchValue = event.target.value;
    setValue(searchValue);
    if (searchValue) {
      const response = await axios.get("http://localhost:5000/search-product", {
        params: {
          searchValue,
        },
      });
      setOptions(response.data);
    } else {
      setOptions([]);
    }
  }

  function handleLinkClick() {
    setOptions([]);
  }

  useEffect(() => {
    return () => {
      setOptions([]);
    };
  }, []);

  return (
    <Form
      className='search-bar-form'
      style={{
        width: "50%",
        height: "50%",
        margin: " 0 auto",
        borderRadius: "30px",
        marginTop: "25px",
        border: "none",
      }}
    >
      <FormControl
        type='text'
        placeholder='Recherche'
        value={value}
        onChange={handleChange}
      />
      {options.length > 0 && (
        <ListGroup>
          {options.map((option) => (
            <ListGroup.Item className='search-item' key={option.id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/Product/${option.id}`}
                onClick={handleLinkClick}
              >
                {option.title}
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Form>
  );
}

export default SearchBar;
