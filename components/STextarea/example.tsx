import { STextarea } from "./component";

export default function STextareaExample() {
  return (
    <div className="grid gap-6 max-w-4xl mx-auto p-6">
      {/* Basic Textarea */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Textarea</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <STextarea placeholder="Enter your message..." label="Message" />
          <STextarea
            value="This is a pre-filled textarea"
            label="Pre-filled Content"
          />
        </div>
      </div>

      {/* Textarea Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Textarea Sizes</h3>
        <div className="space-y-3">
          <STextarea
            size="small"
            placeholder="Small textarea"
            label="Small"
            rows={3}
          />
          <STextarea
            size="medium"
            placeholder="Medium textarea"
            label="Medium"
            rows={4}
          />
          <STextarea
            size="large"
            placeholder="Large textarea"
            label="Large"
            rows={5}
          />
        </div>
      </div>

      {/* Textarea Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Textarea Variants</h3>
        <div className="space-y-3">
          <STextarea
            variant="default"
            placeholder="Default variant"
            label="Default"
          />
          <STextarea
            variant="outlined"
            placeholder="Outlined variant"
            label="Outlined"
          />
          <STextarea
            variant="filled"
            placeholder="Filled variant"
            label="Filled"
          />
        </div>
      </div>

      {/* Textarea Resize Options */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Resize Options</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <STextarea
            resize="none"
            placeholder="No resize"
            label="No Resize"
            helperText="This textarea cannot be resized"
          />
          <STextarea
            resize="vertical"
            placeholder="Vertical resize only"
            label="Vertical Resize"
            helperText="Can only be resized vertically"
          />
          <STextarea
            resize="horizontal"
            placeholder="Horizontal resize only"
            label="Horizontal Resize"
            helperText="Can only be resized horizontally"
          />
          <STextarea
            resize="both"
            placeholder="Both directions"
            label="Both Directions"
            helperText="Can be resized in both directions"
          />
        </div>
      </div>

      {/* Textarea States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Textarea States</h3>
        <div className="space-y-3">
          <STextarea
            placeholder="Normal textarea"
            label="Normal"
            helperText="This is a normal textarea"
          />
          <STextarea
            placeholder="Disabled textarea"
            label="Disabled"
            disabled
            helperText="This textarea is disabled"
          />
          <STextarea
            placeholder="Error textarea"
            label="Error"
            error
            helperText="This field has an error"
          />
          <STextarea
            placeholder="Required textarea"
            label="Required"
            required
            helperText="This field is required"
          />
        </div>
      </div>

      {/* Different Row Counts */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Different Row Counts</h3>
        <div className="space-y-3">
          <STextarea rows={2} placeholder="2 rows" label="Small (2 rows)" />
          <STextarea rows={6} placeholder="6 rows" label="Large (6 rows)" />
          <STextarea
            rows={10}
            placeholder="10 rows"
            label="Extra Large (10 rows)"
          />
        </div>
      </div>

      {/* Real-world Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Real-world Examples</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <STextarea
            placeholder="Tell us about your experience..."
            label="Feedback"
            rows={5}
            helperText="Please provide detailed feedback"
          />
          <STextarea
            placeholder="Describe the issue you're experiencing..."
            label="Bug Report"
            rows={5}
            required
            helperText="Include steps to reproduce the issue"
          />
        </div>
      </div>

      {/* Interactive Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Example</h3>
        <STextarea
          placeholder="Start typing..."
          label="Interactive Textarea"
          helperText="This textarea responds to changes"
          rows={4}
          onChange={(e) => console.log("Textarea changed:", e.target.value)}
          onFocus={() => console.log("Textarea focused")}
          onBlur={() => console.log("Textarea blurred")}
        />
      </div>
    </div>
  );
}
