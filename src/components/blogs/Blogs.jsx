import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarkIcon}) => {

    const [blogs , setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3"> 
            <h2 className="text-3xl font-semibold">blogs : {blogs.length}</h2>
            {
                blogs.map(blog => <Blog 
                    handleBookmarkIcon={handleBookmarkIcon}
                    key={blog.id} 
                    blog={blog} 
                    ></Blog>)
            }
        </div>
    );
};
 
Blogs.propTypes ={
    handleBookmarkIcon: PropTypes.func.isRequired
}
export default Blogs;