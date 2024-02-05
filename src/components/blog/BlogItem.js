
function BlogItem({blogImg,blogTitle,blogInfo,blogAuthor,blogTime}) {
    return (
      <div className="col-4">
        <div className="blog-box">
          <div className="blog-img">
            <img src={blogImg} className="img-fluid" />
          </div>
          <div className="blog-content">
            <h3 className="blog-title">{blogTitle}</h3>
            <p className="blog-desc">{blogInfo}</p>
          </div>
          <div className="blog-footer">
            <div className="post-author">
              <p className="author">{blogAuthor}</p>
            </div>
            <div className="post-date">
              <span className="bi bi-clock"></span> {blogTime} min
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default BlogItem;
  