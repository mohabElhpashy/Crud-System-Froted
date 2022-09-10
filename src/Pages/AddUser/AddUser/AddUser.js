import React,{useEffect} from "react";
import {message} from "antd"; 
import {useForm} from 'react-hook-form' 
import { useNavigate} from "react-router-dom";
import {
 CloseOutlined
  } from "@ant-design/icons";
  import Aos from 'aos'
  import "aos/dist/aos.css"
import service from "../../../Services/Services";
import Style from '../AddUser/AddUser.module.css';
const AddUser=()=>{
    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} =useForm({
        defaultValues:{
            name:"",
            email:"",
            Phone:"",
            FavPlayer:""

        }
    });
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    

     
return (
    <div className={Style.Main}>
        <div data-aos="fade-bottom" className={Style.Form}>
            {/* <span icon={<CloseOutlined style={{ color: "#3e79f7" }} />}
></span> */}
<div className={Style.close}><CloseOutlined onClick={e=>navigate('/')}/></div>
        <h1>Add User</h1>
        <form   onSubmit={handleSubmit((data)=>
            service.post('Users/addUser',data)
            .then(res=>
                {
                    message.success({ content: "User Added!",  duration: 2 });

                    navigate('/')

                })
                

            )}>
            <div className={Style.textField}>
            <input
            // onChange={e=>setUserdata({name:e.target.value})}
             {...register("name",{required:'this is required'})}  placeholder="Name"/>
        <p>{errors.name?.message}</p>

            </div>
            <div className={Style.textField}>
            <input
            // onChange={e=>setUserdata({email:e.target.value})}

            {...register("email",{required:'this is required'})}  placeholder="email"/>
        <p>{errors.email?.message}</p>
            </div>
     

<div className={Style.textField}>
<input 
            // onChange={e=>setUserdata({Phone:e.target.value})}

{...register("Phone",{required:'this is required',minLength:{
            value:11,
            message:'Min length is 11'
        }})}  placeholder="phone"/>
                <p>{errors.Phone?.message}</p>
</div>
       

<div className={Style.textField}>
<input 
            // onChange={e=>setUserdata({FavPlayer:e.target.value})}

{...register("FavPlayer",{required:'this is required'})}  placeholder="Favfavorite Player"/>
        <p>{errors.FavPlayer?.message}</p>
</div>
       

        <input  type="submit"/>

        </form>
        </div>
    </div>
   

)
}
export default AddUser;