import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const url = process.env.DATABASE_URL;
    console.log("url obtenido")
    try {
        const sql = neon(process.env.DATABASE_URL!);
        const totalStats = await sql`SELECT COUNT(*) as total_proyectos, SUM(cant_planes) as total_planes, SUM(cant_casos) as total_casos FROM proyecto;`;
        return Response.json(totalStats)
    } catch (error) {
        console.log("error en el servidor: ", error)
        return Response.json({ error: "Error en la base de datos" }, { status: 500 });
    }
}