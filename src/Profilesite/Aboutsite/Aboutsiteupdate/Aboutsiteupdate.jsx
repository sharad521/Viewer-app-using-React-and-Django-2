import React, { Component } from 'react';
import './styles.css'
class Aboutsiteupdate extends React.Component {
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
    
      this.handlchange = this.handlchange.bind(this)
      this.handlesubmit = this.handlesubmit.bind(this)
      this.handlchangeL = this.handlchangeL.bind(this)
      this.handlchangea = this.handlchangea.bind(this)
      this.handlchangeage = this.handlchangeage.bind(this)
      this.handlchangebirthplace = this.handlchangebirthplace.bind(this)
      this.handlchangequalification = this.handlchangequalification.bind(this)
      this.handlchangemaritalstatus = this.handlchangemaritalstatus.bind(this)
      this.handlchangeinterestinggame = this.handlchangeinterestinggame.bind(this)
      this.handlchangeinterestingcountry = this.handlchangeinterestingcountry.bind(this)
      this.handlchangegender = this.handlchangegender.bind(this)
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
      

      handlchangequalification(e){
        var name = e.target.name
        var value = e.target.value
        console.log('Name:',name)
        console.log('Value:',value)
        this.setState({
          activeItems:{
            ...this.state.activeItems,
            qualification:value
          }
        })
      }
      handlchangebirthplace(e){
        var name = e.target.name
        var value = e.target.value
        console.log('Name:',name)
        console.log('Value:',value)
        this.setState({
          activeItems:{
            ...this.state.activeItems,
            birthplace:value
          }
        })
      }
      handlchangemaritalstatus(e){
        var name = e.target.name
        var value = e.target.value
        console.log('Name:',name)
        console.log('Value:',value)
        this.setState({
          activeItems:{
            ...this.state.activeItems,
            maritalstatus:value
          }
        })
      }
      handlchangeinterestinggame(e){
        var name = e.target.name
        var value = e.target.value
        console.log('Name:',name)
        console.log('Value:',value)
        this.setState({
          activeItems:{
            ...this.state.activeItems,
            interestinggame:value
          }
        })
      }
    
      handlchangegender(e){
        var name = e.target.name
        var value = e.target.value
        console.log('Name:',name)
        console.log('Value:',value)
        this.setState({
          activeItems:{
            ...this.state.activeItems,
            gender:value
          }
        })
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
      handlchangeinterestingcountry(e){
       
        var value = e.target.value
       
        console.log('Value:',value)
        this.setState({
          activeItems:{
            ...this.state.activeItems,
            interestingcountry:value
          }
        })
      }
     
      handlesubmit(e){
        e.preventDefault()
        console.log('ITEM',this.state.activeItems)
        var csrftoken= this.getCookie('csrftoken')
    
        var url = 'http://127.0.0.1:8000/about/'
    
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
                gender:'',
                qualification:'',
                birthplace:'',
                maritalstatus:'',
                interestinggame:'',
                interestingcountry:''
            }
          })
        })
        .catch(error=>{
          console.log('Error',error)
        })
      }

    render() { 
        
        return (
          <div className='infobox'>
        <form onSubmit={this.handlesubmit}>
          <div className='linealign'>
          <div className='firstline'>
          <div>Enter your First Name:</div>
          <input onChange={this.handlchange} type="text" name="FirstName" value={this.state.activeItems.FirstName} />
          <div>Enter your Last Name:</div>
          <input onChange={this.handlchangeL} type="text" name="LastName" value={this.state.activeItems.LastName} />
          <div>Enter your age:</div>
          <input onChange={this.handlchangeage} type="text" name="age" value={this.state.activeItems.age} />
          <div>Enter your address:</div>
          <input onChange={this.handlchangea} type="text" name="address" value={this.state.activeItems.address} />
          <div>Enter your gender:</div>
          <input onChange={this.handlchangegender} type="text" name="gender" value={this.state.activeItems.gender} />
          </div>
          <div className='secondline'>
          <div>Enter your qualification:</div>
          <input onChange={this.handlchangequalification} type="text" name="qualification" value={this.state.activeItems.qualification} />
          <div>Enter your birthplace:</div>
          <input onChange={this.handlchangebirthplace} type="text" name="birthplace" value={this.state.activeItems.birthplace} />
          <div>Enter your marital status:</div>
          <input onChange={this. handlchangemaritalstatus} type="text" name="maritalstatus" value={this.state.activeItems.maritalstatus} />
          <div>Enter your Favourite Sport:</div>
          <input onChange={this.handlchangeinterestinggame} type="text" name="interestinggame" value={this.state.activeItems.interestinggame} />
          <div>Enter your Favourite Country:</div>
          <input onChange={this.handlchangeinterestingcountry} type="text" name="interestingcountry" value={this.state.activeItems.interestingcountry} />
          </div>
          </div>
          <input type="submit" name="Add" className='send' value="Send" />
        </form>
            
          </div>
        );
    }
}
 
export default Aboutsiteupdate;