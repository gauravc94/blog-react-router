import React from 'react'
import Article from './Article'


function FullStackDevelopment({ fsd }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <Article articles={ fsd } />
            </div>
        </div>
    )
}

export default FullStackDevelopment