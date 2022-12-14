import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, Label, Input, Hyper } from './Modelstyles';
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

        fetch("http://localhost:5000/upload", {
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
    <Section nopadding id="Model">
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
              <Label>
              <input
                id="upload"
                type="submit"
                value="Upload"
                className="btn btn-primary btm-block mt-4 bg-teal-200 text-black rounded-lg px-5 py-3"
                hidden
              />
              <label htmlFor='upload'>Upload</label>
              </Label>
            </form>
            {prediction && <h1>{prediction.message}</h1>}
            <Hyper>
            
            {prediction &&  <a href={prediction.links}><font color="white" size='3'>Link </font> </a>}
            </Hyper>
          </div>
        </section>
    </Section>
    
    );
};

export default Model;