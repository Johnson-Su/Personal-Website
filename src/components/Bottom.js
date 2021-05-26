
//location can be "Projects" "Work" or "About" and it corresponds to where the bar is placed
const Bottom = () => {
    return (
        <div className="container-fluid mx-auto bound" style={{padding:'0'}}>
            <p className="monly nav-font" style={navStyle} href="#">Designed & coded by me :)</p>
            <div className="monly" style={{height:'42px',width:'100%'}}></div>
            <nav className="navbar navbar-expand-lg navbar-light mnone" style={{padding:'0'}}>
            <div className="mb-5 navbar-collapse ">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item" style={{padding:'0'}}>
                    <p className="mr-4 nav-font" style={navStyle} href="#">Designed & coded by me :)</p>
                </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active" style={navStyle}>
                    <a className="mx-4 nav-font" style={navStyle} href="#">LinkedIn</a>
                </li>
                <li className="nav-item">
                    <a className="mx-4 nav-font" style={navStyle} href="#">GitHub</a>
                </li>
                <li className="nav-item">
                    <a className="ml-4 nav-font" style={navStyle} href="#">Devpost</a>
                </li>
                </ul>
            </div>
            </nav>
        </div>

    )
}

const nameStyle = {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: 'Bold',
    color: '#651FFF',
}

 //Navbar Specific Styling
const navStyle = {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: 'black',
}
const navStyleBold = {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#651FFF',
    textDecoration: 'underline',
}

export default Bottom
