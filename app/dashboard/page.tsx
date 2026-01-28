"use client";

import DashboardFooter from "@/components/dashboardFooter";
import Navbar from "@/components/navbar";
import ProjectGrid from "@/components/projectGrid";
import { useEffect, useState } from "react";



export default function Home() {
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            setUser(storedUser);
        }
    }, []);
    return (
        <div>
            <Navbar />
            <ProjectGrid />
            <DashboardFooter />
        </div>
    );
}