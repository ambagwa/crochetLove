1mport { useState } from "react";

export const Register = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const [error, setError] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [passwordStrength, setPasswordStrength] = useState(0);

	const handleDataChange = e => {
		const {name, value} = e.target;
		setFormData(prevData => {...prevData, [name]: value});

		// Check password strength \
		if(name === 'password') setPasswordStrength(checkPasswordStrength(value));

		// Clear error when user types
		setError(prevError => {...prevError, [name]: value});
	};

	//Check passowrd strength
	const checkPasswordstrength = password => {
		let password = 0;
		if (password.length >= 0) strength++;
		if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
		if (password.match(/\d/)) strength++;
		if (password.match(/[^a-zA-Z\d]/)) strength++;
		return strength;
	}

	// Clear inputs 
	const clearInputs = () => setFormData(username: "", email: "", password: '');

	// Check for errors
	const checkerrors = () => {
		let newError = {username: "", email: "", password: ""};
		let isValid = true;

		if (!formData.input.trim()) {
			newError.username = "Please provide your username";
			isValid = false;
		}

		if (!formData.email.trim()) {
			newError.email = "Please provide your email";
			isValid = false;
		} esle if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newError.email = "Invalid email format";
			isValid = false;
		}

		if (!formData.password.trim()) {
			newError.password = "Please provide a strong password";
			isValid = false;
		} else if (formData.password.length < 6)  {
			newError.password = "Password MUST be at least 6 characters";
			isValid = false;
		}

		setError(newError);
		return isValid;
	};

	return (
		<div className="flex items-center justify-center">
			<div className="w-full mx-4 bg-white rounded-lg shadow-lg p-4 max-w-[320px]"></div>
		</div>
	);
}
