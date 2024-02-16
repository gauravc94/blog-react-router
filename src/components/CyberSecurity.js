import React from 'react'
import Article from './Article'

function CyberSecurity({ cs }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <Article articles={ cs } />
            </div>
        </div>
    )
}

export default CyberSecurity