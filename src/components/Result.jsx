"use client";
import Detailed from "./result/Detailed";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import Simpled from "./result/Simpled";

const Result = ({ result }) => {
  const [isDetailed, setIsDetailed] = useState(true);
  const handleSwitchChange = () => {
    setIsDetailed(!isDetailed);
  };
  return (
    <>
      {/* Result Detailed */}
      {isDetailed ? <Detailed result={result} /> : <Simpled result={result} />}

      {/* Switch Result Mode */}
      <div className="flex items-center space-x-2 mt-4 justify-center">
        <Label htmlFor="airplane-mode">Simple</Label>
        <Switch
          id="airplane-mode"
          checked={isDetailed}
          onCheckedChange={handleSwitchChange}
        />
        <Label htmlFor="airplane-mode">Detail</Label>
      </div>
    </>
  );
};
export default Result;
