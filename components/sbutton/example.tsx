import { SButton } from "./component";

export default function SButtonExample() {
  return (
    <div className="grid gap-6 max-w-4xl mx-auto p-6">
      {/* Button Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Button Variants</h3>
        <div className="flex flex-wrap gap-3">
          <SButton variant="primary">Primary</SButton>
          <SButton variant="secondary">Secondary</SButton>
          <SButton variant="danger">Danger</SButton>
          <SButton variant="success">Success</SButton>
        </div>
      </div>

      {/* Button Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Button Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <SButton size="small" variant="primary">
            Small
          </SButton>
          <SButton size="medium" variant="primary">
            Medium
          </SButton>
          <SButton size="large" variant="primary">
            Large
          </SButton>
        </div>
      </div>

      {/* Button States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Button States</h3>
        <div className="flex flex-wrap gap-3">
          <SButton variant="primary">Normal</SButton>
          <SButton variant="primary" disabled>
            Disabled
          </SButton>
        </div>
      </div>

      {/* Interactive Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Example</h3>
        <SButton
          variant="primary"
          onClick={() => alert("Button clicked!")}
          className="hover:scale-105 transition-transform"
        >
          Click Me!
        </SButton>
      </div>
    </div>
  );
}
