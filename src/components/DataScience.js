import React from 'react'
import Article from './Article'

function DataScience({ ds }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <Article articles={ ds } />
            </div>
        </div>
    )
}

export default DataScience
