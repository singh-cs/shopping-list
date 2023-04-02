import {useEffect, useState } from 'react'
import List from './components/List'

function App() {
    const [item, setItem] = useState("")
    const [itemList, setItemList] = useState([])
  
    const mappedItemList = itemList.map( (li) =>{ 
        return(
            (li.id &&
                <List  
                key={li.id} 
                id={li.id} 
                item={li.item}
                handleClose={handleClose} 
            />)
        )
    })

    function handleChange(event){
        setItem(old=>event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        const isCopy = (itemList.filter(i=>i.item.toLowerCase()==item.toLowerCase()).length > 0)
        if(!isCopy){
            setItemList(old => [...old,{id:(Math.ceil(Math.random()*100000000)),item: item}])
            setItem("")
        }
        else{
            alert('This item is already in the list ‼️');
        }
    }

    function handleClose(event,id){
        setItemList(old => old.filter(i => i.id != id ))
    }

    return (
        <section className="App">
            <h1>Project 4: Shopping List</h1>
            <div className='list-container'>
                    <h2>Items To Buy</h2>
                <form className="add-body" onSubmit={handleSubmit}>
                    <input 
                        className="add-field" 
                        type="text" 
                        placeholder="Add a new item"
                        value={item}
                        onChange={handleChange}
                        required
                    />
                    <button className="add-btn">INSERT</button>
                </form>
                <div>
                    {mappedItemList}
                </div>
            </div>
        </section>
    )
}

export default App