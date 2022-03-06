import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import * as authorActions from "../../redux/actions/authorActions";
import { connect } from "react-redux";

import PropTypes from "prop-types";

const AuthorList = ({ authors, loadAuthors, ...props }) => {
  useEffect(() => {
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("error Message is " + error);
      });
    }
  }, [authors]);

  return (
    <>
      <h3>Author List Appears Here</h3>
      <table className="table">
        <thead>
          <tr>
            <th>link</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <AuthorRow author={author} key={author.id}></AuthorRow>
          ))}
        </tbody>
      </table>
    </>
  );
};

function mapStateToProps(state) {
  return {
    authors: state.authors,
  };
}

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

const mapDispatchToPorps = {
  loadAuthors: authorActions.loadAuthors,
};

const AuthorRow = ({ author }) => {
  return (
    <tr>
      <td>
        <Link to={"/author/" + author.id}>{author.id}</Link>
      </td>

      <td>{author.name}</td>
    </tr>
  );
};

export default connect(mapStateToProps, mapDispatchToPorps)(AuthorList);
