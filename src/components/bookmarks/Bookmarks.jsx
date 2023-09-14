import PropTypes from 'prop-types';
import Bookmark from '../bookmark/bookmark';
const Bookmarks = ({bookmarks ,readTime}) => {
    
    return (
        <div className="md:w-1/3 text-center bg-orange-200 p-5 m-10 rounded-xl">
          <div className='bg-slate-200 p-4 m-4 rounded-xl'>
          <h3 className='text-2xl text-purple-700'>Spent time on read : {readTime}</h3>
          </div>
          <h3 className='text-3xl font-semibold'>Bookmark :{bookmarks.length} </h3> 
          {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark> )
          } 
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired,
    readTime:PropTypes.number
}
export default Bookmarks;