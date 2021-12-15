import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddServices.css';

const AddServices = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
       console.log(data);
       axios.post('https://damp-river-92945.herokuapp.com/services',data)
       .then(res => {
           if(res.data.insertedId){
               alert('successfully add')
               reset();
           }
       })
      }  
  return (
      <div>
    <h1 className="text-success">PLEASE ADD AN SERVICE</h1>
    <div className="addservic">
    <form onSubmit={handleSubmit(onSubmit)}>
    <input placeholder="name" className="m-2 p-1 w-5" {...register("name")} /> <br />
    <input  placeholder="description" className="m-2 p-3" {...register("description")} /> <br />
    <input placeholder="Image url" className="m-2 p-1"{...register("img")} /> <br />
    <input placeholder="price" type="number" className="m-2 p-1" {...register("cost")} /> <br />
    <input className='btn btn-info' type="submit" />
  </form>
    </div>
      </div>
  );
};

export default AddServices;