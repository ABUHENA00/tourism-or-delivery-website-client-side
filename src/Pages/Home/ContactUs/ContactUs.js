import React from 'react';


const ContactUs = () => {
   
      
    return (
        <div>
       <form onSubmit>
  <h3 className="text-primary mt-3">Contact Us</h3>
  <div className="row mb-3">
    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" placeholder="your name" id="inputName" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" placeholder="input your email" className="form-control" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password"  placeholder="input your password" className="form-control" id="inputPassword3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputName" className="col-sm-2 col-form-label">Comment</label>
    <div className="col-sm-10">
      <input type="text" className="form-control p-5" placeholder=" write your messages" id="inputName" required/>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>

</form>
        </div>
    );
};

export default ContactUs;