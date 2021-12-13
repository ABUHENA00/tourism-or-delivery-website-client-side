import React, { useEffect, useState } from 'react';


const ManageService = () => {
    const [services, setServices] = useState([])
    useEffect( ()=>{
        fetch('https://damp-river-92945.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);


    const handleDelete = id =>{
        const proceed = window.confirm('Are you want to delet?')

        if(proceed){
            const url = `https://damp-river-92945.herokuapp.com/services/${id}`
      fetch(url, {
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          if(data.deletedCount){
              alert('Deleted Successfully')
          }
          const remaining = services.filter(service => service._id!== id);
          setServices(remaining);
      })
    }
 }
      
    return (
        <div>
            <h1 className="text-info">Managing Services</h1>
         <div className="services">
             <div className="row">
                 {
                     services.map(service =><div key={service._id} className="col-md-4">
                     <div className="service m-4">
                         <h3>{service.name}</h3>
                         <img src={service.img} alt="" />
                         <p>price :{service.cost}$</p>
                         <span>{service.description}</span>
                         <br/>
                         <button className="btn btn-danger p-1 m-2" onClick={()=>handleDelete(service._id)}>Delete</button>
                         {/* <Link to={`/services/update/${service._id}`}><button className="btn btn-info p-1 m-2">Update</button></Link> */}
                     </div>
                 </div>)
                 }
             </div>
         </div>
        </div>
    );
};

export default ManageService;