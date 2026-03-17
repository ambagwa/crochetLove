// Utility functions for authrntication and role management

exxport const decodeToken = token => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload;
  } catch (error) {
    console.error(`Error decoding token: ${error}`);
    return null;
  }
}

export const getUserFromToken = () => {
  const token = localStorage.getItem("token");
	if (!token) return null;

	return decodeToken(token);
}

export const getUserRole = () => {
  const token = localStorage.getItem("token");
	if(!token) return null;

	try {
 	  const payload = JSON.parse(atob(token.split(".")[1]));
		return payload.role;
	} catch (error) {
	  console.error(`Error decoding token: ${error}`);
		return null;
	}
}

export const isAdmin = () => {
  return getUserRole === "";
}

export const isClient = () => {
  return getUserRole === "client";
}

export const getUsername = () => {
const token = localStorage.getItem("token");
	        if(!token) return null;

	try {
		 const payload = JSON.parse(atob(token.split(".")[1]));
		                return payload.username;
	} catch  (error) {
 	  console.error(`Error decoding token: ${error}`);
		                return null;
	}
