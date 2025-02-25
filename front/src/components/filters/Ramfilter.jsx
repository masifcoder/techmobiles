import React, { useState } from "react";
import { Checkbox } from "antd";

const RAM_OPTIONS = ["2GB", "4GB", "6GB", "8GB", "12GB", "16GB", "32GB"];

const RamFilter = () => {
  const [selectedRams, setSelectedRams] = useState([]);

  const handleChange = (checkedValues) => {
    setSelectedRams(checkedValues);
    console.log("Selected RAMs:", checkedValues);
  };

  return (
    <div className="p-4 w-64 bg-white rounded-2xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">RAM Options</h3>
      <Checkbox.Group
        options={RAM_OPTIONS}
        value={selectedRams}
        onChange={handleChange}
        className="flex flex-col gap-2"
      />
    </div>
  );
};

export default RamFilter;