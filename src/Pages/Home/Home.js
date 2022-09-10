import React, { useEffect,useState } from 'react';
import service from '../../Services/Services';
import CustomeTable from '../../Components/Table/CustomeTable';
import Style from "../../Pages/Home/Home.module.css"
const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Name ",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },

    {
        title: "Email",
        dataIndex: "email",
        key: "email",
        sorter: (a, b) => a.email.length - b.email.length,
      },

      {
        title: "Phone",
        dataIndex: "Phone",
        key: "Phone",
      },

      {
        title: "Favfavorite Player",
        dataIndex: "FavPlayer",
        key: "FavPlayer",
      },

    

  ];
const Home=()=>{
    const [currentList, setCurrentList] = useState([]);
    const[ReRender,setRerender]=useState(false)

  
    const Fetchdata=()=>{
        service.get("Users/all_Users")
        .then(res=>
           setCurrentList(res.data)
            )
    }
    useEffect(()=>{
        Fetchdata()
    },[ReRender])
return (
  <div className={Style.Home}>
       <CustomeTable
    
 
    pageTitle="User List"
    dataRender={currentList}
    coloumRender={columns}
    // isLoading={isLoading}
    // refetch={refetch}
    setRerender={setRerender}
    endPoint={"Users/delete/"}
    // noAction={false}
        // error={error}
    addEndPoint="cars/AddCar"
    editEndPoint="cars/editCar"
  />

  </div>
)

}
export default Home;