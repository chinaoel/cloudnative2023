import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Graph = ({ data, current, setSelected }) => {
  const spaces = data[current];

  return (
    <div className="rounded-3xl bg-neutral-200 flex flex-1 flex-col justify-center">
      <RadioGroup
        className="flex justify-around items-center"
        onValueChange={(value) => {
          setSelected(value);
        }}
      >
        <div className="flex flex-col">
          {Object.keys(spaces)
            .slice(0, 6)
            .map((key) => (
              <div key={key}>
                <RadioGroupItem
                  value={
                    current + (parseInt(key) + 1).toString().padStart(2, "0")
                  }
                  id={key}
                  className="peer sr-only"
                  disabled={!spaces[key]}
                />
                <Label
                  htmlFor={key}
                  className="w-14 bg-[#CFE8C6] peer-disabled:bg-neutral-400 rounded text-[#75B066] peer-disabled:text-neutral-300 flex justify-center px-1 py-2 lg:p-2 border-4 border-neutral-200 peer-data-[state=checked]:border-[#75B066]"
                >
                  <p className="text-12">
                    {current + (parseInt(key) + 1).toString().padStart(2, "0")}
                  </p>
                </Label>
              </div>
            ))}
        </div>
        <div className="flex">
          <div className="flex flex-col">
            {Object.keys(spaces)
              .slice(6, 10)
              .map((key) => (
                <div key={key}>
                  <RadioGroupItem
                    value={
                      current + (parseInt(key) + 1).toString().padStart(2, "0")
                    }
                    id={key}
                    className="peer sr-only"
                    disabled={!spaces[key]}
                  />
                  <Label
                    htmlFor={key}
                    className="w-14 bg-[#CFE8C6] peer-disabled:bg-neutral-400 rounded text-[#75B066] peer-disabled:text-neutral-300 flex justify-center px-1 py-2 lg:p-2 border-4 border-neutral-200 peer-data-[state=checked]:border-[#75B066]"
                  >
                    <p className="text-12">
                      {current +
                        (parseInt(key) + 1).toString().padStart(2, "0")}
                    </p>
                  </Label>
                </div>
              ))}
          </div>
          <div className="flex flex-col">
            {Object.keys(spaces)
              .slice(10, 14)
              .map((key) => (
                <div key={key}>
                  <RadioGroupItem
                    value={
                      current + (parseInt(key) + 1).toString().padStart(2, "0")
                    }
                    id={key}
                    className="peer sr-only"
                    disabled={!spaces[key]}
                  />
                  <Label
                    htmlFor={key}
                    className="w-14 bg-[#CFE8C6] peer-disabled:bg-neutral-400 rounded text-[#75B066] peer-disabled:text-neutral-300 flex justify-center px-1 py-2 lg:p-2 border-4 border-neutral-200 peer-data-[state=checked]:border-[#75B066]"
                  >
                    <p className="text-12">
                      {current +
                        (parseInt(key) + 1).toString().padStart(2, "0")}
                    </p>
                  </Label>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col">
          {Object.keys(spaces)
            .slice(14, 20)
            .map((key) => (
              <div key={key}>
                <RadioGroupItem
                  value={
                    current + (parseInt(key) + 1).toString().padStart(2, "0")
                  }
                  id={key}
                  className="peer sr-only"
                  disabled={!spaces[key]}
                />
                <Label
                  htmlFor={key}
                  className="w-14 bg-[#CFE8C6] peer-disabled:bg-neutral-400 rounded text-[#75B066] peer-disabled:text-neutral-300 flex justify-center px-1 py-2 lg:p-2 border-4 border-neutral-200 peer-data-[state=checked]:border-[#75B066]"
                >
                  <p className="text-12">
                    {current + (parseInt(key) + 1).toString().padStart(2, "0")}
                  </p>
                </Label>
              </div>
            ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default Graph;