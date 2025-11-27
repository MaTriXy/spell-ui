import { Kbd } from "@/registry/spell-ui/kbd";

export function Demo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">Press M key to activate</p>
      <Kbd keys={[{ display: "HOLD", key: "M" }]} listenToKeyboard />
    </div>
  );
}
