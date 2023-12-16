function getCurrentDateTime() {
    const currentDate = new Date();
  
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Zero-padding for single-digit months
    const day = currentDate.getDate().toString().padStart(2, '0'); // Zero-padding for single-digit days
    const hours = currentDate.getHours().toString().padStart(2, '0'); // Zero-padding for single-digit hours
    const minutes = currentDate.getMinutes().toString().padStart(2, '0'); // Zero-padding for single-digit minutes
    const seconds = currentDate.getSeconds().toString().padStart(2, '0'); // Zero-padding for single-digit seconds
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  
  // Example usage:
  const currentDateTime = getCurrentDateTime();
  console.log(`Current Date and Time: ${currentDateTime}`);

export{getCurrentDateTime}