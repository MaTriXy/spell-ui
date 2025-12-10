"use client";

import { AnimatedCheckbox } from "@/registry/spell-ui/animated-checkbox";

export function Demo() {
  return (
    <div className="flex flex-col gap-2">
      <AnimatedCheckbox title="Implement Checkbox" />
      <AnimatedCheckbox title="Write documentation" />
      <AnimatedCheckbox title="Add tests" defaultChecked />
    </div>
  );
}
