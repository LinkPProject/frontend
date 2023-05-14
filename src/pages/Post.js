import React from 'react'
import { useState } from 'react';
import axios from "axios";

const Post = () => {

    let formData = new FormData();

    const [companyName, setCompanyName] = useState("");
    const [designation, setDesignation] = useState("");
    const [description, setDescription] = useState("");
    const [salaryRangeFrom, setSalaryRangeFrom] = useState("");
    const [salaryRangeTo, setSalaryRangeTo] = useState("");
    const [lastDateToApply, setLastDateToAplly] = useState("");
    const [fixSalary, setFixSalary] = useState("");
    const [image, setImage] = useState({});
    const [jobLink, setJobLink] = useState('');


    const handleFileUpload = (e) => {
        console.log(e.target.files[0], "image Uploaded")
        setImage(e.target.files[0])
    }

    let handleSubmit = async (e) => {
        e.preventDefault(companyName,);
        try {

            formData.append("companyName",companyName);
            formData.append("description",description);
            formData.append("designation",designation);
            formData.append("lastDateToApply",lastDateToApply);
            formData.append("salaryRange",salaryRangeFrom + " - " + salaryRangeTo);
            formData.append("salary",Number(fixSalary));
            formData.append("image",image);
            formData.append("jobLink",jobLink)
            
            const createPost = axios.post('http://localhost:8080/api/job/job',
                formData
            );

            let createPostJson = await createPost.json();
            if (createPostJson.status === 200) {
                console.log("post Created Successfully")
            } else {
                console.log("some error Occured")
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div class="flex items-center justify-center mt mx-10">
            <form class="w-full max-w-lg" onSubmit={handleSubmit}>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="company-name">
                            Company-name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="company-name" type="text" placeholder="Google" value={companyName} onChange={(e) => setCompanyName(e.target.value)}></input>
                        {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="designation">
                            Designation
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="designation" type="text" placeholder="Software-Engineer" value={designation} onChange={(e) => setDesignation(e.target.value)}></input>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="company-name">
                            Description
                        </label>
                        <textarea id="description" rows="8" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Description about the opening..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="fix-salary">
                            Fix Salary
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="fix-salary" type="text" placeholder="500000(Optional)" value={fixSalary} onChange={(e) => setFixSalary(e.target.value)}></input>
                        {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="last-date-to-apply">
                            Last Date to Apply
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-date-to-apply" type="text" placeholder="dd/mm/yy" value={lastDateToApply} onChange={(e) => setLastDateToAplly(e.target.value)}></input>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="salary-range-from">
                            Salary Range From
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="salary-range-from" type="text" placeholder="450000" value={salaryRangeFrom} onChange={(e) => setSalaryRangeFrom(e.target.value)}></input>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="salary-range-to">
                            Salary Range To
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="salary-range-to" type="text" placeholder="450000" value={salaryRangeTo} onChange={(e) => setSalaryRangeTo(e.target.value)}></input>
                    </div>
                </div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-6 mb-2" for="salary-range-to">
                    Upload Image
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-10" id="file_input" type="file" onChange={handleFileUpload}></input>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="company-name">
                            Job Link
                        </label>
                        <input id="jobLink" rows="8" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="https://wipro.com/112xdf" type='text' value={jobLink} onChange={(e) => setJobLink(e.target.value)}></input>
                        {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                    </div>
                </div>
                <div className='flex items-center justify-center mt-8 mb-8'>
                    <button className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4'>Create</button>
                </div>

            </form>
        </div>

    )
}

export default Post