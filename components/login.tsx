"use client";
import { setName } from "@/src/lib/features/userSlice";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { useDispatch } from "react-redux";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    //para guardar el nombre desde redux
    const dispatch = useDispatch()

    const handleLogin = async (e: React.FormEvent) => {
        //prevent default para el form
        e.preventDefault()
        //const para el ruteo
        console.log("intento de inicio de sesion")
        console.log("datos obtenidos desde el formulario: ", username, password)
        const data = { username: username, password: password }
        //llamando route.ts
        const res = await fetch(`/api/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!res.ok) {
            alert("Error, usuario o contraseña no son correctos")
        } else {
            alert(`Usuario encontrado: Bienvenido ${username}`)
            localStorage.setItem('user_name', data.username)
            dispatch(setName(data.username))
            router.replace('/dashboard')
        }


    }
    return (
        <div>
            <h1 className="text-2xl font-black text-white  flex items-center justify-center pt-30 pb-10">Dashboard QA</h1>
            <div className="bg-background-dark text-slate-100 font-display flex items-center justify-center">

                <div className="bg-[#161B22] border border-slate-800 rounded-2xl p-8 shadow-2xl w-100">
                    <h2 className="text-xl font-bold text-white">Bienvenido</h2>
                    <p className="text-slate-400 text-sm mt-1 pb-10">Ingrese sus credenciales </p>
                    <form action="" className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Nombre de usuario</label>
                            <input type="text" className="w-full pl-4 pr-4 py-3 bg-slate-700 rounded-lg text-sm 
                            placeholder:text-slate-600 text-white transition-all outline-none" id="username" placeholder="Ej: admin"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Contraseña</label>
                            <input type="password" className="w-full pl-4 pr-4 py-3 bg-slate-700 rounded-lg text-sm 
                            placeholder:text-slate-600 text-white transition-all outline-none" id="username" placeholder="Ej: *******"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="w-full bg-[#00f5ff] hover:brightness-110 text-black py-3.5 rounded-lg
                        font-bold text-sm shadow-lg shadow-primary/10 transition-all active:scale-[0.98]"
                            type="submit"
                            onClick={handleLogin}
                        >Ingresar al dashboard</button>
                    </form>
                </div>

            </div>
        </div>

    )
}