import React from "react"
import food from "./food"





const Choice = ({items})=>{

let randomNum = Math.floor(Math.random() * items.length)

return (
    <>
    <h1>{items[randomNum]}</h1>
    {console.log(`I’d like one ${items[randomNum]}, please.`)}
    {console.log(`Here you go: ${items[randomNum]}`)}
    {console.log(`Delicious, may I have another`)}
    {Remove(items, items[randomNum])}
    </>
)
}
const Remove = (items, item) =>{
    if(items.indexOf(item) !== -1){
        let indexed = items.indexOf(item)
        let final = items.splice(indexed, 1)
        console.log(items)
        console.log(`I’m sorry, we’re all out. We have ${items.length} left.`)
        return final
        
    } else {
        return undefined
    }
}




export {Choice, Remove}