import React, { useState, useEffect } from "react";
import { Form, FormControl, ListGroup } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
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
      style={{
        width: "30%",
        margin: " 0 auto",
        borderRadius: "30%",
      }}
    >
      <FormControl
        type='text'
        placeholder='Recherche'
        value={value}
        onChange={handleChange}
      />
      {options.length > 0 && (
        <ListGroup
          style={{
            position: "absolute",
            zIndex: "100",
            width: "50%",
            maxHeight: "200px",
            overflowY: "auto",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
          }}
        >
          {options.map((option) => (
            <ListGroup.Item
              key={option.id}
              style={{
                cursor: "pointer",
                borderBottom: "1px solid #ccc",
                textDecoration: "none",
                listStyleType: "none",
                width: "100%",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
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
