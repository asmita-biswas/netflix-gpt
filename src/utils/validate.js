export const checkValidate = (email,password) => {
    const isEmailValid = /^([A-Za-z0-9_%-]+@[A-Za-z0-9.-]+\.[a-zA-z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    
    if(!isEmailValid) return "Email not valid"
    if(!isPasswordValid) return "Password not valid"

    return null
}