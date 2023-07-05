import React from 'react'
import PropTypes from "prop-types";

const Jumbotron = (props) => {
  return (
    <div className='jumbotron shadow-none px-5 pt-5 pb-5 bg-light rounded'>
        <h1 className='display-2 fw-semibold'>{props.title}</h1>
        <p className='lead fst-italic'>{props.description}</p>
        <a href={props.buttonURL} className='btn btn-lg' role='button'>{props.buttonLabel}</a>

    </div>
  )
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};


export default Jumbotron