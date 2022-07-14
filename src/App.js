import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import CardList from './components/cardlist/cardlist.component';
import SearchBox from './components/search/searchbox.component';


class App extends Component  {
   constructor(){
     super();

     this.state = {
       Employees: [],
       searchField: ''
      
     };
    }
     componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
       .then((response)=>response.json() )
       .then((users) => 
       this.setState(
         ()=> {
           return{Employees :users};
      },
      () =>{
        console.log(this.state)
      }
      ))
     }

     onSearchChange =(event) => {
      const searchField = event.target.value.toLocaleLowerCase();
      
        this.setState(()=>{
          return {searchField};
        });
    };
     
  render () {
     
      const {Employees,searchField} = this.state;
      const {onSearchChange} = this;


    const filterEmployees = Employees.filter((Employees) => {
      return Employees.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <SearchBox 
        className ='Employees-search-Box'
        onChangeHandler = {onSearchChange} 
        placeholder ='Search Employees'/>
        {/* <input className='search-box' type='search' placeholder='search employees'
         onChange={searchField}
         /> */}
        {/* {{
          filterEmployees.map((Employees) =>{
           return<div key ={Employees.id}>
           <h1>{Employees.name}</h1></div>
        }) } */}
      
        
        <CardList Employees ={filterEmployees}/>
      
      </div>
  
      );

  }
 
}

export default App;
