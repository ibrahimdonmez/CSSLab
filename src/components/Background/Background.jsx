import React, { useState, useEffect } from 'react';

function Background() {

    const [backgroundImage, setBackgroundImage] = useState("");
    const [backgroundRepeat, setBackgroundRepeat] = useState("no-repeat");
    const [backgroundPosition, setBackgroundPosition] = useState("center");
    const [borderSize, setBorderSize] = useState("");

    function changeCode(){
        document.getElementById("code").value = document.getElementById("box").outerHTML.substring( document.getElementById("box").outerHTML.indexOf("padding-top") + 16, document.getElementById("box").outerHTML.indexOf("</div>") -2)
    }

    return(
        <div className="row" style={{paddingLeft: "20%", paddingTop:"5%"}}>
            <div className="col-md-4">
                <select id="cmbBackgroundImage" className="form-select" aria-label="BackgroundImage" style={{width:"80%"}} onChange={e => {setBackgroundImage(e.target.value)}}>
                    <option value="">Background image</option>
                    <option value="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=85&w=167">Image1</option>
                    <option value="https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=85&w=167">Image2</option>
                    <option value="https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=85&w=167">Image3</option>
                    <option value="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress\&cs=tinysrgb\&dpr=2\&h=85\&w=167">Image4</option>
                </select>    
                            
                <br/>
                <select id="cmbBackgroundRepeat" className="form-select" aria-label="BackgroundRepeat" style={{width:"80%"}} onChange={e=> {setBackgroundRepeat(e.target.value)}}>
                        <option value="">Background Repeat</option>
                        <option value="repeat">repeat</option>
                        <option value="no-repeat">no-repeat</option>
                </select> 
                <br/>
                <select id="cmbBackgroundPosition" className="form-select" aria-label="BackgroundPosition" style={{width:"80%"}} onChange={e=> {setBackgroundPosition(e.target.value)}}>
                        <option value="">Background Position</option>
                        <option value="top">top</option>
                        <option value="bottom">bottom</option>
                        <option value="center">center</option>
                        <option value="left">left</option>
                        <option value="left top">left top</option>
                        <option value="left bottom">left bottom</option>
                        <option value="right">right</option>
                        <option value="right top">right top</option>
                        <option value="right bottom">right bottom</option>
                </select> 
                <br/>
                <button type="button" className="btn btn-success" onClick={changeCode}>Kodu Al</button>   
            </div> 
            <div className="col-md-8">        
                <div id="box" style={{width: "100%", height: "100%", paddingTop:"5%", backgroundImage: "url(" + backgroundImage + ")", backgroundRepeat: backgroundRepeat, backgroundPosition: backgroundPosition}}>
                </div>
                <br/>
                <div>
                    <textarea className="form-control" style={{width:"70%", height: "100px", backgroundColor: "lightgray", resize:"none"}} id="code" readOnly={true} placeholder=""></textarea>
                </div>
            </div>
            <br/>
        </div>  
    );
}

export default Background;