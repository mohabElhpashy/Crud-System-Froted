import React,{useEffect, useState} from "react";
 import { useNavigate,useParams} from "react-router-dom";
import {
 CloseOutlined
  } from "@ant-design/icons";
import Style from '../ViewUser/View.module.css'
import service from "../../Services/Services";
const View=()=>{
    const [SingleUser,setSingleUser]=useState()
    const navigate = useNavigate();
    const {id} = useParams()
console.log("user",id)
  
    const FetchSingleData=()=>{
        service.get(`Users/${id}`)
        .then(SingleUser=>{
            console.log("singeluser",SingleUser.data)
            setSingleUser(SingleUser.data)
        })
    }
useEffect(()=>{
FetchSingleData()
},[])
     
return (
    <div className={Style.Main}>
        <div className={Style.Form}>
             
<div className={Style.close}><CloseOutlined onClick={e=>navigate('/')}/></div>
        <h1>View User</h1>
        <form  >
            <div className={Style.textField}>
            <input
            value={SingleUser?.name}
              placeholder="Name"/>
 
            </div>
            <div className={Style.textField}>
            <input
             value={SingleUser?.email}

            placeholder="email"/>
             </div>
     

<div className={Style.textField}>
<input 
 
 value={SingleUser?.Phone}

         placeholder="phone"/>
 </div>
       

<div className={Style.textField}>
<input 
 value={SingleUser?.FavPlayer}

placeholder="Favfavorite Player"/>
 </div>
       


        </form>
        </div>
    </div>
   

)
}
export default View;