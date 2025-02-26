import React, { useState } from "react";
import { Checkbox, Card } from "antd";

const STORAGE_OPTIONS = ["16GB", "32GB", "64GB", "128GB", "256GB", "512GB", "1TB"];

const StorageFilter = () => {
  const [selectedStorage, setSelectedRams] = useState([]);

  const handleChange = (checkedValues) => {
    setSelectedRams(checkedValues);
    console.log("Selected RAMs:", checkedValues);
  };

  return (
    <Card title="Filer By Storage" className="w-full mx-auto mt-10 p-4">
      <Checkbox.Group
        options={STORAGE_OPTIONS}
        value={selectedStorage}
        onChange={handleChange}
        className="flex flex-col gap-2"
      />
    </Card>
  );
};

export default StorageFilter;