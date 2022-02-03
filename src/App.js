import React, {Component} from 'react';
import './App.css';

let num = 1;
class App extends Component {
  constructor() {
    super();
    this.state = {
      itemList : "",
      allItems : []
  }

}

  handleChange(event)
  {
    const {name,value} = event.target;
    this.setState({[name]: value});
  }

  handleAddItem()
  {
    if(this.state.itemText){
      let obj= {
        id: num,
        todoDes : this.state.itemText,
        // isCompleted : false
      }
      const updateItems = this.state.allItems.push(obj);
      this.setState({updateItems});
      num++;
    }
  }

  handleItemDelete(item)
  {
    const allItems = this.state.allItems.filter((eachItem) => {
      return eachItem.id !== item.id;
    });
    this.setState({ allItems });
  }

  handleTaskDone(item)
  {
    const updateStatus = this.state.allItems.map((eachItem) => {
      if(item.id === eachItem.id) 
      {
        eachItem.isCompleted = true;
      }
      return true;
    });
     this.setState({updateStatus});
  }

  render(){
    return(
      <div>
        <h1>Todo List</h1>
        <div id={'div'}>
          <input id={'text input'} type={'text'} placeholder={'Add new item'}
          value={this.state.itemText} name={'itemText'} onChange={(event) =>{
            this.handleChange(event);
          } }
          required />

          <br />
          <button id={'btn'} type={'submit'} onClick={() =>{
            this.handleAddItem();

          }}>Submit</button>
        </div>
        <div id={'listDiv'}>
          <h4>Tasks List</h4>
          {
            this.state.allItems.map((item) => (
              <div className={'listItems'} key ={item.id}>
                {item.isCompleted ? <div className={"taskName isDone"}><strike>{item.todoDes}</strike></div> : <div className={"taskName"}>{item.todoDes}</div>}
                <span className={'btn-span'}>
                  <button className={'btn-done'} onClick={() =>{
                    this.handleTaskDone(item);
                    }
                  }> Completed </button>
                  <button className={'btn-remove'} onClick={() => {
                    this.handleItemDelete(item);
                    }
                  }> Remove </button>
                </span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

}
export default App;
