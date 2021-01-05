import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export default function Search({ handleSearch }) {
  return (
    <Form>
      <h1>Find your dream hotel in Bergen</h1>
      <InputGroup className="form-group md-form">
        <div className="search__icon--box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            fill="currentColor"
            className="search__icon bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>

        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          aria-label="Search"
          onChange={(event) => handleSearch(event)}
        />
      </InputGroup>
    </Form>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
