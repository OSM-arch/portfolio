import { useState } from "react";
import Sidebar from "./components/sidebar.jsx";
import PersonalInfoForm from "./components/personalInfo.jsx";
import ProjectsForm from "./components/projectsForm.jsx";

export default function AdminPanel() {
    const [selected, setSelected] = useState("Personal");

    const items = {
        Personal: <PersonalInfoForm />,
        Projects: <ProjectsForm />,
        About: <div className="p-4 bg-white rounded shadow">About Content</div>,
        Contact: <div className="p-4 bg-white rounded shadow">Contact Content</div>,
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 min-h-screen">
            <Sidebar selected={selected} setSelected={setSelected} />

            <div className="lg:col-span-3 p-4">
                <div className="transition-all duration-300">
                    {items[selected]}
                </div>
            </div>
        </div>
    );
}
