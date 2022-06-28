import React, { Component } from 'react';
import NavBar from '../ui/NavBar';
import EquipmentModel from '../data/equipmentModel.json';


function EquipamentoModel() {
    return(
        <div className="table table-hover">

            <NavBar />
            <table className="table table-hover">
            <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">ID</th>
    </tr>
  </thead>
  </table>
      
  
    {
     EquipmentModel && EquipmentModel.map( equipmentModel => {
    return (
    <div>
        <table className="table table-hover">
       
        
        <tbody>
        <tr key={equipmentModel.id}>
   <th scope="row">{equipmentModel.name}</th>
   <td>{equipmentModel.id}</td>
 </tr>
 </tbody>
 </table>
        </div>
        )
        })}
 
             </div>
    )
}

export default EquipamentoModel;
