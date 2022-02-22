import React,{useEffect, useState} from 'react';
import './App.css';


// parent Component
function App() {
  const nayoks = ['Manna',"Rajjak","Rajib","Bapparaj","AmirKhan","ShakibKhan","EliusKanson"];
  const products = [
    {name:"Car",price:"3000"},
    {name:"pen",price:'5tk'},
    {name:"noteBook",price:"100tk"},
    {name:"laptop",price:"37000"}
  ]
  const person ={
    name:"Nazrul islam",
    fatherName:"Bodor Alom",
    motherName:"Nur khatun",
    id:1933024,
    semester:"6th",
    department:"Computer Science and Engineering",
    address:"Pekua CoxzBazar"
  }
  
  return (
    <div className="App">
    
        <h1>Hello</h1>
        <Count></Count>
        <User></User>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        

        <Person person={person}></Person>
        <Driver name="Hakim Ali" address="BualKhali"></Driver>
        <Nayok names={nayoks}></Nayok>
        <h1 style={{color:"red"}}>This is single Product part</h1>
        <Product product={products[0]}></Product>
        <h1 style={{color:"red"}}>This is multipe Product part</h1>

        {
          products.map(product => <Product product={product}></Product>)
        }
    </div>
  );
}




// person Component
function Person(props){
  var style = {
    color:"red",
    backgroundColor:"green"
  }
  return(
    <div style={{border:"1px solid crimson",borderRadius:"5px",width:"400px",margin:"auto",padding:'5px',marginTop:"15px"}}>
      <u><h1 style={{textAlign:"center"}}>Introduce me</h1></u>
      <h4>Name: {props.person.name}</h4>
      <h4 style={style}>Father Name: {props.person.fatherName}</h4>
      <h4>Modther Name: {props.person.motherName}</h4>
      <h4>ID: {props.person.id}</h4>
      <h4>Semester: {props.person.semester}</h4>
      <h4>Departmnet: {props.person.department}</h4>
      <h4>Address: {props.person.address}</h4>
    </div>
  )
}



// driver Component
function Driver(props){
         return(
           <div style={{border:"1px solid crimson",borderRadius:"5px",width:"400px",margin:"auto",padding:'5px',marginTop:"15px"}}>
             <h3>DriverName:{props.name}</h3>
             <h3>Address:{props.address}</h3>
           </div>
         )
}


// nayok Component
function Nayok(props){
  return(
    <div>
      NayokName:{props.names.map(name => <h1>{name}</h1>)}
    </div>
  )
}


// product Component
function Product(props){
  const productStyle ={
    heigth:"200px",
    width:"300px",
    backgroundColor:"black",
    color:"white",
    border:"1px solid crimson",
    borderRadius:"5px",
    margin:"auto",
    marginTop:"10px",
    padding:"20px"
  }
  return(
    <div style={productStyle} >
        <h1>ProductName:{props.product.name}</h1>
        <h4>ProductPrice:{props.product.price}</h4>
        <button>OrderThis</button>
    </div>
  )
}



// Count Component
function Count(){
  const [count,setCount] = useState(10);
  const hadleIncrease = () => {
       const newCount = count + 1;
       setCount(newCount);
  }
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={hadleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}


// user Component
function User(){
  const [users,setUser] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(data => setUser(data));
  },[]);
  return(
    <div>
           <h1>DynamicUsers:{users.length}</h1>
           <u><h1>All User Name</h1></u>
           <ol>
             {users.map(user => <li>{user.name}</li>)}
           </ol>
    </div>
  )
}



export default App;
