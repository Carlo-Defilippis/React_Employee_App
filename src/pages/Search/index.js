import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";

function Search() {

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Any Employee</h1>
        <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
          {error}
        </Alert>
        <SearchForm
        />
        <SearchResults />
      </Container>
    </div>
  );
}

export default Search;
