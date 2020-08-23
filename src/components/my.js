import React, { useState } from "react";

function My() {
  const [name, setName] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>this is {name}</div>
      <button>hi</button>
    </div>
  );
}

export default My;
