import { SRadio } from "./component";

export default function SRadioExample() {
  return (
    <div className="grid gap-6 max-w-4xl mx-auto p-6">
      {/* Basic Radio Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Radio Buttons</h3>
        <div className="space-y-3">
          <SRadio value="option1" name="basic" label="Option 1" />
          <SRadio value="option2" name="basic" label="Option 2" checked />
          <SRadio value="option3" name="basic" label="Option 3" />
        </div>
      </div>

      {/* Radio Button Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Radio Button Sizes</h3>
        <div className="space-y-3">
          <SRadio value="small" name="sizes" size="small" label="Small radio" />
          <SRadio
            value="medium"
            name="sizes"
            size="medium"
            label="Medium radio"
            checked
          />
          <SRadio value="large" name="sizes" size="large" label="Large radio" />
        </div>
      </div>

      {/* Radio Button States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Radio Button States</h3>
        <div className="space-y-3">
          <SRadio
            value="normal"
            name="states"
            label="Normal radio"
            helperText="This is a normal radio button"
          />
          <SRadio
            value="disabled"
            name="states"
            label="Disabled radio"
            disabled
            helperText="This radio is disabled"
          />
          <SRadio
            value="error"
            name="states"
            label="Error radio"
            error
            helperText="This radio has an error"
          />
          <SRadio
            value="required"
            name="states"
            label="Required radio"
            required
            helperText="This radio is required"
          />
        </div>
      </div>

      {/* Radio Group Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Radio Group Example</h3>
        <fieldset className="border border-gray-200 rounded-lg p-4">
          <legend className="text-sm font-medium text-gray-900 px-2">
            Choose your preferred contact method:
          </legend>
          <div className="mt-4 space-y-3">
            <SRadio
              value="email"
              name="contact"
              label="Email"
              helperText="We'll send updates to your email address"
              onChange={(e) => console.log("Selected:", e.target.value)}
            />
            <SRadio
              value="phone"
              name="contact"
              label="Phone"
              helperText="We'll call you with important updates"
              onChange={(e) => console.log("Selected:", e.target.value)}
            />
            <SRadio
              value="sms"
              name="contact"
              label="SMS"
              helperText="We'll send text messages to your phone"
              onChange={(e) => console.log("Selected:", e.target.value)}
            />
            <SRadio
              value="mail"
              name="contact"
              label="Postal Mail"
              helperText="We'll send physical letters to your address"
              onChange={(e) => console.log("Selected:", e.target.value)}
            />
          </div>
        </fieldset>
      </div>

      {/* Interactive Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Example</h3>
        <div className="space-y-3">
          <SRadio
            value="yes"
            name="interactive"
            label="Yes, I agree"
            onChange={(e) => console.log("Radio changed:", e.target.value)}
          />
          <SRadio
            value="no"
            name="interactive"
            label="No, I disagree"
            onChange={(e) => console.log("Radio changed:", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
