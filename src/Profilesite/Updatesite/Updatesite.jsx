import React, { Component } from 'react';
import './styles.css'
class Updatesite extends React.Component {
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
            content:''
          }
        }
      this.getCookie = this.getCookie.bind(this)
      this.fetchtasks = this.fetchtasks.bind(this)
    
      this.handlchange = this.handlchange.bind(this)
      this.handlesubmit = this.handlesubmit.bind(this)
      this.handlchangeL = this.handlchangeL.bind(this)
      this.handlchangea = this.handlchangea.bind(this)
      this.handlchangeage = this.handlchangeage.bind(this)
      this.handlchangecontent = this.handlchangecontent.bind(this)
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
              todoList:data
            })
          )
      }

      handlchange(e){
        var name = e.target.name
        var value = e.target.value
        console.log('Name:',name)
        console.log('Value:',value)
        this.setState({
          activeItems:{
            ...this.state.activeItems,
            FirstName:value
          }
        })
      }
      handlchangeL(e){
        var name = e.target.name
        var value = e.target.value
        console.log('Name:',name)
        console.log('Value:',value)
        this.setState({
          activeItems:{
            ...this.state.activeItems,
            LastName:value
          }
        })
      }
      handlchangea(e){
        var name = e.target.name
        var value = e.target.value
        console.log('Name:',name)
        console.log('Value:',value)
        this.setState({
          activeItems:{
            ...this.state.activeItems,
            address:value
          }
        })
      }
      handlchangeage(e){
        var name = e.target.name
        var value = e.target.value
        console.log('Name:',name)
        console.log('Value:',value)
        this.setState({
          activeItems:{
            ...this.state.activeItems,
            age:value
          }
        })
      }
      handlchangecontent(e){
        var name = e.target.name
        var value = e.target.value
        console.log('Name:',name)
        console.log('Value:',value)
        this.setState({
          activeItems:{
            ...this.state.activeItems,
            content:value
          }
        })
      }
     
      handlesubmit(e){
        e.preventDefault()
        console.log('ITEM',this.state.activeItems)
        var csrftoken= this.getCookie('csrftoken')
    
        var url = 'http://127.0.0.1:8000/snippets/'
    
        fetch(url,{
          method: 'POST',
          headers:{
            'Content-type': 'application/json',
            'X-CSRFToken': csrftoken
          },
          body: JSON.stringify(this.state.activeItems)
        })
        .then(response=>{
          this.fetchtasks()
          this.setState({
            activeItems:{
              id: null,
            FirstName: '',
            LastName: '',
            address:'',
            age:'',
            content:''
            }
          })
        })
        .catch(error=>{
          console.log('Error',error)
        })
      }

    render() { 
        
        return (
          <div className='posting'>
        <form onSubmit={this.handlesubmit}>
          <div className='alignpost'>
            <div>
          <div>Firstname of related person:</div>
          <input onChange={this.handlchange} type="text" name="FirstName" value={this.state.activeItems.FirstName} />
          <div className='down'>Lastname of related person:</div>
          <input onChange={this.handlchangeL} type="text" name="LastName" value={this.state.activeItems.LastName} />
          </div><div className='shifting'>
          <div>address of related person:</div>
          <input onChange={this.handlchangea} type="text" name="address" value={this.state.activeItems.address} />
          <div  className='down'>age of related person:</div>
          <input onChange={this.handlchangeage} type="text" name="age" value={this.state.activeItems.age} />
            </div>    </div>
          <div className='viewarea'>Express your view here:</div>
          <input onChange={this.handlchangecontent} className='opinionarea' type="text" name="content" value={this.state.activeItems.content} />
          <input type="submit" name="Add" value="Post"  className='viewpost'/>
        </form>
            
          </div>
        );
    }
}
 
export default Updatesite;