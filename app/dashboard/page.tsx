import DashboardFooter from "@/components/dashboardFooter";
import Navbar from "@/components/navbar";
import ProjectGrid from "@/components/projectGrid";



export default function Home() {
    return (
        <div>
            <Navbar />
            <ProjectGrid />
            <DashboardFooter />
        </div>
    );
}