import React from 'react';
 
const Footer = () =>{
    var year = new Date().getFullYear();
    return (
        <>
            <footer  >
                <p className="text-center text-capitalize text-muted">copyright to Lokesh garia {year} </p>
            </footer>
        </>
    )
}

export default Footer;