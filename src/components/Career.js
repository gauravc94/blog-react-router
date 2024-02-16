import React from 'react'
import Article from './Article'

function Career({ cr }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <Article articles={ cr } />
            </div>
        </div>
    )
}

export default Career