import React, { useState, useEffect } from 'react';
import cssColors from '../Datas/Colors';

function Border() {

    const [colors, setColors] = useState([]);
    const [color, setColor] = useState("");
    const [border, setBorder] = useState("");
    const [borderColor, setBorderColor] = useState("");
    const [borderRadius, setBorderRadius] = useState("");
    const [borderSize, setBorderSize] = useState("");

    // const url = 'https://www.colr.org/json/tag/cheese'

    // const FetchColors = async() => {    
    //     try {
    //       const response = await fetch(url);
    //       const Colors = await response.json();
    //       console.log(Colors);
    //       setColors(Colors);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };

    const FetchColors = async() => {    
        setColors(cssColors);
    };

    useEffect(() => {
        FetchColors();
    }, []);

    function changeCode(){
        document.getElementById("code").value = document.getElementById("box").outerHTML.substring( document.getElementById("box").outerHTML.indexOf("padding-top") + 16, document.getElementById("box").outerHTML.indexOf("</div>") -2)
    }

    return(
        <div className="row" style={{paddingLeft: "20%", paddingTop:"5%"}}>
            <div className="col-md-4">
                <select id="cmbColor" className="form-select" aria-label="Renk" style={{width:"80%"}} onChange={e => {setColor(e.target.value)}}>
                        <option value="">Renk</option>
                        {colors.map((color)=> {
                            return(
                                <option value={color} key={color}>{color}</option>
                            )
                        })}
                </select>
                <br/>
                <select id="cmbBorder" className="form-select" aria-label="Border" style={{width:"80%"}} onChange={e => {setBorder(e.target.value)}}>
                    <option value="">Border</option>
                    <option value="dotted">dotted</option>
                    <option value="dashed">dashed</option>
                    <option value="solid">solid</option>
                    <option value="double">double</option>
                    <option value="groove">groove</option>
                    <option value="ridge">ridge</option>
                    <option value="inset">inset</option>
                    <option value="outset">outset</option>
                    <option value="none">none</option>
                    <option value="hidden">hidden</option>
                </select>    
                            
                <br/>
                <select id="cmbBorderRadius" className="form-select" aria-label="Border-Radius" style={{width:"80%"}} onChange={e=> {setBorderRadius(e.target.value)}}>
                        <option value="">Border-Radius</option>
                        <option value="25%">25%</option>
                        <option value="50%">50%</option>
                        <option value="25px">25px</option>
                        <option value="50px">50px</option>
                </select> 
                <br/>
                <select id="cmbBorderColor" className="form-select" aria-label="Renk" style={{width:"80%"}} onChange={e => {setBorderColor(e.target.value)}}>
                        <option value="">Border Rengi</option>
                        {colors.map((color)=> {
                            return(
                                <option value={color} key={color}>{color}</option>
                            )
                        })}
                </select>
                <br/>
                <input type="number" id="borderSize" name="points" step="1" className = "form-control" placeholder="Border Size" style={{width:"80%"}} onChange={e => {setBorderSize(e.target.value + "px")}}/>
                <br/>
                <button type="button" className="btn btn-success" onClick={changeCode}>Kodu Al</button>   
            </div> 
            <div className="col-md-8">        
                <div id="box" style={{width: "70%",paddingTop:"5%", backgroundColor: color, border: border + " " + borderSize + " " + borderColor, borderRadius: borderRadius}}>
                </div>
                <br/>
                <div>
                    <textarea className="form-control" style={{width:"70%", height: "100px", backgroundColor: "lightgray", resize:"none"}} id="code" readOnly={true} placeholder=""></textarea>
                </div>
            </div>
        </div>  
    );
}

export default Border;