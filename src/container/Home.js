import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import { useNavigate } from "react-router-dom";
import App from '../App';



export default class Home extends Component {
      
   
       
    
        

    homeCardReleases = {
        title: 'Posições dos equipamentos',
        text: 'Exibir no mapa os equipamentos nas suas posições mais recentes.',
        action: () =>  alert('Verifique no Mapa')
    }
    homeCardBacklog = {
        title: 'Estado do equipamento',
        text: ' Estado mais recente dos equipamentos.',
        action: () => alert('Operando: Verde | Parado: Vermelho | Manutenção: Amarelo')
    }
    homeCardSprints = {
        title: 'Histórico de estados',
        text: 'Visualização do histórico de estados de um equipamento.',
        action: () => alert('Verifique Em Equipamentos > Estados')
    }


    render() {
        return (
        <div className="container text-center">
            <div className="row">
                <HomeCard title={this.homeCardReleases.title}
                text={this.homeCardReleases.text}
                action={this.homeCardReleases.action} /> 
               
                <HomeCard {...this.homeCardBacklog} />
                <HomeCard {...this.homeCardSprints} />

            
                </div>

        </div>
        );
    }


}

export function AppWitRouter(props){
    const navigate = useNavigate()
    return (<App navigate={navigate}></App>)
}