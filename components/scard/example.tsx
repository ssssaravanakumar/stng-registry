import { SCard } from "stng-react";

export default function SCardExample() {
  return (
    <div className="grid gap-6 max-w-4xl mx-auto p-6">
      {/* Basic Card */}
      <SCard
        title="Basic Card"
        subtitle="This is a simple card with title and subtitle"
      >
        <p className="text-gray-700">
          This is the main content of the card. You can put any React content
          here including text, images, buttons, and other components.
        </p>
      </SCard>

      {/* Card Variants */}
      <div className="grid md:grid-cols-3 gap-4">
        <SCard variant="default" title="Default Card" padding="medium">
          <p className="text-gray-600">Default variant with border</p>
        </SCard>

        <SCard variant="outlined" title="Outlined Card" padding="medium">
          <p className="text-gray-600">Outlined variant with thicker border</p>
        </SCard>

        <SCard variant="elevated" title="Elevated Card" padding="medium">
          <p className="text-gray-600">Elevated variant with shadow</p>
        </SCard>
      </div>

      {/* Card with Header and Footer */}
      <SCard
        header={
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Card with Header</h2>
            <span className="text-sm text-gray-500">Actions</span>
          </div>
        }
        footer={
          <div className="flex justify-end gap-2">
            <button className="px-3 py-1 text-sm bg-gray-200 rounded">
              Cancel
            </button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">
              Save
            </button>
          </div>
        }
        padding="medium"
      >
        <p className="text-gray-700">
          This card demonstrates the header and footer functionality. Perfect
          for forms, dialogs, or any content that needs clear sections.
        </p>
      </SCard>

      {/* Interactive Card */}
      <SCard
        variant="elevated"
        title="Interactive Card"
        subtitle="Click me!"
        onClick={() => alert("Card clicked!")}
        className="hover:scale-105 transition-transform cursor-pointer"
      >
        <p className="text-gray-700">
          This card is interactive and responds to clicks. Notice the hover
          effect and cursor change.
        </p>
      </SCard>
    </div>
  );
}
