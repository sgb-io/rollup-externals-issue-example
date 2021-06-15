import React, { useEffect, useState } from "react";
import { partition } from "lodash";
import { Example } from "./Example";

const App = () => {
  const [content, setContent] = useState(undefined);
  useEffect(() => {
    setContent(partition([1, 2, 3, 4], (n) => n % 2));
  });

  return (
    <div>
      <h1>App foobar</h1>
      <pre>{content}</pre>
      <Example />
    </div>
  );
};

export default App;
