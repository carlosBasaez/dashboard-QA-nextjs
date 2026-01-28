"use client"
import { useEffect, useState } from "react"
import ProjectCardSkeleton from "./projectCardSkeleton";


export default function ProjectGrid() {

    const [proyectos, setProyectos] = useState<any[]>([]);
    const [proyectosList, setProyectosList] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Para el Skeleton

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                setIsLoading(true)
                const res = await fetch('/api/dashboard/projects');
                const data = await res.json();
                //guardamos la data
                setProyectos(data.total);
                setProyectosList(data.items)
            } catch (error) {
                console.error("error cargando el dashboard")
            } finally {
                setIsLoading(false)
            }

        };

        fetchDashboard();
    }, []);
    return (
        <div className="p-10">
            <div>
                <h2 className="text-3xl font-black text-white tracking-tight">Vista de los proyectos</h2>
                <p className="text-slate-500 mt-1">mostrando los {proyectos ?? 0} proyectos activos en el dashboard</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {proyectosList.map((proyecto: any) => (
                    <ProjectCardSkeleton
                        key={proyecto.id}
                        nombre={proyecto.nombre ?? "Proyecto sin nombre"}
                        descripcion={proyecto.descripcion ?? "No posee Descripcion"}
                        cantidadPlanes={proyecto.cant_planes ?? 0}
                        cantidadCasos={proyecto.cant_casos ?? 0}
                    />
                ))}
            </div>
        </div>
    )
}
