# STNG Registry

A custom ShadCN-compatible component registry for the **stng-react** component library, designed to work seamlessly with V0 and ShadCN workflows.

## 🚀 Quick Start

### Using with V0

1. **Configure V0 to use this registry:**

   - Add this registry URL to your V0 project: `https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/index.json`
   - V0 will automatically detect and use your STNG React components

2. **Install dependencies:**
   ```bash
   npm install stng-react
   ```

### Using with ShadCN CLI

```bash
# Add components from this registry
npx shadcn-ui@latest add --registry https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/index.json sbutton
npx shadcn-ui@latest add --registry https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/index.json scard
```

## 📦 Available Components

### SButton

- **Category**: Elements → Button
- **Description**: A flexible button component with multiple variants and sizes
- **Variants**: `primary` | `secondary` | `danger` | `success`
- **Sizes**: `small` | `medium` | `large`
- **Features**: Click handlers, disabled state, custom styling

```jsx
import { SButton } from "stng-react";

<SButton variant="primary" size="medium" onClick={() => alert("Clicked!")}>
  Click Me
</SButton>;
```

### SCard

- **Category**: Layout → Container
- **Description**: A versatile card component for displaying structured content
- **Variants**: `default` | `outlined` | `elevated`
- **Padding**: `none` | `small` | `medium` | `large`
- **Features**: Header/footer sections, click handling, flexible content

```jsx
import { SCard } from "stng-react";

<SCard
  title="Card Title"
  subtitle="Card subtitle"
  variant="elevated"
  padding="medium"
>
  Card content goes here
</SCard>;
```

## 🏗️ Registry Structure

```
stng-registry/
├── index.json                 # Main registry index (V0 compatible)
├── package.json              # Registry metadata
├── README.md                 # Documentation
└── components/
    ├── sbutton/
    │   ├── component.tsx      # Component export
    │   ├── schema.json        # V0-compatible props schema
    │   └── example.tsx        # Usage examples
    └── scard/
        ├── component.tsx      # Component export
        ├── schema.json        # V0-compatible props schema
        └── example.tsx        # Usage examples
```

## 🔧 V0 Integration

This registry is specifically designed for V0 compatibility:

- **Registry Format**: Follows ShadCN registry JSON schema
- **Component Metadata**: Includes complete prop definitions, types, and defaults
- **Dependency Management**: Properly declares `stng-react` as a dependency
- **TypeScript Support**: Full type definitions and IntelliSense support
- **Tailwind Integration**: Compatible with Tailwind CSS styling

### Registry URL for V0:

```
https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/index.json
```

## 🛠️ Development

### Adding New Components

1. Create component folder: `components/{component-name}/`
2. Add required files:
   - `component.tsx` - Export from stng-react
   - `schema.json` - V0-compatible props schema
   - `example.tsx` - Usage examples
3. Update `index.json` with component metadata

### Schema Format

Each component schema follows V0 conventions:

```json
{
  "name": "ComponentName",
  "type": "registry:ui",
  "dependencies": ["stng-react"],
  "meta": {
    "importName": "ComponentName",
    "exportName": "default"
  },
  "props": {
    // Property definitions with types, defaults, descriptions
  }
}
```

## 📋 Requirements

- **stng-react**: ^1.0.0
- **React**: ^18.0.0
- **React DOM**: ^18.0.0
- **TypeScript**: For type support (recommended)
- **Tailwind CSS**: For styling (recommended)

## 🚀 Deployment

This registry is hosted on GitHub and served via GitHub Pages/raw content. V0 and ShadCN CLI can directly consume the registry from:

```
https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/index.json
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add/update components following the established structure
4. Update documentation
5. Submit a pull request

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/ssssaravanakumar/stng-registry/issues)
- **Email**: career.saravanakumar@gmail.com
- **STNG React Library**: [npm package](https://www.npmjs.com/package/stng-react)

---

**Made with ❤️ for the React community**
