import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './menubar.css';

export function Menu(){

    return(
        
        <>
        <div className="container board ">
            <div className="row"> 

                <div className="col-lg-4 bg-success ">
                    <button className="col-lg-12 board1 boderr bg-success"> Find The Best Deal</button>
                </div>
                <div className="col-lg-4">
                    <button className="col-lg-12 board1 boderr">Make a booking</button>

                </div>
                <div className="col-lg-4">
                    <button className="col-lg-12 board1 boderr">Confirm your order</button>

                </div>
            </div>

        </div>
        
        </>
    );
}