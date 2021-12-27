import React, { Component } from 'react';
import './styles.css'
class Homesite extends React.Component {
    constructor(props){
        super(props);
        this.state={
          todoList:[],
          activeItems:[{
            id: null,
            FirstName: '',
            LastName: '',
            address:'',
            age:'',
            content:'',
          }]
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
        fetch('http://127.0.0.1:8000/snippets/')
        .then(response=>response.json())
        .then(data=> 
            this.setState({
              todoList: data
            })
          )
      }
      deleteItems(task){
        var csrftoken= this.getCookie('csrftoken')
        fetch(`http://127.0.0.1:8000/snippets/${task.id}/`,{
          method: 'DELETE',
          headers:{
            'Content-type': 'application/json',
            'X-CSRFToken': csrftoken,
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
          
           <div className='mainhome'>
           <div>
            {tasks.map((task,index)=>{
              return(
                <div className='Homeframe' key={index}>
                  <div className='secondalign'>
                    <div className='firstalign'>
                      <div className='thirdalign'> 
                  <span className='Homename'>{task.FirstName}</span>
                  <span className='Homename'>{task.LastName}</span>
                  <span className='Homename'>({task.age})</span>
                  </div>
                  <span className='Content'>{task.address}</span>
                  </div>
                  <button className='delete' onClick={()=> self.deleteItems(task)}>Remove Post</button>
                  </div>
                  <span className='details'>{task.content}</span>
                  
                </div>
              )
              
              
            })}
           
          </div>
          <div className='bordermanaging'></div>
          </div>
        );
    }
}
 
export default Homesite;