import React from 'react';
import { Link } from "react-router-dom";

const HomeCard = (props) => (
  
    <div className= " card-final">
   <div classNameName="col-6 col-sm-4">
      
        <div className="card" style={{width: '18rem' }}>
  <img src="https://hipsters.jobs/files/pictures/Logo%403x.jpg" className="card-img-top rounded mx-auto d-block" style={{paddingTop: '3px', width: '100px', height: '100px'}} alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <button className="btn btn-primary" onClick={props.action}> {props.title}</button>
  </div>
</div>

    </div>
     </div>
    
);

export default HomeCard;