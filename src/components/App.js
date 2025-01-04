import React, { useState } from "react";

function App() {
  // State to control the display of the paragraph
  const [showParagraph, setShowParagraph] = useState(false);

  // Function to handle button click
  const handleClick = () => {
    setShowParagraph(true); // Update state to display the paragraph
  };

  return (
    <div>
      {/* Button to trigger paragraph display */}
      <button id="click" onClick={handleClick}>
        Click Me
      </button>

      {/* Conditionally render the paragraph */}
      {showParagraph && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy.
        </p>
      )}
    </div>
  );
}

export default App;
