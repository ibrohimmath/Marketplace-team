import style from "./style.module.scss"
function Input(params) {
    return(
        <form action="">
                    <input type="text" placeholder='Username'required/>
                    <input type="email" placeholder='Email'required/>
                    <input type="password" placeholder='Password' required/>
                    <input type="password" placeholder='Confirm Password' required/>
                    <button>Create Accaunt</button>
                </form>
    )
}

export default Input