"use client";

import { CheckboxAnimation } from "@/registry/spell-ui/checkbox-animation";

export function Demo() {
  return (
    <div className="flex flex-col gap-2">
      <CheckboxAnimation title="Implement Checkbox" />
      <CheckboxAnimation title="Write documentation" />
      <CheckboxAnimation title="Add tests" defaultChecked />
    </div>
  );
}
