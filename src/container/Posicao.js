import React, { Component } from 'react';
import NavBar from '../ui/NavBar';
import EquipmentPositionHistory from '../data/equipmentPositionHistory.json';


function Posicao() {
    return(
        <div>

            <NavBar />

            
      
  
    {
     EquipmentPositionHistory && EquipmentPositionHistory.map( equipmentPositionHistory => {
    return (
     <div>

     {
         equipmentPositionHistory && equipmentPositionHistory.positions.map( data => {
         return (
          <div>
    
        <table className="table table-hover">
             <thead>
    <tr>
      <th scope="col">Data</th>
      <th scope="col">Latitude</th>
      <th scope="col">Longitude</th>
    </tr>
  </thead>

  
        <tbody>
        <tr key={equipmentPositionHistory.id}>
   <th scope="row">{data.date}</th>
   <td>{data.lat}</td>
   <td>{data.lon}</td>
   <td><button type="button" className="btn btn-danger btn-sn">Ver no Mapa</button></td>
 </tr>
 </tbody>
 </table>
        </div>
        )})}
      </div>  )
        })}
 
             </div>
    )
}

export default Posicao;