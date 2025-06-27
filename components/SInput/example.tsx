import { SInput } from "./component";

export default function SInputExample() {
  return (
    <div className="grid gap-6 max-w-4xl mx-auto p-6">
      {/* Basic Inputs */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Inputs</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <SInput placeholder="Enter your name" label="Name" />
          <SInput placeholder="Enter your email" label="Email" type="email" />
        </div>
      </div>

      {/* Input Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Input Sizes</h3>
        <div className="space-y-3">
          <SInput size="small" placeholder="Small input" label="Small" />
          <SInput size="medium" placeholder="Medium input" label="Medium" />
          <SInput size="large" placeholder="Large input" label="Large" />
        </div>
      </div>

      {/* Input Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Input Variants</h3>
        <div className="space-y-3">
          <SInput
            variant="default"
            placeholder="Default variant"
            label="Default"
          />
          <SInput
            variant="outlined"
            placeholder="Outlined variant"
            label="Outlined"
          />
          <SInput
            variant="filled"
            placeholder="Filled variant"
            label="Filled"
          />
        </div>
      </div>

      {/* Input Types */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Input Types</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <SInput type="text" placeholder="Text input" label="Text" />
          <SInput type="email" placeholder="email@example.com" label="Email" />
          <SInput type="password" placeholder="Password" label="Password" />
          <SInput type="number" placeholder="123" label="Number" />
          <SInput type="tel" placeholder="+1 (555) 000-0000" label="Phone" />
          <SInput
            type="url"
            placeholder="https://example.com"
            label="Website"
          />
        </div>
      </div>

      {/* Input States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Input States</h3>
        <div className="space-y-3">
          <SInput
            placeholder="Normal input"
            label="Normal"
            helperText="This is a helper text"
          />
          <SInput
            placeholder="Disabled input"
            label="Disabled"
            disabled
            helperText="This input is disabled"
          />
          <SInput
            placeholder="Error input"
            label="Error"
            error
            helperText="This field has an error"
          />
          <SInput
            placeholder="Required input"
            label="Required"
            required
            helperText="This field is required"
          />
        </div>
      </div>

      {/* Interactive Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Example</h3>
        <SInput
          placeholder="Type something..."
          label="Interactive Input"
          helperText="This input responds to changes"
          onChange={(e) => console.log("Input changed:", e.target.value)}
          onFocus={() => console.log("Input focused")}
          onBlur={() => console.log("Input blurred")}
        />
      </div>
    </div>
  );
}
