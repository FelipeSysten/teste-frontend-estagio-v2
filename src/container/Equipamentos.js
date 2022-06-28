import React, { Component } from 'react';
import NavBar from '../ui/NavBar';
import Equipment from '../data/equipment.json';


function Equipamento() {
    return(
        <div>

            <NavBar />

            
      
  
    {
     Equipment && Equipment.map( equipament => {
    return (
    <div>
        <table className="table table-hover">
             <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nome</th>
      <th scope="col">Id Modelo</th>
    </tr>
  </thead>
        
        <tbody>
        <tr key={equipament.id}>
   <th scope="row">{equipament.id}</th>
   <td>{equipament.name}</td>
   <td>{equipament.equipmentModelId}</td>
   <td><button type="button" className="btn btn-danger btn-sn">Remover</button></td>
 </tr>
 </tbody>
 </table>
        </div>
        )
        })}
 
             </div>
    )
}

export default Equipamento;

