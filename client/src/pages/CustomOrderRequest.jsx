import { useState } from "react";

export const CustomOrderRequest = () = {
	const process = [
	  "Submit your request with details",
	  "A quotation will be sent within 24 hrs",
	  "Approve the quote and make a 70% deposit",
	  "Create a custom piece",
	  "Pay the balance and have your order shipped"
	];

	const [formData, setFormData] = useState({
	  name: "",
	  phoneNumber: "",
	  email: "",
	  description: "",
	  photos: "",
	});

	const handleDataChange = e => {
	  setFormData(prevState => {...prevState, name: e.target.value});
	};

  return (
	  <div className="m-10">
	    <p className="py-5 font-medium text-3xl sm:text-5xl">
		Custom Order Request
	  </p>

    <div className="grid grid-cols-1 sm:grid-cols-5 py-10">
	  {/*Left section*/}
      <div className="col-span-3">
        	<p className="text-2xl">
		  Do o=you have a unique idea you wanna curate? Share them
	  	  with us and we will create a custom piece just for 
	  	  <span className="text-orange underline">YOU</span>
	  	  Provide as many details as possible to help bring your idea
	  	  into life
	  </p>

	  {/* Form*/}
	  <form>
	    <label htmlFor="name">Your name:</label>
	    <input type="text" id="name" onChange={handleDataChange} />
	    <label htmlFor="contact">Phone Number:</label>                                                                                                                                                                     <input type="number" id="name" onChange={handleDataChange} /> 
	    <label htmlFor="email">Email Address</label>
	    <input type="email" id="email" onChange={handleDataChange} />
	    <label htmlFor="description">Describe your custom order</label>
	    <textarea id="description" rows="10" placeholder="Include details like: size, color, purpose, any special requests" onChange={handleDataChange}></textarea> 
	    <label htmlFor="photos">Upload reference image</label>
	    <input id="photos" type="image" />

	    <button onClick={handleSubmit}>Submit</button>
	  </form>
	  </div>

	  {/*Right section*/}
	  <div className="col-span-2">
		<p className="font-medium text-2xl pb-5">Get Inpired</p>
	  	<div className="grid grid-cols-2 my-5">
		  <img src={refPhoto1} alt="Reference image 1" className="object-cover h-50 w-50" />
	  	  <img src={refPhoto2} alt="Reference image 2" className="object-cover h-50 w-50" />
		  <img src={refPhoto2} alt="Reference image 3" className="object-cover h-50 w-50" />
	  	  <img src={refPhoto4} alt="Reference image 4" className="object-cover h-50 w-50" />
	  </div>

	  	<p className="text-xl">Custom order process:</p>
	  	<ul>
		  {process.map(p => (
		    <li key=(item)>{p}</li>
			  
		  ))}
	  </ul>
	  </div>
	  </div>
	  </div>
  );

}
