"use client";

import DashboardFooter from "@/components/dashboardFooter";
import Navbar from "@/components/navbar";
import ProjectGrid from "@/components/projectGrid";
import { useEffect, useState } from "react";



export default function Home() {
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const storedUser = window.localStorage.getItem("user_name");
        setUser(storedUser);
    }, []);
    return (
        <div>
            <Navbar />
            <ProjectGrid />
            <DashboardFooter />
        </div>
    );
}