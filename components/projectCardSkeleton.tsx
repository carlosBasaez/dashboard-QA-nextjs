//interface de la card
interface ProjectProps {
    nombre: string,
    descripcion: string,
    cantidadPlanes: number,
    cantidadCasos: number
}

export default function ProjectCardSkeleton({ nombre, descripcion, cantidadPlanes, cantidadCasos }: ProjectProps) {
    return (
        <div className="pt-10">
            <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all flex flex-col h-full aspect-[6/3] group max-w-[500px]">
                <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-1 truncate">
                        {nombre}
                    </h3>
                    <p className="text-slate-400 text-l mt-2 line-clamp-2 break-words">
                        {descripcion}
                    </p>
                </div>
                <div className="flex flex-wrap justify-between items-end mt-auto pt-6 gap-2">
                    <p className="text-slate-400 text-xs sm:text-sm whitespace-nowrap">
                        Planes: <span className="text-white font-bold">{cantidadPlanes}</span>
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm whitespace-nowrap">
                        Casos: <span className="text-white font-bold">{cantidadCasos}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}