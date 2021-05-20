import React, { useState } from 'react';

const formStyle = {
    maxWidth: 600,
    minHeight: "calc(100vh -112px)"
}

function HumansRegistrationScreen() {

    // initial - sending - successful - unsuccessful - validation error
    const [state, setState] = useState("initial");

    let avatarField;
    let nameField;
    let surnameField;
    let emailField;
    let passwordField;
    let contactField;
    let addressField;
    let likesField;
    let hatesField;


    const register = () => {

        const errors = [];


        // validate the fields
        if (nameField.value.length == 0) {
            errors.push("You forgot to enter your name!");
        }

        if (surnameField.value.length == 0) {
            errors.push("You forgot to enter your surname!");
        }

        if (emailField.value.length == 0) {
            errors.push("Use a legit email!");
        }

        if (passwordField.value.length == 0) {
            errors.push("Enter a stronger password!");
        }

        // if there are errors >>> validation error
        if (errors.length > 0) {
            setState("validation-error");
        }

        // if there are no errors >>> sending
        else {
            setState("sending");

            fetch("http://localhost:3001/humans/find")
                // if the submission is successful >>> successful
                .then((backendResponse) => { backendResponse.json(); })
                .then((theJson) => { console.log(theJson); })
                // if the submission is not successful >>> unsuccessful
                .catch((error) => { console.log(error); });
        }



    }

    return (
        <div>

            <div className="container" style={formStyle}>

                <h1 className="py-5">Registration for Humans</h1>

                {/* ### Avatar ### */}
                <div className="mb-3">
                    <label for="avatar" className="form-label">Avatar</label>
                    <input ref={(elem) => { avatarField = elem }} type="input" className="form-control" id="avatar" aria-describedby="avatarHelp" />
                    <div id="avatarHelp" className="form-text">Pic something cool you identify yourself with</div>
                </div>

                {/* ### Name ### */}
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input ref={(elem) => { nameField = elem }} type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                    <div id="nameHelp" className="form-text">How do you parents call you?</div>
                </div>

                {/* ### Surname ### */}
                <div className="mb-3">
                    <label for="surname" className="form-label">Surname</label>
                    <input ref={(elem) => { surnameField = elem }} type="text" className="form-control" id="surname" aria-describedby="surnameHelp" />
                    <div id="surnameHelp" className="form-text">What about family names?</div>
                </div>

                {/* ### Email ### */}
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input ref={(elem) => { emailField = elem }} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Spam? No thank you!</div>
                </div>

                {/* ### Password ### */}
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input ref={(elem) => { passwordField = elem }} type="password" className="form-control" id="password" aria-describedby="passwordHelp" />
                    <div id="passwordHelp" className="form-text">Please do NOT use "password123"</div>
                </div>

                {/* ### Contact nuber ### */}
                <div className="mb-3">
                    <label for="contact" className="form-label">Contact number</label>
                    <input ref={(elem) => { contactField = elem }} type="contact" className="form-control" id="contact" aria-describedby="contactHelp" />
                    <div id="contactHelp" className="form-text">Remember phone calls?</div>
                </div>

                {/* ### Address ### */}
                <div className="mb-3">
                    <label for="address" className="form-label">Address</label>
                    <input ref={(elem) => { addressField = elem }} type="contact" className="form-control" id="address" aria-describedby="addressHelp" />
                    <div id="addressHelp" className="form-text">Where do we send our appreciation tokens?</div>
                </div>

                {/* ### Likes ### */}
                {/* ### Hates ### */}

                {
                    state !== "loading" && state !== "successful" &&
                    <button
                        onClick={register}
                        className="btn btn-success mb-5" type="button">Submit</button>
                }

                {
                    state === "validation-error" &&
                    <div className="alert alert-danger" role="alert">
                        Please enter correct  values
                    </div>
                }

                {
                    state === "successful" &&
                    <div className="alert alert-success" role="alert">
                        SUCCESS! Welcome aboard!
                    </div>
                }

                {
                    state === "unsuccessful" &&
                    <div className="alert alert-warning" role="alert">
                        Something is not working on our end...
                    </div>
                }

                {
                    state === "sending" &&
                    <p>Hold on a minute...</p>
                }

            </div>

        </div>
    );
}

export default HumansRegistrationScreen;