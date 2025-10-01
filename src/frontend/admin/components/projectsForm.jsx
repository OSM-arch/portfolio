import {useEffect, useRef, useState} from "react";

export default function ProjectsForm() {

    const [fetchProjects, setFetchProjects] = useState(null);
    const [selectedProject, setSelectedProject] = useState({});
    const [selectedId, setSelectedId] = useState("");

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [github, setGithub] = useState("");

    const [inputError, setInputError] = useState({
        titleError: "", dateError: "", descriptionError: "", imageError: "", githubError: ""
    });
    const [msg, setMsg] = useState("");

    const selectRef = useRef(null);
    const buttonRef = useRef(null);
    const titleRef = useRef(null);
    const dateRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);
    const urlRef = useRef(null);
    const githubRef = useRef(null);

    // Get data
    useEffect(() => {
        var url = "http://localhost/portfolio/getProjects.php";

        fetch(url)
        .then((response) => response.json())
        .then((data) => setFetchProjects(data))
        .catch(err => console.log("Error fetching User Data : ", err));

    }, []);

    let projectsSelect = null;
    if (fetchProjects && fetchProjects.length > 0) {
        projectsSelect = (
            fetchProjects.map((project, key) => (
                <option value={project.id} key={key}>
                    {project.title}
                </option>
            ))
        )
    }

    const handleChange = () => {
        const id = selectRef.current.value;
        setSelectedId(id);

        if (id === "") {
            setSelectedProject({})
        }else {
            const project = fetchProjects.find((p) => String(p.id) === id);
            setSelectedProject(project);
        }
    }

    // Send data to backend
    const handleSubmit = () => {

        setInputError({
            titleError: "", dateError: "", descriptionError: "", imageError: "", urlError: "", githubError: ""
        });
        setMsg("");

        setTitle(titleRef.current.value);
        if (titleRef.current.value.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                titleError: "Title Required"
            }))
        }

        setDate(dateRef.current.value);
        if (dateRef.current.value.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                dateError: "Date Required"
            }))
        }

        setDescription(descriptionRef.current.value);
        if (descriptionRef.current.value.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                descriptionError: "Description Required"
            }))
        }

        setImage(imageRef.current.value);
        if (imageRef.current.value.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                imageError: "Image Required"
            }))
        }

        setUrl(urlRef.current.value);

        setGithub(githubRef.current.value);
        if (githubRef.current.value.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                githubError: "GitHub Repository Required"
            }))
        }

        if (title !== "" && date !== "" && description !== "" && image !== "" && github !== "") {
            var headers = {
                "Accept" : "application/json",
                "Content-type" :  "application/json"
            };
            var data = {
                title: title,
                date: date,
                description: description,
                image: image,
                url: url,
                github: github
            };
            var link = "";
            const type = buttonRef.current.textContent;

            switch (type) {
                case "Add": link = "http://localhost/portfolio/insertProject.php";break;
                case "Update": link = `http://localhost/portfolio/updateProject.php?id=${selectedId}`;break;
            }

            if (link !== "" && type === "Add") {
                fetch(link, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(data)
                })
                    .then((response) => response.json())
                    .then((response) => {
                        setMsg(response[0].result)
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }

            if (link !== "" && type === "Update") {
                fetch(link, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(data)
                })
                    .then((response) => response.json())
                    .then((response) => {
                        setMsg(response[0].result)
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }

        }

    }

    if (!fetchProjects) return <p>Loading...</p>

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className='text-green-500 m-0 p-0 font-semibold text-sm italic'>{msg}</div>

            <div className="flex flex-col gap-4">

                <select className='w-full border-0 rounded p-2' ref={selectRef} onChange={handleChange}>
                    <option value="">Choose A Project</option>
                    {projectsSelect}
                </select>

                <hr className='rounded w-full border-2 border-gray-500 shadow-lg my-5' />
                <div className="flex flex-col gap-4">

                    {/* Title */}
                    <div>
                        <label className="block mb-1 font-medium">Title</label>
                        <input
                            ref={titleRef}
                            type="text"
                            defaultValue={selectedProject.title}
                            className="w-full border-0 focus:border rounded p-2"
                            required
                        />
                        <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{inputError.titleError}</div>
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block mb-1 font-medium">Date</label>
                        <input
                            ref={dateRef}
                            type="date"
                            defaultValue={selectedProject.date}
                            className="w-full border-0 focus:border rounded p-2"
                            required
                        />
                        <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{inputError.dateError}</div>
                    </div>

                    {/* description */}
                    <div>
                        <label className="block mb-1 font-medium">Description</label>
                        <textarea
                            ref={descriptionRef}
                            defaultValue={selectedProject.description}
                            className="w-full h-max border-0 focus:border rounded p-2"
                            required
                        ></textarea>
                        <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{inputError.descriptionError}</div>
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block mb-1 font-medium">Image</label>
                        <input
                            ref={imageRef}
                            type="file"
                            defaultValue={selectedProject.image}
                            name="photo"
                            accept="image/*"
                            className="w-full border-0 focus:border rounded p-2"
                            required
                        />
                        <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{inputError.imageError}</div>
                    </div>

                    {/* Url */}
                    <div>
                        <label className="block mb-1 font-medium">Url</label>
                        <input
                            ref={urlRef}
                            defaultValue={selectedProject.url}
                            type="text"
                            className="w-full border-0 focus:border rounded p-2"
                        />
                    </div>

                    {/* Github */}
                    <div>
                        <label className="block mb-1 font-medium">GitHub Repository</label>
                        <input
                            ref={githubRef}
                            defaultValue={selectedProject.github}
                            type="text"
                            className="w-full border-0 focus:border rounded p-2"
                            required
                        />
                        <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{inputError.githubError}</div>
                    </div>

                    {/* Submit */}
                    <button
                        ref={buttonRef}
                        onClick={handleSubmit}
                        type="submit"
                        className="bg-blue-950 text-white py-2 rounded hover:bg-blue-800"
                    >
                        {selectedId === "" ? "Add" : "Update"}
                    </button>
                </div>

            </div>

        </div>
    );
}