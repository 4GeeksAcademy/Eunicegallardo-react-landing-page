import React from 'react'

let footerStyle={
    backgroundColor: "#758F9c",
    color: "white"
}
const Footer = () => {
  return (
    <div className='container-fluid p-4 d-flex justify-content-center' style={footerStyle}>
        <p> Copyrigth © Your Website 2023 </p>
    </div>
  )
}

export default Footer