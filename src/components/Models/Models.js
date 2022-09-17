import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, Label, Input } from './Modelstyles';
import { useState } from "react";


const Model = () => {
    const [file, setFile] = useState();
    const [filename, setFileName] = useState("Choose File");
    const [prediction, setPrediction] = useState(null);

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        console.log(file);

        fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setPrediction(data);
        });
    };
    
    return (
    <Section nopadding id="Team">
    <SectionDivider />
    <br />
    <SectionTitle main>Get your roadmap</SectionTitle>
    <SectionText>Upload the document</SectionText>
    <section id="working">
          <div className="px-10">
            <form onSubmit={onSubmit}>
              <div className="custom-file">
              
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  onChange={onChange}
                  hidden
                />
              <Label>
                <label className="custom-file-label" htmlFor="customFile">
                  {filename}
                </label>
              </Label>
              </div>
              <br></br>
              <input
                type="submit"
                value="Upload"
                className="btn btn-primary btm-block mt-4 bg-teal-200 text-black rounded-lg px-5 py-3"
              />
            </form>
            {prediction && <h1>{prediction.message}</h1>}
          </div>
        </section>
    </Section>
    
    );
};

export default Model;