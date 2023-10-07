import styles from '../styles/form.module.css';
import { useRef, useState } from 'react';
function Form(){
    const name=useRef();
    const des=useRef();
    const [item,setitem]=useState([]);
    function Delete(id){
const d=item.filter((item)=>{
    return item.id!=id;
})
setitem(d);
    }
    function submithandler(e){
        e.preventDefault();
const name1=name.current.value;
const description=des.current.value;
console.log(name1);
console.log(description);
const obj={
    id:Math.random(),
    name:name1,
    description:description,
}
setitem([...item,obj]);
    }
    console.log(item)
    return (
      <>
     <form className={styles.form} onSubmit={submithandler}>
        <label>
            Item name
        </label>
        <input  className={styles.input} ref={name}></input>
        <label>Description</label>
        <input  className={styles.input} ref={des}></input>
        <button  className={styles.btn}>Add Item</button>
     </form>
     <div>
        {item.map((item)=>{
            return(
                <div onClick={()=>Delete(item.id)}>{item.name} {item.description}</div>
            )
        })}
     </div>
      </>
    )
  }
  export default Form;