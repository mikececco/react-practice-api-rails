import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  const [serverUrl, setServerUrl] = useState('http://127.0.0.1:3000');
  const [responseCode, setResponseCode] = useState(null); // State to hold the response code

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run once on component mount

  const fetchData = async () => {
    try {
      const response = await fetch(serverUrl);
      const data = await response.status;
      console.log(data);
      // Assuming your response has a property called 'responseCode', you can display it
      // You can replace 'responseCode' with the actual property name from your response data
      setResponseCode(data); // Set the response code state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <h1>Request backend</h1>
      {/* Display the count value if you're using it */}
      {/* <p>Count: {count}</p> */}
      {/* Display the response code */}
      <p>RESPONSE CODE SERVER: {responseCode}</p>
    </>
  );
}

export default App;
