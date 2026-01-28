"use client"
import { useEffect, useState } from "react";
import { RootState } from "../src/lib/store"
import { useSelector } from "react-redux"


export default function Navbar() {
    //llamada a redux
    const name = useSelector((state: RootState) => state.user.name);

    const [nameLocal, setNameLocal] = useState<string | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem("user_name");
        setNameLocal(stored);
    }, []);

    const nameAb = nameLocal?.slice(0, 2) || "AD";

    return (
        <header className="h-16 border-b border border-[#30363D] bg-[#0B0E11] backdrop-blur-md sticky top-0 px-8 flex items-center justify-between">
            <div className="flex items-center flex-1 w-full">
                <div className="relative w-full">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"></span>
                    <input type="text" className="w-200 pl-4 pr-4 py-2 bg-[#161B22] border border-[#30363D] rounded-lg focus:ring-2 focus:ring-primary 
                    focus:border-transparent text-sm text-white placeholder:text-slate-500"
                        placeholder="Busca Proyectos, Planes o casos" />
                </div>
                <div className="h-8 w-[1-px] border-[#30363D] flex justify-end">
                    <button className="flex items-center gap-3 pl-1 pr-3 py-1 rounded-full bg-[#161B22] border border-[#30363D] hover:border-slate-500
                    transition-colors">
                        <div>{nameAb}</div>
                        <span className="text-sm font-medium text-slate-300">{nameLocal}</span>
                    </button>
                </div>
            </div>
        </header>
    )
}