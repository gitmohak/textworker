import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function Textform(props) {
    let replaceFrom = document.getElementById("replaceFrom");
    let replaceTo = document.getElementById("replaceTo");
    let replaceBtn = document.getElementById("replaceBtn");

    const [text, setText] = useState("");

    const myOnChange = (event) => {
        setText(event.target.value);
    }

    const myUpFunc = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase","success");
    }

    const myLoFunc = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase","success");
    }

    const myClear = () => {
        setText("");
        props.showAlert("Textbox has been cleared","success");
    }

    const myReplace = () => {
        replaceBtn.hidden = false;
        replaceFrom.hidden = false;
        replaceTo.hidden = false;
        document.getElementById("hideRep").hidden = false;
    }

    const myReplaceAction = () => {
        setText(text.replaceAll(replaceFrom.value, replaceTo.value));
        props.showAlert("Replacement process is complete","success");
    }

    const hideReplace = () => {
        replaceBtn.hidden = true;
        replaceFrom.hidden = true;
        replaceTo.hidden = true;
        document.getElementById("hideRep").hidden = true;
    }

    const wordLength = () => {
        if (text.match(/[\w]/g)){
            return text.trim().split(/[\s]+/g).length;
        }
        else{
            return 0;
        }
    }

    return (
        <>
            <div className={`container text-${props.modeValue === "light" ? "dark" : "light"}`}>
                <div className="mb-3">
                    <h1 className="my-3">{props.title}</h1>
                    <textarea className={`form-control mb-3 text-${props.modeValue === "light" ? "dark" : "light"} bg-${props.modeValue}`} rows="10" value={text} onChange={myOnChange}></textarea>

                    <button className={`btn btn-${props.mode2}`} onClick={myUpFunc}>Convert to Uppercase</button>
                    <button className={`btn btn-${props.mode2} ms-3`} onClick={myLoFunc}>Convert to Lowercase</button>
                    <button className={`btn btn-${props.mode2} ms-3`} onClick={myClear}>Clear</button>

                    <button className={`btn btn-${props.mode2} ms-3`} onClick={myReplace}>Replace Text</button><br />
                    <input id="replaceFrom" type="text" className={`mt-3 py-1 text-${props.modeValue === "light" ? "dark" : "light"} bg-${props.modeValue}`} hidden placeholder="From" />
                    <input id="replaceTo" type="text" className={`ms-3 py-1 text-${props.modeValue === "light" ? "dark" : "light"} bg-${props.modeValue}`} hidden placeholder="To" />
                    <button id="replaceBtn" className="btn btn-success ms-3" onClick={myReplaceAction} hidden>Replace</button>
                    <button id="hideRep" className="btn btn-danger ms-3" onClick={hideReplace} hidden>Hide Palette</button>
                </div>

                <h2 className="mt-5">Text Summary</h2>

                <p>{wordLength()} words and {text.length} characters</p>
                <p>{0.008 * wordLength()} minutes read</p>

                <h2>Preview</h2>
                <p>{wordLength()>0 ? text : "Write something in the above box to preview"}</p>
            </div>
        </>
    );
}

Textform.propTypes = {
    title: PropTypes.string.isRequired
}

Textform.defaultProps = { title: "set the title here" }