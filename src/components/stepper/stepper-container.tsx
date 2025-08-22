"use client";
import React, { ReactElement } from "react";
import { IStepperItemProps } from "./stepper-item";

interface StepperContainerProps {
  activeStep?: number | null;
  children: React.ReactNode;
}

export default function StepperContainer({ activeStep, children }: StepperContainerProps) {
  return (
    <ul className="flex items-center justify-between w-full col-span-12 gap-8 p-5">
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const element = child as ReactElement<IStepperItemProps>;

        return React.cloneElement(element, {
          step: element.props.step ?? index + 1,
          activeStep,
        });
      })}
    </ul>
  );
}