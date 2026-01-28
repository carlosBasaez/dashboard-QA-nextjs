import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    const url = process.env.DATABASE_URL;
    console.log("url obtenido")
    try {
        const sql = neon(process.env.DATABASE_URL!);
        const projects = await sql`SELECT * FROM proyecto ORDER BY id DESC`;
        const count = projects.length; // Ni siquiera necesitas una query extra si traes todos
        return Response.json({
            total: count,
            items: projects
        })
    } catch (error) {
        console.log("error en el servidor: ", error)
        return Response.json({ error: "Error en la base de datos" }, { status: 500 });
    }
}