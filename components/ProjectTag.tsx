import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectTagProps = {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
};

const ProjectTag = ({ name, onClick, isSelected } : ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <Button
      size={"lg"}
      className={cn("rounded-full border-2 px-6 !py-6 text-xl cursor-pointer",buttonStyles)}
      onClick={() => onClick(name)}
    >
      {name}
    </Button>
  );
};

export default ProjectTag;
