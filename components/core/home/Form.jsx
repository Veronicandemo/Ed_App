"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-dark border-l-brightYellow  border-2 border-solid h-[100%] text-white"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <label>First Of Client</label>
      <input {...register("firstName")} />
      {/* counry select */}
      <select {...register("country")}>
        <option value="female">Beginner</option>
        <option value="male">Intermediate</option>
        <option value="other">Professional</option>
      </select>
      <label>Skill Set:</label>
      <input {...register("skill set")} />

      <select {...register("level")}>
        <option value="female">Beginner</option>
        <option value="male">Intermediate</option>
        <option value="other">Professional</option>
      </select>

      <label>Gender Selection</label>
      <select {...register("country")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <label>Any other information:</label>
      <input {...register("any other information: ")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default Form;
