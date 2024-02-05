import './Blog.css'
import BlogItem from './BlogItem';
import blog1Img from "../../assets/images/post-1.jpg";
import blog2Img from "../../assets/images/post-2.jpg";
import blog3Img from "../../assets/images/post-3.jpg";

function Blog () {
    let blogs = [
        {
          blogImg: blog1Img,
          blogTitle: "post title 1",
          blogInfo:"(1)Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
          blogAuthor: "Narli Tavahin",
          blogTime: 13,
        },
        {
          blogImg: blog2Img,
          blogTitle: "post title 2",
          blogInfo:"(2)Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
          blogAuthor: "Narli Tavahin",
          blogTime: 20,
        },
        {
          blogImg: blog3Img,
          blogTitle: "post title 3",
          blogInfo:"(3)Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
          blogAuthor: "Narli Tavahin",
          blogTime: 25,
        },
      ];
    return(
        <section id="blog">
        <div className="container">
          <div className="section-info">
            <h2 className="section-title">BLOG</h2>
            <p className="section-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="row">
            <BlogItem {...blogs[0]} />
            <BlogItem {...blogs[1]} />
            <BlogItem {...blogs[2]} />
          </div>
        </div>
      </section>
    )
}

export default Blog;