import React, { useState } from 'react';

const formStyle = {
    maxWidth: 600,
    minHeight: "calc(100vh -112px)"
}

function HumansRegistrationScreen() {

    const [state, setState] = useState("initial");
    
    return (
        <div>
            <h1 className="py-5">Registration for Humans</h1>

            <div className="container" style={formStyle}>


                {/* ### Avatar ### */}
                <div className="mb-3">
                    <label for="avatar" className="form-label">Avatar</label>
                    <input type="input" className="form-control" id="avatar" aria-describedby="avatarHelp" />
                    <div id="avatarHelp" className="form-text">Pic something cool you identify yourself with</div>
                </div>

                {/* ### Name ### */}
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                    <div id="nameHelp" className="form-text">How do you parents call you?</div>
                </div>

                {/* ### Surname ### */}
                <div className="mb-3">
                    <label for="surname" className="form-label">Surname</label>
                    <input type="text" className="form-control" id="surname" aria-describedby="surnameHelp" />
                    <div id="surnameHelp" className="form-text">What about family names?</div>
                </div>

                {/* ### Email ### */}
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Spam? No thank you!</div>
                </div>

                {/* ### Password ### */}
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" aria-describedby="passwordHelp" />
                    <div id="passwordHelp" className="form-text">Please do NOT use "password123"</div>
                </div>

                {/* ### Contact nuber ### */}
                <div className="mb-3">
                    <label for="contact" className="form-label">Contact number</label>
                    <input type="contact" className="form-control" id="contact" aria-describedby="contactHelp" />
                    <div id="contactHelp" className="form-text">Remember phone calls?</div>
                </div>

                {/* ### Address ### */}
                <div className="mb-3">
                    <label for="address" className="form-label">Address</label>
                    <input type="contact" className="form-control" id="address" aria-describedby="addressHelp" />
                    <div id="addressHelp" className="form-text">Where do we send our appreciation tokens?</div>
                </div>

                {/* ### Likes ### */}
                {/* ### Does not like ### */}

                <button className="btn btn-success" type="button">Submit</button>

                <div className="alert alert-danger" role="alert">
                    Please enter correct  values
                </div>

                <div className="alert alert-success" role="alert">
                    SUCCESS! Welcome aboard!
                </div>

                <div className="alert alert-warning" role="alert">
                    Something is not working on our end...
                </div>

                <p>Hold on a minute...</p>

            </div>

        </div>
    );
}

export default HumansRegistrationScreen;