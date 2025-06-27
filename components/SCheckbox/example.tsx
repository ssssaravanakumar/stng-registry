import { SCheckbox } from "./component";

export default function SCheckboxExample() {
  return (
    <div className="grid gap-6 max-w-4xl mx-auto p-6">
      {/* Basic Checkboxes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Checkboxes</h3>
        <div className="space-y-3">
          <SCheckbox label="Default checkbox" />
          <SCheckbox checked label="Checked checkbox" />
          <SCheckbox indeterminate label="Indeterminate checkbox" />
          <SCheckbox disabled label="Disabled checkbox" />
          <SCheckbox checked disabled label="Checked disabled" />
        </div>
      </div>

      {/* Checkbox Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Checkbox Sizes</h3>
        <div className="space-y-3">
          <SCheckbox size="small" label="Small checkbox" />
          <SCheckbox size="medium" label="Medium checkbox" />
          <SCheckbox size="large" label="Large checkbox" />
        </div>
      </div>

      {/* Checkbox Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Checkbox Variants</h3>
        <div className="space-y-3">
          <SCheckbox variant="default" label="Default variant" />
          <SCheckbox variant="rounded" label="Rounded variant" />
        </div>
      </div>

      {/* Error State */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Error State</h3>
        <div className="space-y-3">
          <SCheckbox
            error
            label="Error checkbox"
            helperText="This field has an error"
          />
          <SCheckbox
            required
            label="Required checkbox"
            helperText="This field is required"
          />
        </div>
      </div>

      {/* Interactive Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Example</h3>
        <SCheckbox
          label="I agree to the terms and conditions"
          helperText="Please read our terms before proceeding"
          onChange={(e) => console.log("Checkbox changed:", e.target.checked)}
        />
      </div>
    </div>
  );
}
