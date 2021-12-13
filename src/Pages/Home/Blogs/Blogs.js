import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('https://damp-river-92945.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
           <h2 className="text-info mt-5">Our Blogs</h2>
             <div className="service-container">
                 {
                     blogs.map(blog => <Blog
                         key={blog._id}
                         blog={blog}
                     ></Blog>)
                 }
             </div>
        </div>
    );
};

export default Blogs;