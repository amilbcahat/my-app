import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            {/* props.mode used here is actually to recieve the values from the mode state defined in js  */}
            <div className="container-fluid">
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
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        {/* Here since the text on the button with 'Enable Dark mode' have to be inverse of dark mode color hence we used an inverse through ternary operator again  */}
                        {/* One thing to note here is we have used back ticks and dollar sign here and not like in textform where we used the things directly */}
                            <input class="form-check-input" type="checkbox" onClick={props.togglemode}  role="switch" id="flexSwitchCheckDefault"/>
                            {/* onClick function is used to initiate the togglemode function through the props */}
                            <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark mode</label>
                    </div>
                </div>
                
            </div>
        </nav>
    )
}

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string.isRequired
// }

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };