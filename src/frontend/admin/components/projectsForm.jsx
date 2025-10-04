import {useEffect, useRef, useState} from "react";

export default function ProjectsForm() {

    const [fetchProjects, setFetchProjects] = useState(null);
    const [selectedProject, setSelectedProject] = useState({});
    const [selectedId, setSelectedId] = useState("");
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


        const formData = new FormData();
        const title = titleRef.current.value;
        const date  = dateRef.current.value;
        const description = descriptionRef.current.value;
        const image = imageRef.current.files[0];
        const url = urlRef.current.value;
        const github = githubRef.current.value;


        if (title.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                titleError: "Title Required"
            }))
        }else {
            formData.append('title', title);
        }

        if (date.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                dateError: "Date Required"
            }))
        }else {
            formData.append('date', date);
        }

        if (description.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                descriptionError: "Description Required"
            }))
        }else {
            formData.append('description', description);
        }

        if (image.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                imageError: "Image Required"
            }))
        }else {
            formData.append('image', image);
        }

        formData.append('url', url);

        if (github.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                githubError: "GitHub Repository Required"
            }))
        }else {
            formData.append('github', github);
        }

        if (title !== "" && date !== "" && description !== "" && image !== "" && github !== "") {
            var link = "";
            const type = buttonRef.current.textContent;
            formData.append('type', type);

            switch (type) {
                case "Add": link = "http://localhost/portfolio/inproject.php";break;
                case "Update": link = `http://localhost/portfolio/inproject.php?id=${selectedId}`;break;
            }

            if (link !== "") {
                fetch(link, {
                    method: "POST",
                    body: formData
                })
                    .then((response) => response.json())
                    .then((response) => {
                        setMsg(response[0])
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
            <div className='text-green-500 m-0 p-0 font-semibold text-sm italic'>{msg.result}</div>
            <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{msg.error}</div>

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
                        className="bg-blue-950 text-white py-2 rounded hover:bg-blue-800 cursor-pointer"
                    >
                        {selectedId === "" ? "Add" : "Update"}
                    </button>
                </div>

            </div>

        </div>
    );
}