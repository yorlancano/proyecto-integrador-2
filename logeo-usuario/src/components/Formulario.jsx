import "./Formulario.css"
import { useState } from "react"
export function Formulario(){
    const[email, setEmail]=useState("")
    const[contraseña, setContraseña]=useState("")
    const[error,setError]= useState(false)

    const handleSubmit= (evento)=>{
        evento.preventDefault()
        if(email==""|| contraseña==""){
            setError(true)
            return

        }
    }

    return(
        <div className="container">
            <div className="container1">
                
                <img src="" alt="" />
                <div className="container2">
                    <h2>Login</h2>
                    <form className="Formulario">
                        <label htmlFor="imput1">Email</label>
                        <input type="text" className="input1" placeholder="Enter your Email" id="input1"
                        value={email}
                        onChange={evento => setEmail(evento.target.value)}
                        />
                         <label htmlFor="imput2">Pasword</label>
                        <input type="pasword" id="imput2" className="input2" placeholder="Enter your Pasword"
                        value={contraseña}
                        onChange={evento => setContraseña(evento.target.value)}
                        />
                        <button className="bottom">Log in</button>
                        <h5> you do not have an account? sign up</h5>
                    </form>
                    {error && <p>error</p>}
                </div>    
            </div>    
        </div>
    )

}