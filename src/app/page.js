"use client"; // Indicate that this is a Client Component
import React, { useState } from "react"; // Import React and useState
import Link from "next/link"; // Import Link component

export default function Home() {
  const [inputValue, setInputValue] = useState(""); // State for input value
  const [riskScore, setRiskScore] = useState(null); // State for storing the risk score result
  const [error, setError] = useState(null); // State for error handling

  const callApi = async () => {
    try {
      const apiKey = "f38b41ad9389c11f6ff8b4df2f9032f4e8608c1f"; // API key
      const url = `https://endpoint.apivoid.com/urlrep/v1/pay-as-you-go?key=${apiKey}&url=${encodeURIComponent(inputValue)}`; // Construct URL with input value

      // Call the API
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Throw error for non-2xx responses
      }

      const data = await response.json(); // Parse JSON response
      console.log(data.data.report.risk_score.result); // Log the risk score result
      setRiskScore(data.data.report.risk_score.result); // Store the risk score result in state
      setError(null); // Clear previous errors if the call was successful
    } catch (error) {
      console.error("Error calling the API:", error);
      setError(error.message); // Set error message in state
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="mb-4 text-5xl p-4 flex items-center">
        <h1 className="text-9xl font-bold text-blue-600">SafeEmail</h1>

        <Link href="/tipS">
          <button className="ml-4 bg-green-500 text-white font-bold py-2 px-4 rounded">
            Conseil
          </button>
        </Link>
      </div>

      <div className="flex flex-col items-center p-36">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update input value state
          placeholder="Ecrit ici ..."
          className="border border-gray-300 rounded p-2 mb-4 h-10 w-96 text-black"
        />
        <button
          onClick={callApi} // Call API on button click
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Vérifier
        </button>
        
        {/* Display risk score result or error message */}
        {riskScore !== null && (
          <div className="mt-4 text-green-600">Risk Score: {riskScore}</div>
        )}
        {error && <div className="mt-4 text-red-600">Error: {error}</div>}
      </div>
    </div>
  );
}
