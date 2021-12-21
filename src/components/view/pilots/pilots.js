import React from "react";
import { Link, Outlet } from "react-router-dom";
import {useEffect, useState} from 'react';


const getUrlId = (url) => {
    let numberPattern = /\d+/g;
    let id = url.match(numberPattern)
    return id;
}

export const Pilots = ({pilots, error, loading}) => {

    return(
       
            <div>
                {pilots.map( (pilot, index) => {
                    return(
                        <span key={index}>
                            {pilot.length !== 0 ? 
                                <span>
                                    <Link state={{
                                        st: getUrlId(pilot)
                                    }}  to={'people/' + getUrlId(pilot)} > {pilot}  </Link>
                                </span>
                            : <h5>No pilots found</h5>}
                            
                            {/* as a placeholder for child routes */}
                            <Outlet />

                        </span>
                    )
                })}
            </div>

    )
}