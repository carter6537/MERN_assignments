import React, { useState } from 'react';

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    // const newUser = { username, email, password };
    // console.log("Welcome", newUser);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if ((firstName.length + 1) < 2) {
      setFirstNameError("First name must be greater than 2 charecters!");
    } else if ((firstName.length + 1) > 2) {
      setFirstNameError("");
    }
  }
  
  const handleLastName = (e) => {
    setLastName(e.target.value);
    if ((lastName.length + 1) < 2) {
      setLastNameError("Last name must be greater than 2 charecters!");
    } else if ((lastName.length + 1) > 2) {
      setLastNameError("");
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if ((email.length + 1) < 5) {
      setEmailError("Email needs to be at least 5 charecters long!");
    } else if ((email.length + 1) > 5) {
      setEmailError("");
    }
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if ((e.target.value.length + 1) < 5) {
      setPasswordError("Password must be at least 5 charecters long!");
    } else if ((e.target.value.length + 1) > 5) {
      setPasswordError("");
    }
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Passwords must match!")
    } else if (e.target.value === password) {
      setConfirmPasswordError("");
    }
  }

  return (
    <div>
      <form onSubmit={createUser}>
        <div>
          <label>First Name: </label>
          <input type="text" onChange= {handleFirstName} value={firstName}/>
          {
            firstNameError ?
            <p style={{color:'red'}}>{ firstNameError }</p> :
            ''
          }
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" onChange= {handleLastName} value={lastName}/>
          {
            lastNameError ?
            <p style={{color:'red'}}>{ lastNameError }</p> :
            ''
          }
        </div>
        <div>
          <label>Email Address: </label>
          <input type="text" onChange= {handleEmail} value={email}/>
          {
            emailError ?
            <p style={{color:'red'}}>{ emailError }</p> :
            ''
          }
        </div>
        <div>
          <label>Password: </label>
          <input type="text" onChange= {handlePassword} value={password}/>
          {
            passwordError ?
            <p style={{color:'red'}}>{ passwordError }</p> :
            ''
          }
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="text" onChange={handleConfirmPassword} value={confirmPassword}/>
          {
            confirmPasswordError ?
            <p style={{color:'red'}}>{ confirmPasswordError }</p> :
            ''
          }
        </div>
        {/* <input type="submit" value="Create User" /> */}
      </form>
      <div>
        <h2>Your form data:</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </div>
  );
};

export default UserForm;