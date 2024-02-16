import React from 'react'
import Article from './Article'

function All({ all }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <Article articles={ all } />
            </div>
        </div>
    )
}

export default All
