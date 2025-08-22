import { Progress } from "@heroui/react";
import { twMerge } from "tailwind-merge";

export interface IStepperItemProps {
  step?: number;       // injetado pelo Container
  label: string;
  activeStep?: number | null; // injetado pelo Container
}

export function StepperItem({ step = 1, label, activeStep = 1 }: IStepperItemProps) {
  const isActive = step === activeStep;
  const isCompleted = activeStep == null || step < activeStep;

  return (
    <li className="flex flex-col flex-1 gap-4">
      <div className="flex gap-4 items-center">
        <div
          className={twMerge(
            "flex items-center justify-center w-10 h-10 rounded-full font-bold border-2 transition-colors",
            isActive && "border-primary text-primary",
            isCompleted && "bg-primary border-primary text-white",
            !isActive && !isCompleted && "border-gray-300 text-gray-400 font-semibold"
          )}
        >
          {step.toString().padStart(2, "0")}
        </div>
        <span
          className={twMerge(
            "text-sm transition-colors",
            isActive && "font-bold text-primary",
            isCompleted && "font-semibold text-primary",
            !isActive && !isCompleted && "font-medium text-gray-400"
          )}
        >
          {label}
        </span>
      </div>

      <Progress
        radius="none"
        size="sm"
        isIndeterminate={isActive}
        value={isCompleted ? 100 : 0}
        color={isActive || isCompleted ? "primary" : "default"}
        className="w-full"
      />
    </li>
  );
}