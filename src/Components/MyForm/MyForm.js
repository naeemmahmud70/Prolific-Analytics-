import React from 'react';
import './MyForm.css'
import { useForm } from "react-hook-form";

const MyForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset();
    };


    return (
        <section style={{ height: "100vh" }} className="p-5 bg-light">
            <div className="row d-flex  justify-content-center">
                <form className="col-md-6 col-10 shadow p-4 rounded" onSubmit={handleSubmit(onSubmit)} >

                    <h5>Email:</h5>
                    <div className="form-group">
                        <input className="form-control" type="email" placeholder="Type your email here" {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">Email field is required</span>}
                    </div>

                    <h5 className="mt-3">Name:</h5>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Type your name here" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">Name field is required</span>}
                    </div>

                    <h5 className="mt-3">Skills:</h5>
                    <div class="form-check form-check-inline">
                        <input {...register("skill", { required: true })} class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Css"></input>
                        <label class="form-check-label" for="inlineCheckbox1">Css</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input {...register("skill")} class="form-check-input" type="checkbox" id="inlineCheckbox1" value="JavaScript"></input>
                        <label class="form-check-label" for="inlineCheckbox1">JavaScript</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input {...register("skill")} class="form-check-input" type="checkbox" id="inlineCheckbox1" value="React"></input>
                        <label class="form-check-label" for="inlineCheckbox1">React</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input {...register("skill")} class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Figma"></input>
                        <label class="form-check-label" for="inlineCheckbox1">Figma</label>
                    </div>
                    {errors.skill && <span className="text-danger">Skills field is required</span>}

                    <h5 className="mt-3">Gender:</h5>
                    <div class="form-check">
                        <input {...register("Gender")} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="male" checked></input>
                        <label class="form-check-label" for="exampleRadios1">Male</label>
                    </div>
                    <div class="form-check">
                        <input {...register("Gender")} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="female"></input>
                        <label class="form-check-label" for="exampleRadios2">Female</label>
                    </div>
                    <div class="form-check">
                        <input {...register("Gender")} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="other"></input>
                        <label class="form-check-label" for="exampleRadios2">Other</label>
                    </div>

                    <div className="form-group mt-3">
                        <input className="submit-button" type="submit" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MyForm;