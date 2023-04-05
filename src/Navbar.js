import {Link} from 'react-router-dom';

//sfc <tab> to create a stateless functional component
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* using Link to instead of a href prevents request to the server */}
                <Link to="/">Home</Link>
                <Link to="/create" 
                // style={{
                //     color: "white",
                //     backgroundColor: '#f1356d',
                //     borderRadius: '8px'
                // }}
                >New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;