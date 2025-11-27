import { Kbd } from "@/registry/spell-ui/kbd";

export function Demo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Copy:</span>
        <Kbd keys={["alt", "C"]} listenToKeyboard />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Paste:</span>
        <Kbd keys={["alt", "V"]} listenToKeyboard />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Undo:</span>
        <Kbd keys={["alt", "Z"]} listenToKeyboard />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Find:</span>
        <Kbd keys={["alt", "F"]} listenToKeyboard />
      </div>
    </div>
  );
}
