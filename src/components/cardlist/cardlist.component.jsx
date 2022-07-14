import { Component } from "react";
import './cardlist.style.css'

class CardList extends Component{
    render(){
        const {Employees} = this.props;
        return(
            <div className="card-list">
                {Employees.map((Employees) =>{
                    const{id,name,email}= Employees;
                    return(
                    <div className="card-container" key={id}>
                        <img alt={`Employees ${Employees.name}`} src ={`https://robohash.org/${id}?set=set2`}></img>
                         <h2>{name}</h2>
                         <p>{email}</p>
                    </div>
                    // <h1 key={Employees.id}>{Employees.name}</h1>
                )})}
            </div>
        )
    }
}

export default CardList;