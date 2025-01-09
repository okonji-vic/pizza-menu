import React from "react";


// FallbackComponent to handle errors
function FallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <h1>Something went wrong:</h1>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
          {console.log(error)} {/* Log error for debugging */}
          <button onClick={() => (window.location.href = "/")}>
        Go back to Home
      </button>
    </div>
  );
}

// Component that simulates an error
function ErrorComponent() {
  const [hasError, setHasError] = React.useState(false);

  // Simulate a crash
  if (hasError) {
    throw new Error("An unexpected error occurred");
  }

  return (
    <div>
      <h1>Click the button to crash the app</h1>
      <button
        onClick={() => setHasError(true)}
        style={{ marginRight: "0.5em" }}
      >
        Crash
      </button>
      
    </div>
  );
}

export { ErrorComponent, FallbackComponent };
