import PropTypes from 'prop-types';


function Navbar(props) {




    return (
        <>


            <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode} `}>
                <div className="container">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.about}</a>
                            </li>
                        </ul>

                        <div className={`d-flex align-items-center   text-${props.mode === "light" ? "dark" : "light"}`} >

                            <div className="form-check me-3 ">
                                <input onChange={props.clickColor} value="#18122B" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    1
                                </label>
                            </div>
                            <div className="form-check me-3 ">
                                <input onClick={props.clickColor} value="#27374D" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    2
                                </label>
                            </div>

                            <label htmlFor="exampleColorInput" className="form-label me-2 mt-2">Change BG color</label>
                            <input onClick={props.colorChange} type="color" className="me-5  form-control form-control-color colorPalete" id="exampleColorInput" title="Choose your color"></input>



                            <div className="form-check form-switch">
                                <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"} `} htmlFor="flexSwitchCheckChecked">{props.mode}</label>
                            </div>

                        </div>


                    </div>



                </div>
            </nav>

        </>
    )
}
// text-${props.mode}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    toggleMode: PropTypes.func,
    colorChange: PropTypes.func,
    clickColor: PropTypes.func,
    mode: PropTypes.func,
}

export default Navbar;


