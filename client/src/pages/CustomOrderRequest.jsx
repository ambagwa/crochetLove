// Import Label, Imput from the shadCN

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

	const [error, settError] = useState({
	  name: "",
	  phoneNumber: "",
	  email: "",
	  description: "",
	  photos: "",
	});

	const handleDataChange = e => {
	  const { name, value } = e.target;
	  setFormData(prevState => {...prevState, [name]: value});

	  // Clear error as user inputs data
	  setError(prevError => ({ ...prevError, [name]: ""}));
	};

	// Clear inputs
	const clearInputs = () => {
	  setFormData(name: "", phoneNumber: "", description: "", photos: "");
	}

	// Check for errors
	const checkErrors = () => {
	  let isValid = true;
	  const newErrors = {
		            name: "",
		            phoneNumber: "",
		            description: "",
		            photos: "",
		          };
	  if (!formData.name.trim()) {
	    newErrors.name = "Name is required";
	    isValid = false;
	  }

	  if (!formData.email.trim()) {
	    newErrors.email = "Email is required";
	  isValid = false;
	  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
	    mewErrors.email = "Invalid email format";
		  invalid = false;
	  }

	  // Check for phoneNumber, description, and photos
	}

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
	    {/*Name input*/}
	  <div className="space-y-1">
	    <label htmlFor="name" className="text-[12px] font-medium">Your name:</label>
	    <input 
	  	type="text" 
	  	id="name"
	  	className={`h-8 text-xs transition-all duration-400 ease-in-out ${
			error.name ? "border-red-500 ring-1 ring-red-300 focus:ring-red-400 animate-glow"
			: "border-gray-300 focus:ring-1 focus:ring-blue-500"
		}`}
	  	value={formData.name}
	  	onChange={handleDataChange} />

	    {/*Name error display*/}
i	    <div className={`transition-all duration-400 overflow-hidden ${
		error.name
		    ? "max-h-10 opacity-100 translate-y-0"
		    : "max-h-0 opacity-0 -translate-y-1"
	    }`}>
		{" "}
	  	{error.name && (
			<p className="text-red-500 text-[10px] mt-1">
				{error.name}
			</p>
		)}
	    </div>
	  </div>

	  {/*Phone number input*/}
	  <div classname="space-y-1>
	    <label htmlFor="contact" className="text-[12px] font-medium">Phone Number:</label>                                                          
	    <input 
	  	type="number" 
	  	id="name" 
	  	onChange={handleDataChange}
	  	value={formData.phoneNumber}
	  	className={`h-8 text-xs transition-all duration-400 ease-in-out ${
		  error.phoneNumber 
			? "border-red-500 ring-1 ring-red-300 focus:ring-red-400 animate-glow"
			: "border-gray-300 focus:ring-1 focus:ring-blue-500"
		}`}
	  	/> 

	  	{/*Phone number error display */}
	  	<div className={`transition-all duration-400 overflow-hidden ${
			error.phoneNumber
			  ? "max-h-10 opacity-100 translate-y-0"
			                        : "max-h-0 opacity-0 -translate-y-1"
		}`}>
		  {" "}
	  	  {error.phoneNumber && (
			<p classsName="text-red-500 text-[10px] mt-1">{error.phoneNumber}</p>
		  )}
	  	</div>
	  </div>

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
