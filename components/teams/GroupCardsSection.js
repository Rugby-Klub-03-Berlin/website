import React from "react";

import Adults from "./Adults";
import Newbies from "./Newbies";

const GroupCardSection = () => {
  return (
    <div className="mb-4">
      <Adults />
      <Newbies />
    </div>
  );
};

export default GroupCardSection;
