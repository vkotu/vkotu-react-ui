import React from "react";
import { Button, Badge } from "./lib/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button isPrimary={true} />
        <hr />
        <Button isPrimary={false} />
        <hr />
        <Badge type="success">success</Badge>
        <hr />
        <Badge> warning </Badge>
      </header>
    </div>
  );
}

export default App;
