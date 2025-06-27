import { SLabel } from "./component";

export default function SLabelExample() {
  return (
    <div className="grid gap-6 max-w-4xl mx-auto p-6">
      {/* Basic Labels */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Labels</h3>
        <div className="space-y-3">
          <SLabel>Default label</SLabel>
          <SLabel htmlFor="example-input">Label with htmlFor attribute</SLabel>
          <input
            id="example-input"
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Associated input"
          />
        </div>
      </div>

      {/* Label Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Label Sizes</h3>
        <div className="space-y-3">
          <SLabel size="small">Small label</SLabel>
          <SLabel size="medium">Medium label</SLabel>
          <SLabel size="large">Large label</SLabel>
        </div>
      </div>

      {/* Label Weights */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Label Weights</h3>
        <div className="space-y-3">
          <SLabel weight="normal">Normal weight</SLabel>
          <SLabel weight="medium">Medium weight</SLabel>
          <SLabel weight="semibold">Semibold weight</SLabel>
          <SLabel weight="bold">Bold weight</SLabel>
        </div>
      </div>

      {/* Label States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Label States</h3>
        <div className="space-y-3">
          <SLabel>Normal label</SLabel>
          <SLabel required>Required label</SLabel>
          <SLabel disabled>Disabled label</SLabel>
          <SLabel error>Error label</SLabel>
        </div>
      </div>

      {/* Form Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Form Example</h3>
        <div className="space-y-4">
          <div>
            <SLabel htmlFor="name" required size="medium" weight="semibold">
              Full Name
            </SLabel>
            <input
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <SLabel
              htmlFor="email"
              required
              error
              size="medium"
              weight="semibold"
            >
              Email Address
            </SLabel>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full border border-red-300 rounded-md px-3 py-2"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <SLabel htmlFor="bio" size="medium" weight="semibold">
              Biography
            </SLabel>
            <textarea
              id="bio"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Tell us about yourself..."
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
