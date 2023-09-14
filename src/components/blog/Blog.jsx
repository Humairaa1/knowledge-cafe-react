import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog , handleBookmarkIcon}) => {
    
    const {title , cover, author_img , author_name ,date ,time ,hashtag} = blog; 

    return (
        <div className='mb-10'>

            <img className='w-full rounded-lg mb-5' src={cover} alt="" />

            <div className='flex justify-between'>
            <div className='flex'>
            <img className='w-20 h-20 rounded-[40px] mr-5' src={author_img} alt="" />
            <div>
                <h5 className='text-xl font-semibold'>{author_name}</h5>
                <p>{date}</p>
            </div>
            </div>

            <div>
                <span>{time} min read </span>

                <button onClick={()=>handleBookmarkIcon(blog)}
                className='ml-3 text-2xl text-purple-600'> 
                <FaBookmark></FaBookmark> </button>
            </div>
            </div>

            <h1 className='text-2xl font-semibold'>{title}</h1>

            <p>
            {
                hashtag.map((hash ,idx) => <span key={idx}>
                     <a href=""> {hash} </a>
                      </span> )
            }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarkIcon: PropTypes.func.isRequired
}

export default Blog;