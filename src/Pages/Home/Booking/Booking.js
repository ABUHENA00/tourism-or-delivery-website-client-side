import React, { useEffect, useState } from "react";
import "./Booking";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";


const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  const email = sessionStorage.getItem("email");

  useEffect(() => {
    fetch(`https://damp-river-92945.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  // console.log(service);
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = email;
    // data.status = "pending";

    fetch("https://damp-river-92945.herokuapp.com/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };

  return (
    <div className="mt-3">
      <div className="booking-container">
        <div className="row container">
          <div className="col-md-6">
            <div className="details-img">
              <img className="w-75" src={service?.img} alt="" />
            </div>
            <h2>{service?.name}</h2>
            <p className="text-start">{service?.description}</p>
            <h1> price: {service?.cost} $</h1>
           
          </div>
          <div className="col-md-6">
            <h4>Booking Form</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                defaultValue={service?.name}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("date")}
                type="date"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("comments")}
                placeholder="comments"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("price", { required: true })}
                defaultValue={service?.cost}
              
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("image", { required: true })}
                defaultValue={service?.img}
              
                className="p-2 m-2 w-100"
              />
              <br />
              <select {...register("model")} className="p-2 m-2 w-100">
                <option value={service?.model}>{service?.model}</option>
                <option value="premium">premium</option>
                <option value="classic">classic</option>
                <option value="business">business</option>
              </select>
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order Now"
                className="btn btn-info w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;