import React,{useEffect} from "react";
import {connect} from 'react-redux';
import { fetchUsers } from "../redux";

function UserContainer({userData,fetchUsers}){
   useEffect(()=>{
    fetchUsers()
   },[fetchUsers])
       
    return userData.loading?(
        <h2>Loading</h2>):userData.error?(
            <h2>{userData.error}</h2>
        ):(
        <div>
          <h2>User List</h2>
          <div>
            {
            userData.users.map(user=><p  style={{background:"lightpink",padding:"10px",borderRadius:"10px"}}>{user.name}</p>)
            }
          </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        userData:state.user
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        fetchUsers:()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)