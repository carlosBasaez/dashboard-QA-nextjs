"use client"
import { useEffect, useState } from "react"

interface DashboardStats {
    totalCasos: number,
    totalPlanes: number,
    totalProyectos: number
}

export default function DashboardFooter() {
    const [stats, setStats] = useState<DashboardStats>({
        totalProyectos: 0,
        totalPlanes: 0,
        totalCasos: 0
    });
    const [isLoading, setIsLoading] = useState(true); // Para el Skeleton

    useEffect(() => {
        const fetchFooter = async () => {
            try {
                setIsLoading(true);
                const res = await fetch('/api/dashboard/stats');
                const data = await res.json(); // Esto es el array: [{...}]

                if (data && data.length > 0) {
                    // Extraemos el primer elemento y convertimos a número
                    const statsLimpia = {
                        totalProyectos: Number(data[0].total_proyectos),
                        totalPlanes: Number(data[0].total_planes),
                        totalCasos: Number(data[0].total_casos)
                    };

                    console.log("Data lista para usar:", statsLimpia);

                    // Aquí seteas tu estado (asegúrate de tener un useState para esto)
                    setStats(statsLimpia);
                }
            } catch (error) {
                console.error("error cargando el dashboard");
            } finally {
                setIsLoading(false);
            }
        };
        fetchFooter();
    }, []);



    return (
        <div className="p-10">
            <div className="p-6 bg-[#161B22] rounded-xl border border-[#30363D] flex flex-wrap gap-12 items-center justify-start">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center justify-between">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">Total de planes:</p>
                        <p className="text-2xl font-black text-white">{stats.totalPlanes}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">Total de casos:</p>
                        <p className="text-2xl font-black text-white">{stats.totalCasos}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">Total de proyectos:</p>
                        <p className="text-2xl font-black text-white">{stats.totalProyectos}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}