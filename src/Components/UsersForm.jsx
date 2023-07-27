import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const UsersForm = ({addUser, newUser, editUser, visual}) => {

    const {register, handleSubmit, reset} = useForm()
    const [exit, isExit] = useState( visual)

    useEffect(()=> {

        if (newUser) {
            reset(newUser)
        } else {
            reset({
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                birthday: ""
            })
        }
    }, [newUser])

    const submit = data => {
        if (newUser) {
            editUser(data)
        }else {
            addUser(data)
        }
    }

    return (
        <>

        {
            exit 
            &&
            <section className="section-input">

                <form onSubmit={handleSubmit(submit)} className="form">

                    <div className="f-div">
                        <h1 className="f-title">Nuevo Usuario</h1>

                        <span onClick={() => {isExit(!exit)}} className="f-span">
                            <svg className="exit" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/></svg>
                        </span>
                    </div>
                    

                    <label htmlFor="nombre" className="f-label">Nombre: </label>
                    <input 
                    type="text" 
                    id="nombre"
                    className="f-input"
                    {...register("first_name", {required: true})}
                    />

                    <label htmlFor="apellido" className="f-label">Apellido: </label>
                    <input 
                    type="text" 
                    id="apellido"
                    className="f-input"
                    {...register("last_name", {required: true})}
                    />

                    <label htmlFor="email" className="f-label">Correo: </label>
                    <input 
                    type="email" 
                    id="email"
                    className="f-input"
                    {...register("email", {required: true})}
                    />

                    <label htmlFor="pass" className="f-label">Contraseña: </label>
                    <input 
                    type="password" 
                    id="pass"
                    className="f-input"
                    {...register("password", {required: true})}
                    />

                    <label htmlFor="date" className="f-label">Fecha de Nacimiento: </label>
                    <input 
                    type="date" 
                    id="date"
                    className="f-input"
                    {...register("birthday", {required: true})}
                    />

                    <button className="f-btn">Añadir</button>
                </form>

            </section>
        }
        </>
    )
}

export default UsersForm