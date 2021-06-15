import React from "react";
import ReactJson from "react-json-view";

export const Example = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <ReactJson
        src={{ foo: 0 }}
        shouldCollapse={false}
        collapsed={false}
        enableClipboard={false}
      />
    </div>
  );
};
