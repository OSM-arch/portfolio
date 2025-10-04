export default function AboutForm() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <div className='text-green-500 m-0 p-0 font-semibold text-sm italic'>{}</div>
            <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{}</div>
            <div className="flex flex-col gap-4">

                {/* Summary */}
                <div>
                    <label className="block mb-1 font-medium">Summary</label>
                    <textarea
                        name="summary"
                        className="w-full h-max border-0 focus:border rounded p-2"
                        required
                    ></textarea>
                    <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{}</div>
                </div>

                {/* Educations/Certifications */}
                <div>
                    <label className="block mb-1 font-medium">Educations/Certifications</label>
                    <select
                        className='w-full border-0 focus:border rounded p-2'>
                        <option value="">----</option>
                    </select>
                    <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{}</div>
                </div>

                {/* Title */}
                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        type="text"
                        className="w-full border-0 focus:border rounded p-2"
                        required
                    />
                    <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{}</div>
                </div>

                {/* Start */}
                <div>
                    <label className="block mb-1 font-medium">Start</label>
                    <input
                        type="text"
                        className="w-full border-0 focus:border rounded p-2"
                        required
                    />
                    <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{}</div>
                </div>

                {/* End */}
                <div>
                    <label className="block mb-1 font-medium">End</label>
                    <input
                        type="text"
                        className="w-full border-0 focus:border rounded p-2"
                        required
                    />
                    <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{}</div>
                </div>

                {/* Where did you take it */}
                <div>
                    <label className="block mb-1 font-medium">University/Course Name</label>
                    <input
                        type="text"
                        className="w-full border-0 focus:border rounded p-2"
                    />
                    <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{}</div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="bg-blue-950 text-white py-2 rounded hover:bg-blue-800 cursor-pointer"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}