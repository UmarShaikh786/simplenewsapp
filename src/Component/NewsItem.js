import React  from 'react'
import photo from './images/defaultImage.jpg'

const NewsItem=(props)=> {
  
    let {title,description,imageUrl,newsUrl,author,newsdate,source}=props;
    // console.log(title,description,imageUrl,newsUrl,author,newsdate,source);
    return (
        <>
      <div className='mt-3 ms-5'>
        <div className="card border-0 ">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger z-1 "  >
      {source}
  </span>
  <img src={imageUrl?imageUrl:photo} alt="..." width="400rem" height="300rem"/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By :{author?author:"Unknown"}  On {new Date(newsdate).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
      </>
    )
  
}

export default NewsItem
