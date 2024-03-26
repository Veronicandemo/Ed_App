"use client";
import React, { useEffect, useState } from "react";
import TableData from "./Table";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
const countryData = "https://grito-backend.onrender.com/countries.json";

const AddTalent = () => {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch(countryData);
        const data = await res.json();
        const countryOptions = data.map((country) => ({
          value: country.callingCodes,
          label: country.name,
        }));
        console.log("Country Options:", countryOptions);

        setCountries(countryOptions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInfo();
  }, []);

  const onSubmit = (dat) => {
    setData((data) => [...data, dat]);
  };
  function deleteItem(name) {
    setData((data) => data.filter((item) => item.fullName !== name));
  }
  return (
    <div className="flex items-center justify-center">
      {/* <SideNav /> */}
      <div className="bg-gray-100 flex items-start justify-between gap-6 mx-auto max-w-8xl h-[90%] py-20 px-12 lg:px-24 shadow-xl mb-24">
        <TableData data={data} onSubmit={deleteItem} />
        <form className="" method="get" onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white shadow-md  rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-brightYellow text-xs font-bold mb-2"
                  htmlFor="fname"
                >
                  Full Name
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 focus:outline-brightYellow rounded py-3 px-4 mb-3"
                  id="fname"
                  type="text"
                  placeholder="John Doe"
                  {...register("fullName", { required: true })}
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="uppercase tracking-wide text-brightYellow text-xs font-bold mb-2"
                  htmlFor="title"
                >
                  Title*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border focus:outline-brightYellow  border-gray-200 rounded py-3 px-4 mb-3"
                  id="title"
                  type="text"
                  placeholder="Software Engineer"
                  {...register("title", { required: true })}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  htmlFor="formFileLg"
                  className="uppercase tracking-wide text-brightYellow text-xs font-bold mb-2"
                >
                  Upload Image
                </label>
                <input
                  className="relative m-0 block w-full focus:outline-brightYellow  min-w-0 flex-auto cursor-pointer rounded border border-solid border-gray-200 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  id="formFileLg"
                  type="file"
                  {...register("File")}
                />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className="uppercase tracking-wide text-brightYellow text-xs font-bold mb-2"
                  htmlFor="portfolio-link"
                >
                  Portfolio Link
                </label>
                <input
                  className="w-full bg-gray-200 focus:outline-brightYellow  text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="portfolio-link"
                  type="text"
                  placeholder="http://...."
                  {...register("Portfolio", { required: true })}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className="uppercase tracking-wide text-brightYellow text-xs font-bold mb-2"
                  htmlFor="skillSet"
                >
                  Skill Set
                </label>
                <textarea
                  className="w-full bg-gray-200 focus:outline-brightYellow  text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="skillset"
                  type="text"
                  placeholder="Enter Skill set"
                  {...register("skillset")}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-brightYellow text-xs font-bold mb-2"
                  htmlFor="location"
                >
                  Location*
                </label>
                <div>
                  {/* <select
                    className="w-full bg-gray-200 border focus:outline-brightYellow  border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="location"
                  >
                    <option>Kenya</option>
                    <option>Naigeria</option>
                    <option>Tanzania</option>
                  </select> */}
                  <Controller
                    control={control}
                    name="branch_id"
                    render={({ field }) => (
                      <div className="w-full bg-gray-200 border focus:outline-brightYellow  border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded">
                        {/* <label htmlFor="select">Country:</label> */}
                        <Select
                          options={countries}
                          placeholder="Select Country"
                          onChange={(val) => {
                            field.onChange(val.value);
                          }}
                          control={control}
                        />
                      </div>
                    )}
                  />
                </div>
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="uppercase tracking-wide text-brightYellow text-xs font-bold mb-2"
                  htmlFor="job-type"
                >
                  Level
                </label>
                <div>
                  <select
                    className="w-full bg-gray-200 border focus:outline-brightYellow  border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="job-type"
                  >
                    <option {...register("level", { required: true })}>
                      Beginner
                    </option>
                    <option {...register("leve;", { required: true })}>
                      Intermediate
                    </option>
                    <option {...register("level", { required: true })}>
                      Professional
                    </option>
                  </select>
                </div>
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="uppercase tracking-wide text-brightYellow text-xs font-bold mb-2"
                  htmlFor="department"
                >
                  Gender
                </label>
                <div>
                  <select
                    className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="department"
                  >
                    <option {...register("gender", { required: true })}>
                      Male
                    </option>
                    <option {...register("gender", { required: true })}>
                      Female
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="-mx-3 md:flex mt-2">
              <div className="md:w-full px-3">
                <button
                  type="submit"
                  className="md:w-full bg-brightYellow text-white font-bold py-2 px-4 border-b-4   hover:border-gray-100 rounded-full"
                >
                  Add Talent
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddTalent;
