import React, { Component } from 'react';
import NavBar from '../ui/NavBar';

export default class Estado extends Component {

     constructor() {
          super();
          this.state ={
               estado: [
                    {
                        id: "0808344c-454b-4c36-89e8-d7687e692d57",
                        name: "Operando",
                        color: "#2ecc71"
                    },
                    {
                        id: "baff9783-84e8-4e01-874b-6fd743b875ad",
                        name: "Parado",
                        color: "#f1c40f"
                    },
                    {
                        id: "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f",
                        name: "Manutenção",
                        color: "#e74c3c"
                    }
                ]
          }
     }



     render() {
        return (

            <div>
           <NavBar />
           <table className="table table-hover">
           <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Estado</th>
      <th scope="col">Cor</th>
    </tr>
  </thead>
  <tbody>
     {this.state.estado.map((data, index) => {
          return (
   <tr key={data.id}>
   <th scope="row">{data.id}</th>
   <td>{data.name}</td>
   <td>{data.color}</td>
   <td><button type="button" className="btn btn-danger btn-sn">Remover</button></td>
 </tr>
          )
     } )}
 
  </tbody>
</table>
                </div>
        );
     }
}