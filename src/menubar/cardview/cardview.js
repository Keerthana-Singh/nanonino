import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardview.css';

export function Card(){

    const[product,setProduct]=useState([])

    useEffect(()=>{

        fetch("http://localhost:3000/data.json")
        .then(response=>response.json())
        .then(data=>setProduct(data))
        

    })

    return(
        <>
        <div className="container"> 
            <div className="row">

            
            {product.map((value,index)=>(
                <>
                    <div className="card col-lg-3">
                    <div className="card-header">
                        <h1>{value.timeing}</h1>

                    </div>
                    <div className="card-body">

                    </div>
                    <div className="card-footer">

                    </div>
                </div>
                </>
            ))
            
        }
        </div>
        </div>
           
        </>

    );
}