"use client"
import { ReduxProvider } from "@/src/components/reduxProvider";
import { useState } from "react";

export default function DashboardLayout({
    children, // Aquí es donde se inyectará el contenido de cada page.tsx
}: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex h-screen bg-[#0B0E11] overflow-hidden">
            {/* BOTÓN HAMBURGUESA (Solo visible en móviles) */}
            {/* BOTÓN HAMBURGUESA: z-50 asegura que esté por encima de todo */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-5 left-5 z-[60] p-3 bg-[#161B22] border border-[#30363D] rounded-xl text-white shadow-2xl hover:bg-[#1c2128] transition-all active:scale-95"
            >
                {isOpen ? (
                    // Icono X (Cerrar)
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                    // Icono Hamburguesa
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                )}
            </button>

            {/* SIDEBAR */}
            <aside className={`
                fixed inset-y-0 left-0 z-40 w-64 bg-[#0B0E11] border-r border-[#30363D] 
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                lg:translate-x-0 lg:static lg:inset-auto
            `}>
                <div className="flex flex-col p-5">
                    <h1 className="text-white text-base font-bold leading-none">Dashboard QA</h1>
                    <p className="text-slate-500 text-xs font-medium pb-6">gestor de QA</p>
                    <nav className="flex-1 px-4 space-y-1 text-slate-300">
                        <p className="text-lg font-semibold pb-4 hover:text-white cursor-pointer transition-colors">Proyectos</p>
                        <p className="text-lg font-semibold pb-4 hover:text-white cursor-pointer transition-colors">Planes de prueba</p>
                        <p className="text-lg font-semibold pb-4 hover:text-white cursor-pointer transition-colors">Casos de prueba</p>
                    </nav>
                </div>
            </aside>

            {/* CONTENIDO DINÁMICO */}
            <main className="flex-1 overflow-y-auto w-full bg-[#0B0E11] relative">
                <ReduxProvider>
                    <div className="p-4 lg:p-8"> {/* Padding extra para que el botón no tape el contenido */}
                        {children}
                    </div>
                </ReduxProvider>
            </main>
        </div>
    );
}