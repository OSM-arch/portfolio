import {useEffect, useRef, useState} from "react";

export default function PersonalInfoForm() {

    const [fullname, setFullname] = useState("");
    const [dob, setDob] = useState(""); // date of birth
    const [nationality, setNationality] = useState("");
    const [photo, setPhoto] = useState("");
    const [cv, setCv] = useState("");

    const [inputError, setInputError] = useState({
        fullnameError: "", dobError: "", nationalityError: "", photoError: "", cvError: ""
    });
    const [msg, setMsg] = useState("");

    const [fetchData, setFetchData] = useState(null);

    const fullnameRef = useRef(null);
    const dobRef = useRef(null);
    const nationalityRef = useRef(null);
    const photoRef = useRef(null);
    const cvRef = useRef(null);


    // Get data
    useEffect(() => {
        var url = "http://localhost/portfolio/getUser.php";

        fetch(url)
        .then((response) => response.json())
        .then((data) => setFetchData(data))
        .catch(err => console.log("Error fetching User Data : ", err));

    }, []);

    // Send data to backend
    const handleSubmit = () => {

        setInputError({
            fullnameError: "", dobError: "", nationalityError: "", photoError: "", cvError: ""
        });
        setMsg("");

        setFullname(fullnameRef.current.value);
        if (fullnameRef.current.value.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                fullnameError: "Fullname Required"
            }))
        }

        setDob(dobRef.current.value);
        if (dobRef.current.value.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                dobError: "Date of birth Required"
            }))
        }

        setNationality(nationalityRef.current.value);
        if (nationalityRef.current.value.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                nationalityError: "Nationality Required"
            }))
        }

        setPhoto(photoRef.current.value);
        if (photoRef.current.value.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                photoError: "Photo Required"
            }))
        }

        setCv(cvRef.current.value);
        if (cvRef.current.value.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                cvError: "Cv Required"
            }))
        }

        if (fullname !== "" && dob !== "" && nationality !== "" && photo !== "" && cv !== "") {
            var url = "http://localhost/portfolio/setUser.php";
            var headers = {
                "Accept" : "application/json",
                "Content-type" :  "application/json"
            };
            var data = {
                fullname: fullname,
                dob: dob,
                nationality: nationality,
                photo: photo,
                cv: cv
            };

            fetch(url, {
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

    if (!fetchData) return <p>Loading...</p>

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
            <div className='text-green-500 m-0 p-0 font-semibold text-sm italic'>{msg}</div>
            <div className="flex flex-col gap-4">

                {/* Full Name */}
                <div>
                    <label className="block mb-1 font-medium">Full Name</label>
                    <input
                        ref={fullnameRef}
                        type="text"
                        name="fullname"
                        defaultValue={fetchData.fullname}
                        className="w-full border-0 focus:border rounded p-2"
                        required
                    />
                    <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{inputError.fullnameError}</div>
                </div>

                {/* Date of Birth */}
                <div>
                    <label className="block mb-1 font-medium">Date of Birth</label>
                    <input
                        ref={dobRef}
                        type="date"
                        name="dob"
                        defaultValue={fetchData.dob}
                        className="w-full border-0 focus:border rounded p-2"
                        required
                    />
                    <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{inputError.dobError}</div>
                </div>

                {/* Nationality */}
                <div>
                    <label className="block mb-1 font-medium">Nationality</label>
                    <input
                        ref={nationalityRef}
                        type="text"
                        name="nationality"
                        defaultValue={fetchData.nationality}
                        className="w-full border-0 focus:border rounded p-2"
                        required
                    />
                    <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{inputError.nationalityError}</div>
                </div>

                {/* Photo Upload */}
                <div>
                    <label className="block mb-1 font-medium">Upload Photo</label>
                    <input
                        ref={photoRef}
                        type="file"
                        name="photo"
                        accept="image/*"
                        className="w-full border-0 focus:border rounded p-2"
                        required
                    />
                    <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{inputError.photoError}</div>
                </div>

                {/* CV Upload */}
                <div>
                    <label className="block mb-1 font-medium">Upload CV</label>
                    <input
                        ref={cvRef}
                        type="file"
                        name="cv"
                        accept=".pdf,.doc,.docx"
                        className="w-full border-0 focus:border rounded p-2"
                        required
                    />
                    <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{inputError.cvError}</div>
                </div>

                {/* Submit */}
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-blue-950 text-white py-2 rounded hover:bg-blue-800"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}