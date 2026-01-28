import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const url = process.env.DATABASE_URL;
    console.log("url obtenido")
    //url para conectarse a la base de datos + validacion si la url viene vacia o undefined
    if (!url) {
        console.log("DATABASE_URL:", url ? "EXISTE" : "NO EXISTE");
        console.log("DATABASE_URL ES:", url)
    }
    try {
        console.log("url exitoso")
        const sql = neon(url)
        const body = await request.json()
        const login = await sql`SELECT * FROM usuarios WHERE username = ${body.username} AND password = ${body.password};`
        console.log("usuarios obtenidos", login)
        if (login.length === 0) {
            return NextResponse.json(
                { message: "Usuario o contraseña incorrectos" },
                { status: 401 }
            );
        }
        return (
            NextResponse.json({ message: "Login exitoso" }, { status: 200 })

        )
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Error al intentar logearse" },
            { status: 500 }
        )
    }
}