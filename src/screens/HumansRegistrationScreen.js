import React, { useState } from 'react';

const formStyle = {
    color: "white",
    maxWidth: 600,
    minHeight: "calc(100vh -112px)"
};

const helpStyle = {
    color: "white"
};

// RegExpr to validate emails
const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// RegExpr to validate passwords (between 8 and 16 chars long && uppercase && lowercase && numbers)
const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
    return re.test(password);
}

function HumansRegistrationScreen() {

    // initial - sending - successful - unsuccessful - validation error
    const [state, setState] = useState("initial");;
    const [errorsState, setErrorsState] = useState([]);

    // declare undefined variables
    let avatarField;
    let nameField;
    let surnameField;
    let emailField;
    let passwordField;
    let contactField;
    let addressField;

    // instantiate a FormData object
    const formData = new FormData();

    const attachFile = (evt) => {

        // create an array for the files attached
        const files = Array.from(evt.target.files);

        // Append each file to the formData
        files.forEach(
            (file, index) => {
                formData.append(index, file);
            }
        )
    }


    const register = () => {

        const errors = [];


        // validate the fields
        if (nameField.value.length === 0) {
            errors.push("You forgot to enter your name!");
        }

        if (surnameField.value.length === 0) {
            errors.push("You forgot to enter your surname!");
        }

        if (!validateEmail(emailField.value)) {
            errors.push("Use a legit email!");
        }

        if (!validatePassword(passwordField.value)) {
            errors.push("Enter a stronger password!");
        }

        // if there are errors >>> validation error
        if (errors.length > 0) {
            setState("validation-error");

            // populate the alert box with the errors
            setErrorsState(errors);
        }

        // if there are no errors >>> sending
        else {
            setState("sending");
            setErrorsState([]);

            formData.append('name', nameField.value);
            formData.append('surname', surnameField.value);
            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);
            formData.append('contact', contactField.value);
            formData.append('address', addressField.value);

            fetch("http://localhost:3001/humans/add", {
                method: 'POST',
                //headers: { "Content-Type": "application/json" },
                body: formData
            })
                // if the submission is successful >>> successful
                .then((backendResponse) => { backendResponse.json(); })
                .then((theJson) => {
                    console.log(theJson);
                    setState("successful");
                })
                // if the submission is not successful >>> unsuccessful
                .catch((error) => {
                    console.log(error);
                    setState("unsuccessful");
                });
        }
    }

    return (
        <div>

            <div className="container" style={formStyle}>

                <h1 className="py-5">Registration for Humans</h1>

                {/* ### Avatar ### */}
                <div className="mb-3">
                    <label htmlFor="avatar" className="form-label">Avatar</label>
                    <input
                        onChange={attachFile}
                        ref={(elem) => { avatarField = elem }} type="file" className="form-control" id="avatar" aria-describedby="avatarHelp" />
                    <div id="avatarHelp" style={helpStyle} className="form-text">Pic something cool you identify yourself with</div>
                </div>

                {/* ### Name ### */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input ref={(elem) => { nameField = elem }} type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                    <div id="nameHelp" style={helpStyle} className="form-text">How do you parents call you?</div>
                </div>

                {/* ### Surname ### */}
                <div className="mb-3">
                    <label htmlFor="surname" className="form-label">Surname</label>
                    <input ref={(elem) => { surnameField = elem }} type="text" className="form-control" id="surname" aria-describedby="surnameHelp" />
                    <div id="surnameHelp" style={helpStyle} className="form-text">What about family names?</div>
                </div>

                {/* ### Email ### */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input ref={(elem) => { emailField = elem }} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" style={helpStyle} className="form-text">Spam? No thank you!</div>
                </div>

                {/* ### Password ### */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input ref={(elem) => { passwordField = elem }} type="password" className="form-control" id="password" aria-describedby="passwordHelp" />
                    <div id="passwordHelp" style={helpStyle} className="form-text">Please do NOT use "password123"</div>
                </div>

                {/* ### Contact nuber ### */}
                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Contact number</label>
                    <input ref={(elem) => { contactField = elem }} type="contact" className="form-control" id="contact" aria-describedby="contactHelp" />
                    <div id="contactHelp" style={helpStyle} className="form-text">Remember phone calls?</div>
                </div>

                {/* ### Address ### */}
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input ref={(elem) => { addressField = elem }} type="contact" className="form-control" id="address" aria-describedby="addressHelp" />
                    <div id="addressHelp" style={helpStyle} className="form-text">Where do we send our appreciation tokens?</div>
                </div>

                {/* ### Likes ### */}

                {
                    state !== "loading" && state !== "successful" &&
                    <button
                        onClick={register}
                        className="btn btn-success mb-5" type="button">Submit</button>
                }

                {
                    state === "validation-error" &&
                    <div className="alert alert-danger" role="alert">
                        <ul>
                            {
                                errorsState.map(
                                    (error) => <li>{error}</li>
                                )
                            }
                        </ul>
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