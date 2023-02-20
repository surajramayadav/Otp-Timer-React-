import React from "react";
export default function App() {
  let clearinterval;



  const trigger = (initialTime) => {
    const dfifference = initialTime - +new Date()
    if (dfifference >= 0) {
      console.log(Math.round(dfifference / 1000))
    } else {
      clearinterval(clearinterval)
    }

  }

  React.useEffect(() => {
    console.log(new Date())
    const initialTime = +new Date() + 120 * 1000;
    setInterval(() => trigger(initialTime), 1000);
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
