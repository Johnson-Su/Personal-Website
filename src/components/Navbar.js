
import { Link } from 'react-router-dom';

//location can be "Projects" "Work" or "About" and it corresponds to where the bar is placed
const Navbar = ({ location }) => {
    return (
        <div className="container-fluid mx-auto bound" style={{padding:'0'}}>
            <nav className="navbar navbar-expand-lg navbar-light" style={{padding:'0'}}>
            <button className="navbar-toggler m-nav-spacer custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon custom-toggler"></span>
            </button>
            <div className="collapse nav-top navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item mr-4">
                    <Link className="mobile-nav-first nav-font" style={(location === "Projects") ? navStyleBold : navStyle} to="/">Projects</Link>
                </li>
                <li className="nav-item mx-4">
                    <Link className="nav-font" style={(location === "Work") ? navStyleBold : navStyle} to="/experience">Experience & Awards</Link>
                </li>
                <li className="nav-item mx-4">
                    <Link className="nav-font" style={(location === "About") ? navStyleBold : navStyle} to="/about">About</Link>
                </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                <li className="nav-item ml-4 ">
                    <a className="nav-font" style={navStyle} href="#">Resume</a>
                </li>
                </ul>
            </div>
            </nav>
        </div>

    )
}


 //Navbar Specific Styling
const navStyle = {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color:'#212121',
    letterSpacing: '0.8px',
}
const navStyleBold = {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: 'Bold',
    color: '#651FFF',
    textDecoration: 'underline',
    letterSpacing: '0.07px',
}

export default Navbar
