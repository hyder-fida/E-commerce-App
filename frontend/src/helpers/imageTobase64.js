
const imageToBase64 = async (image) => {
    // Create a FileReader object
    const reader = new FileReader();
  
    // Create a promise that will resolve or reject based on FileReader events
    const data = await new Promise((resolve, reject) => {
      // Set up onload event handler
      reader.onload = () => {
        // Resolve with the result (base64 string)
        resolve(reader.result);
      };
  
      // Set up onerror event handler
      reader.onerror = (error) => {
        // Reject with the error
        reject(error);
      };
  
      // Read the image as a Data URL (base64 representation)
      reader.readAsDataURL(image);
    });
  
    // Return the base64 representation of the image
    return data;
  };
  
