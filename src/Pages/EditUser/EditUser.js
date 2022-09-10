import React,{useEffect, useState} from "react";
import {message} from "antd"; 
import {set, useForm} from 'react-hook-form' 
import { useNavigate,useParams} from "react-router-dom";
import {CloseOutlined} from "@ant-design/icons";
import service from "../../Services/Services";
import Style from '../EditUser/EditUser.module.css';
const EditUser=()=>{
    const navigate = useNavigate();
    const {id} = useParams()
    const [SingleUser,setSingleUser]=useState()


    // const {register,handleSubmit,formState:{errors}} =useForm({
    //     defaultValues:{
    //         name:SingleUser?.name,
    //         email:SingleUser?.email,
    //         Phone:SingleUser?.Phone,
    //         FavPlayer:SingleUser?.FavPlayer

    //     }
    // });
    
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
const handelChagee=(e)=>{
    let {name,value}=e.target;
    setSingleUser({
        ...SingleUser,
        [name]:value
    })
}
const handleSubmit=(e)=>{
    e.preventDefault();

    service.post('Users/Edit',{
        name:SingleUser.name,
    FavPlayer:SingleUser.FavPlayer,
    id:id,
    email:SingleUser.email,
    Phone:SingleUser.Phone
})
    .then(res=>
        {
            message.success({ content: "User Updated!",  duration: 2 });

            navigate('/')

        })
}
console.log(SingleUser)
     
return (
    <div className={Style.Main}>
        <div className={Style.Form}>
             
<div className={Style.close}><CloseOutlined onClick={e=>navigate('/')}/></div>
        <h1>Update User</h1>
        <form   
        onSubmit={(e)=>handleSubmit(e)}
            >
            <div className={Style.textField}>
            <input
                        defaultValue={SingleUser?.name}
                        onChange={handelChagee}
                        name="name"
                         placeholder="Name"/>
 
            </div>
            <div className={Style.textField}>
            <input
                        defaultValue={SingleUser?.email}

                        onChange={handelChagee}
                        name="email"

              placeholder="email"/>
             </div>
     

<div className={Style.textField}>
<input 
                        defaultValue={SingleUser?.Phone}

 
onChange={handelChagee}
                        name="phone"
        placeholder="phone"/>
 </div>
       

<div className={Style.textField}>
<input 
             defaultValue={SingleUser?.FavPlayer}

            onChange={handelChagee}
            name="FavPlayer"

   placeholder="Favfavorite Player"/>
  
 </div>
       

        <input value={"Update"}  type="submit"/>

        </form>
        </div>
    </div>
   

)
}
export default EditUser;