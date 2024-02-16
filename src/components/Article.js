import React from 'react';


function Article({ articles }) {
    return (
        <>
            {articles.map((article, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                    <div key={index} className="card mb-5">
                        <img src={article.image} alt={article.title} className="card-image" />
                        <div className="card-body">
                            <h2>{article.title}</h2>
                            <p>{article.body}</p>
                            <button type="button" className="btn btn-outline-success">READ MORE</button>
                            <div className="card-footer mt-3">
                                <small className="text-muted">{article.date} No Comments</small>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Article;


// const Article = ({ articles }) => (
//   <>
//     {articles.map((article, index) => (
//       <div key={index} className="card">
//         <img src={article.image} alt={article.title} className="card-image" />
//         <h2>{article.title}</h2>
//         <p>{article.body}</p>
//         <button>READ MORE</button>
//         <p>{article.date}</p>
//         <p>No Comments</p>
//       </div>
//     ))}
//   </>
// );





// import React from 'react';

// const Article = ({ all, fsd, ds, cs, cr }) => (
//   <>
//     {/* <h1>{`${category} Articles`}</h1> */}
//     {all.map((article, index) => (
//       <div key={index} className="card">
//         <img src={article.image} alt={article.title} className="card-image" />
//         <h2>{article.title}</h2>
//         <p>{article.body}</p>
//         <button>READ MORE</button>
//         <p>{article.date}</p>
//         <p>No Comments</p>
//       </div>
//     ))}
//   </>
// );

// export default Article;
