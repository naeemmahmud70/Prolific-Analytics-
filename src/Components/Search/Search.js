import React, { useState } from 'react';

const Search = () => {

    const [name, setName] = useState({ name: '' })
    console.log(name)

    const handleBlur = (e) => {
        const newName = { ...name };
        newName[e.target.name] = e.target.value;
        setName(newName)
    }

    return (
        <section className="bg-light p-3">
           {name.name?  <h1>{name.name}</h1>: <h1>Hello World</h1>}
            <div style={{ height: "100vh" }} className="row d-flex align-items-center justify-content-center">
                <form className="col-md-4 col-10" >
                    <div className="form-group ">
                        <input onBlur={handleBlur} defaultValue="Hello World" className="form-control" type="text" name="name" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Search;