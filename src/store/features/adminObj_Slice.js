import {createSlice} from "@reduxjs/toolkit";

const initialCity = {
    "home"    : {
        "fullname": "Oussama El Mohtadi",
        "basedIn" : "Morocco"
    },
    "about"   : {
        "aboutMe"   : `Motivated Full Stack Web Developer with strong foundations in HTML, CSS, JavaScript, PHP, and Python,
                    complemented by hands-on experience with frameworks like Bootstrap, jQuery, and AJAX. Skilled in both
                    front-end and back-end development, including database management with MySQL (via PDO) and objectoriented programming. Experienced in building responsive, user-friendly applications and currently
                    advancing in modern tools such as Tailwind and React. As a first-year Digital Development intern at OFPPT, I
                    am eager to keep expanding my expertise, take on new challenges, and grow toward leading projects and
                    teams in the future.`,
        "education" : [
            {
                "date" : "2023", 
                "details" : `High School Graduation in experimental sciences, physical science — Groupe Scolaire Rowad, Oulad Mtaa, Morocco`
            },
            {
                "date" : "2024 – Present", 
                "details" : `Technician Diploma in Digital Development (Full Stack Web 2024 – Present
                            Development) — OFPPT, ISTA Hay Riad, Morocco`
            }
        ]
    },
    "projects"    : [
        {
            "url"   : "https://osm-arch.github.io/Weather-App/",
            "github": "https://github.com/OSM-arch/Weather-App",
            "image" : "src\\assets\\weatherCap.png",
            "date" : "November 24, 2025",  
            "title" : "🌦️ Weather Web Application", 
            "details": `A modern, responsive weather application built with React, Tailwind.
            The app fetches real-time weather data and displays the current, hourly, and weekly forecasts with a clean UI.`
        }
    ]
};

const adminObj_Slice = createSlice({
    name: 'adminObj',
    initialState: initialCity,
    reducers: {
    }
})

export default adminObj_Slice.reducer;