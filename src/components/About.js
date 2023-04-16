import React from "react";

export default function About(props) {
    let myColor = props.mode === "light" ? "dark" : "light";

    return (
        <div className="container">
            <div className="accordion" id="accordionExample" >
                <h1 className={`text-${myColor} my-4`}>About</h1>
                <div className={`accordion-item bg-${props.mode} text-${myColor}`} >
                    <h2 className="accordion-header" id="headingOne" >
                        <button className={`accordion-button text-${myColor} bg-${props.mode} ar${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            <strong>TextWorker is stylish</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textworker will provide great styling for the website. This will enhance your lifestyle productivity greatly.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${myColor}`} >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button collapsed text-${myColor} bg-${props.mode} ar${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                            <strong>Text is valuable</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Within the field of literary criticism, "text" also refers to the original information content of a particular piece of writing; that is, the "text" of a work is that primal symbolic arrangement of letters as originally composed, apart from later alterations, deterioration, commentary, translations, paratext, etc. Therefore, when literary criticism is concerned with the determination of a "text", it is concerned with the distinguishing of the original information content from whatever has been added to or subtracted from that content as it appears in a given textual document - that is, a physical representation of text.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${myColor}`} >
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button collapsed text-${myColor} bg-${props.mode} ar${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                            <strong>Origin of Text</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            The word text has its origins in Quintilian's Institutio Oratoria, with the statement that "after you have chosen your words, they must be weaved together into a fine and delicate fabric", with the Latin for fabric being textum.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}