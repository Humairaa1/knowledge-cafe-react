import PropTypes from 'prop-types';
import Bookmark from '../bookmark/bookmark';
const Bookmarks = ({bookmarks}) => {
    
    return (
        <div className="md:w-1/3 text-center bg-orange-200 p-5 m-10 rounded-xl">
          <h3 className='text-3xl font-semibold'>Bookmark :{bookmarks.length} </h3> 
          {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark> )
          } 
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired
}
export default Bookmarks;