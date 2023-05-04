import Message from './Message';
import ListGroup from './components/ListGroup'
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';

function App(){
  const [showAlert,setShowAlert] = useState(true);

  const items = [
    'Delhi',
    'New York',
    'London',
    'Tokyo',
];

const handleSelectedItem = (item:string) =>{
 console.log(item);
}
  return <div>
    <Message/>
    {showAlert && <Alert onClick={()=>{setShowAlert(!showAlert)}}>This is alert</Alert>}
    <ListGroup items={items} heading="Citities" onSelectedItem={handleSelectedItem}/>
    <Button color="danger" onClick={()=>{setShowAlert(!showAlert)}}> Click Here</Button>
  </div>
}

export default App;
//ES7+ React/Redux/React-Native snippets extention to shortcut "rafce" to create componet