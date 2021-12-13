import React, { useEffect,useState } from 'react';

const MyOrders = () => {
    const email = sessionStorage.getItem("email");
    const [orders, setOrders] = useState([])
    const [control, setControl] = useState(false);
    useEffect(()=>{
        fetch(`https://damp-river-92945.herokuapp.com/myOrders/${email}`)
        .then(res => res.json())
        .then(data =>setOrders(data))
    },[control])

    const handleDelete = (id) => {
        fetch(`https://damp-river-92945.herokuapp.com/delteOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setControl(!control);
            }
          });
        console.log(id);
      };
    return (
        <div>
            <h2>MY ALL ORDERS</h2>
            <div className="services">
        <div className="row container">
          {orders?.map((pd) => (
            <div className="col-md-4">
              <div className="service border border p-3">
                <div className="services-img ">
                  <img className="w-100" src={pd?.image} alt="" />
                </div>

                <h6>{pd?.name}</h6>
                <h4>{pd?.model}</h4>
                <p>{pd?.description}</p>
                <h3 className="text-danger"> Cost :{pd?.price}$</h3>

                <button
                  onClick={() => handleDelete(pd?._id)}
                  className="btn btn-danger"
                >
                  Cancel Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};

export default MyOrders;