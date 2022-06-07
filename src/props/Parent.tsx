import {ChildAsFc} from './Child'


const Parent = () => {
    return <ChildAsFc  
    color="red" 
    onClick={()=>console.log('hello')} />
       
    
}

export default Parent