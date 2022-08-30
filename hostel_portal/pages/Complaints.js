import MenuAppBar from "../comps/MenuAppBar";
import ShortComplain from "../comps/ShortComplain";

import Form from "../comps/Form";
import Filter from "../comps/Filter";
import { useState } from "react";
import Btn from "../comps/Btn";

export const getStaticProps= async()=>{

      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      return {
        props:{coms:data}
      }

}


const Complaints = ({coms}) => {
  
  const [filtercat,setfilcat]=useState('None');

  const filterChangeHandler =(selcata)=>{
    setfilcat(selcata);

  };

  const filteredcata=coms.filter(cat => {
       return cat.catagory===filtercat;// catagory will be defined
  });

    return ( 
        <div>
            <MenuAppBar/>
            {/* <Btn/> */}
            <Form/>

            {/* Display complaints */}

        {/* <div>{coms.map((com)=>(
               <div key={com.id}>
                <p>{com.name}</p> */}
                {/* <p>{com.description}</p> */}
                {/* <h2>Current Status</h2>
                </div>

        ))}
            </div>   */}
            <Filter onChangeFilter={filterChangeHandler} />
            {}
        <div>{coms.map((com)=>(
          <ShortComplain key={com.id} name={com.name} username={com.username}/>
        ))}
            </div>  

        
        </div>
     
     );
}
 
export default Complaints;