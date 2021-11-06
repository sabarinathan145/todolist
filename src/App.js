import React,{ useState,useEffect } from 'react';
import trashIcon from './trash.svg';


function App() {
  
  const getLocalItmes = () => {
    let list = localStorage.getItem('lists');
    console.log(list);

    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }
}
const [inputData, setInputData] = useState('');
const [items, setItems] = useState(getLocalItmes());
const [toggleSubmit, setToggleSubmit] = useState(true);
const [isEditItem, setIsEditItem] = useState(null);

const inputKeyDown = (event) =>{
  if (event.keyCode===13)
  addItem();
}

const addItem = () => {
  if (!inputData) {
      alert('Enter the data to be noted!!');
  } else if(inputData && !toggleSubmit) {
      setItems(
          items.map((elem) => {
              if (elem.id === isEditItem) {
                  return { ...elem, name: inputData }
              }
              return elem;
          })
      )
           setToggleSubmit(true);

           setInputData('');

           setIsEditItem(null);
  } else {
      const allInputData = { id: new Date().getTime().toString(), name:inputData }
      setItems([...items, allInputData]);
      setInputData('')
  }
}


const deleteItem = (index) => {
  const updateditems = items.filter((elem) => {
      return index !== elem.id;
  });

  setItems(updateditems);
}

useEffect(() => {
  localStorage.setItem('lists', JSON.stringify(items))
}, [items]);
     //adding datas in local storage session
 


  return (
    <div className="app-background">
    <p className=" heading-text"> To do List</p>
    <div className="task-container">
    <div>
    <input className="text-input" type="text" placeholder="✍ Add Items..."
                           value={inputData}  onKeyDown={inputKeyDown}
                           onChange={(e) => setInputData(e.target.value) }
                        />
        <button className="add-button" title="Add Item" onClick={addItem}> ADD </button>
   
          </div>
          {
                            items.map((elem) => {
                                return (
                                    <div className="list-item row jc-space-between" key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <div className="todo-btn">
                                             <img src={trashIcon} className="delete-icon" title="Delete Item" onClick={() => deleteItem(elem.id)} alt="/"/>
                                        </div>
                                  </div>
                                )
                            })

                        }
                        
                        </div>
   
                        <a  target="_blank" rel="noopener noreferrer" href="http://sabar-i.herokuapp.com/">  <p className="footer-text"> Sabar_I ❤️  </p> </a>
    </div>
  );
}



  

export default App;
