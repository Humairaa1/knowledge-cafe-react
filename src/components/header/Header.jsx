import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='md:flex justify-between items-center m-10 px-6 border-b-2'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe React</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;