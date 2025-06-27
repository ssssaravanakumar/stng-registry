import { SSelect } from "./component";

export default function SSelectExample() {
  const basicOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4", disabled: true },
  ];

  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "fr", label: "France" },
    { value: "de", label: "Germany" },
    { value: "jp", label: "Japan" },
    { value: "au", label: "Australia" },
  ];

  const priorityOptions = [
    { value: "low", label: "Low Priority" },
    { value: "medium", label: "Medium Priority" },
    { value: "high", label: "High Priority" },
    { value: "urgent", label: "Urgent" },
  ];

  return (
    <div className="grid gap-6 max-w-4xl mx-auto p-6">
      {/* Basic Select */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Select</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <SSelect
            options={basicOptions}
            placeholder="Choose an option"
            label="Basic Select"
          />
          <SSelect
            options={basicOptions}
            value="option2"
            label="Pre-selected Option"
          />
        </div>
      </div>

      {/* Select Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Select Sizes</h3>
        <div className="space-y-3">
          <SSelect
            options={basicOptions}
            size="small"
            placeholder="Small select"
            label="Small"
          />
          <SSelect
            options={basicOptions}
            size="medium"
            placeholder="Medium select"
            label="Medium"
          />
          <SSelect
            options={basicOptions}
            size="large"
            placeholder="Large select"
            label="Large"
          />
        </div>
      </div>

      {/* Select Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Select Variants</h3>
        <div className="space-y-3">
          <SSelect
            options={basicOptions}
            variant="default"
            placeholder="Default variant"
            label="Default"
          />
          <SSelect
            options={basicOptions}
            variant="outlined"
            placeholder="Outlined variant"
            label="Outlined"
          />
          <SSelect
            options={basicOptions}
            variant="filled"
            placeholder="Filled variant"
            label="Filled"
          />
        </div>
      </div>

      {/* Select States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Select States</h3>
        <div className="space-y-3">
          <SSelect
            options={basicOptions}
            placeholder="Normal select"
            label="Normal"
            helperText="Choose from the available options"
          />
          <SSelect
            options={basicOptions}
            placeholder="Disabled select"
            label="Disabled"
            disabled
            helperText="This select is disabled"
          />
          <SSelect
            options={basicOptions}
            placeholder="Error select"
            label="Error"
            error
            helperText="Please select a valid option"
          />
          <SSelect
            options={basicOptions}
            placeholder="Required select"
            label="Required"
            required
            helperText="This field is required"
          />
        </div>
      </div>

      {/* Multiple Select */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Multiple Select</h3>
        <SSelect
          options={priorityOptions}
          multiple
          label="Select Multiple Priorities"
          helperText="Hold Ctrl/Cmd to select multiple options"
        />
      </div>

      {/* Real-world Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Real-world Examples</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <SSelect
            options={countryOptions}
            placeholder="Select your country"
            label="Country"
            helperText="Choose your country of residence"
          />
          <SSelect
            options={priorityOptions}
            placeholder="Set priority level"
            label="Priority"
            helperText="Select the urgency level"
          />
        </div>
      </div>

      {/* Interactive Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Example</h3>
        <SSelect
          options={countryOptions}
          placeholder="Choose a country..."
          label="Interactive Select"
          helperText="This select responds to changes"
          onChange={(e) => console.log("Select changed:", e.target.value)}
          onFocus={() => console.log("Select focused")}
          onBlur={() => console.log("Select blurred")}
        />
      </div>
    </div>
  );
}
