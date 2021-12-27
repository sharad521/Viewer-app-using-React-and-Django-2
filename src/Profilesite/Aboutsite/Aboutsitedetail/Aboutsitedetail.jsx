import React, { Component } from 'react';
import './style.css'
class Aboutsitedetail extends React.Component {
    constructor(props){
        super(props);
        this.state={
          todoList:[],
          activeItems:{
            id: null,
            FirstName: '',
            LastName: '',
            address:'',
            age:'',
            gender:'',
            qualification:'',
            birthplace:'',
            maritalstatus:'',
            interestinggame:'',
            interestingcountry:''
          }
        }
        this.getCookie = this.getCookie.bind(this)
      this.fetchtasks = this.fetchtasks.bind(this)
      this.deleteItems = this.deleteItems.bind(this)


        

    }
    getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
      }
      componentWillMount(){
        this.fetchtasks()
      }
      // to get data
      fetchtasks(){
        fetch('http://127.0.0.1:8000/about/')
        .then(response=>response.json())
        .then(data=> 
            this.setState({
              todoList:data
            })
          )
      }
      deleteItems(task){
        var csrftoken= this.getCookie('csrftoken')
        fetch(`http://127.0.0.1:8000/about/${task.id}/`,{
          method: 'DELETE',
          headers:{
            'Content-type': 'application/json',
            'X-CSRFToken': csrftoken
          },
        })
        .then(response=>{
          this.fetchtasks()
         
        })
      }







    render() { 
        var tasks = this.state.todoList 
        var self = this
        return (
            <div className='infobox'> 
            {tasks.map((task,index)=>{
              return(
                <div key={index}>
                  <div className='detailbox'>
                  <span>First Name:{task. FirstName}</span>
                  <span>Last Name: {task. LastName}</span>
                  <span>Age: {task. age}</span>
                  <span>Address: {task. address}</span>
                  <span>Gender: {task. gender}</span>
                  <span>Qualification: {task. qualification}</span>
                  <span>Birthplace: {task. birthplace}</span>
                  <span>Marital Status: {task. maritalstatus}</span>
                  <span>Favourite Sport: {task. interestinggame}</span>
                  <span>Favourite Country: {task. interestingcountry}</span>
                  <button className='deleteabout' onClick={()=> self.deleteItems(task)}>Remove information</button>
                  </div>
                </div>
              )
              
              
            })}
          </div>
        );
    }
}
 
export default Aboutsitedetail;