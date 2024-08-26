import {Link} from 'react-router-dom';

// i changed the ancher tag to router links to let react handle all request to the pages in the browser instead of going to the server 
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create"style={{
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' 
                }}
                >New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;