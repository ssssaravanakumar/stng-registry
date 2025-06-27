# Complete V0 Integration Guide for STNG Registry

## 🚀 **Phase 1: Repository Preparation & Hosting**

### Step 1.1: GitHub Repository Setup

```bash
# Navigate to your registry directory
cd /Users/saravanakumar/Documents/CB/POC/STNG_REGISTRY/Stng-registry

# Initialize Git repository (if not already done)
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "feat: Complete STNG Registry with 8 components for V0 integration"

# Set main branch
git branch -M main

# Add GitHub remote origin
git remote add origin https://github.com/ssssaravanakumar/stng-registry.git

# Push to GitHub
git push -u origin main
```

### Step 1.2: Verify GitHub Pages Access

After pushing, your registry will be accessible at:

```
https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/index.json
```

**Verification Command:**

```bash
curl -s https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/index.json | jq '.'
```

---

## 🔧 **Phase 2: V0 Platform Configuration**

### Step 2.1: Access V0 Platform

1. **Navigate to V0**: Go to [v0.dev](https://v0.dev)
2. **Sign In**: Use your Vercel/GitHub account
3. **Create New Project**: Click "New Project" or use existing project

### Step 2.2: Configure Custom Registry

#### Method A: Project Settings (Recommended)

1. **Open Project Settings**:

   - Click on your project name
   - Navigate to "Settings" tab
   - Find "Component Registry" section

2. **Add Custom Registry**:

   ```
   Registry Name: STNG Components
   Registry URL: https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/index.json
   Description: Custom STNG React component library with 8 form and UI components
   ```

3. **Verify Registry Load**:
   - Check "Available Components" section
   - Should show: SButton, SCard, SCheckbox, SInput, SLabel, SRadio, SSelect, STextarea

#### Method B: Chat Configuration

In V0 chat, you can also specify:

```
Use components from registry: https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/index.json
```

---

## 💬 **Phase 3: V0 Prompt Engineering**

### Step 3.1: Component-Specific Prompts

#### **Form Creation Prompts**

```
"Create a user registration form using STNG components:
- SInput for email (outlined variant, required)
- SInput for password (outlined variant, required)
- SCheckbox for terms agreement
- SButton for submit (primary variant, large size)"
```

#### **Dashboard UI Prompts**

```
"Build a dashboard layout using:
- SCard components with elevated variant for statistics
- SSelect for filtering options
- SButton for actions (different variants)"
```

#### **Contact Form Prompts**

```
"Design a contact form with validation:
- SInput for name and email
- STextarea for message (6 rows)
- SRadio for inquiry type selection
- Error states for validation"
```

### Step 3.2: Advanced Prompt Techniques

#### **Specify Component Details**

```
"Create a product filter sidebar using:
- SSelect with country options (multiple selection)
- SCheckbox group for categories
- SInput for price range (number type)
- Apply error variant for validation feedback"
```

#### **Layout and Styling Prompts**

```
"Build a responsive form layout:
- 2-column grid on desktop, single column on mobile
- Use SCard as container with medium padding
- SButton group with primary/secondary variants
- Include SLabel with required indicators"
```

---

## 🎯 **Phase 4: Component Usage Patterns**

### Step 4.1: Generated Code Examples

When V0 generates code, expect patterns like:

#### **Form Components**

```jsx
import { SInput, SButton, SCheckbox, STextarea } from "stng-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    newsletter: false,
  });

  return (
    <form className="space-y-6 max-w-md mx-auto">
      <SInput
        label="Full Name"
        placeholder="Enter your name"
        variant="outlined"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <SInput
        type="email"
        label="Email"
        placeholder="your@email.com"
        variant="outlined"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <STextarea
        label="Message"
        placeholder="Tell us about your inquiry..."
        rows={5}
        variant="outlined"
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <SCheckbox
        label="Subscribe to newsletter"
        checked={formData.newsletter}
        onChange={(e) =>
          setFormData({ ...formData, newsletter: e.target.checked })
        }
      />

      <SButton type="submit" variant="primary" size="large" className="w-full">
        Send Message
      </SButton>
    </form>
  );
}
```

#### **Dashboard Layouts**

```jsx
import { SCard, SButton, SSelect } from "stng-react";

export default function Dashboard() {
  const filterOptions = [
    { value: "all", label: "All Items" },
    { value: "active", label: "Active" },
    { value: "pending", label: "Pending" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header with filters */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-4">
          <SSelect
            options={filterOptions}
            placeholder="Filter by status"
            variant="outlined"
          />
          <SButton variant="primary">Add New</SButton>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SCard variant="elevated" padding="medium">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </SCard>

        <SCard variant="elevated" padding="medium">
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-3xl font-bold text-green-600">$45,678</p>
        </SCard>

        <SCard variant="elevated" padding="medium">
          <h3 className="text-lg font-semibold">Orders</h3>
          <p className="text-3xl font-bold text-purple-600">567</p>
        </SCard>
      </div>
    </div>
  );
}
```

---

## 🔍 **Phase 5: Testing & Validation**

### Step 5.1: Registry Validation

```bash
# Test registry accessibility
curl -I https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/index.json

# Expected response: HTTP/2 200

# Validate JSON structure
curl -s https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/index.json | jq '.registry[].name'

# Expected output: All 8 component names
```

### Step 5.2: Component Schema Validation

```bash
# Test individual component schemas
curl -s https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/components/SButton/schema.json | jq '.props'

# Verify all components have proper schemas
for component in SButton SCard SCheckbox SInput SLabel SRadio SSelect STextarea; do
  echo "Testing $component..."
  curl -s "https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/components/$component/schema.json" | jq '.name'
done
```

### Step 5.3: V0 Integration Testing

#### **Test 1: Simple Component Generation**

Prompt: `"Create a simple button using SButton with primary variant"`

Expected Result:

```jsx
import { SButton } from "stng-react";

export default function SimpleButton() {
  return (
    <SButton variant="primary" onClick={() => alert("Clicked!")}>
      Click Me
    </SButton>
  );
}
```

#### **Test 2: Complex Form Generation**

Prompt: `"Create a complete user profile form with all STNG form components"`

Expected Result: Multi-component form with proper imports and usage

#### **Test 3: Error Handling**

Prompt: `"Create a form with validation using error states from STNG components"`

Expected Result: Components with error props properly applied

---

## 📊 **Phase 6: Monitoring & Optimization**

### Step 6.1: Usage Analytics

Monitor V0 usage through:

- **GitHub Insights**: Repository access patterns
- **V0 Project Metrics**: Component usage frequency
- **Generated Code Quality**: Review AI-generated implementations

### Step 6.2: Registry Maintenance

#### **Adding New Components**

When adding new components to stng-react:

1. **Update Registry Structure**:

```bash
mkdir -p components/SNewComponent
touch components/SNewComponent/{component.tsx,schema.json,example.tsx}
```

2. **Update index.json**:

```json
{
  "name": "SNewComponent",
  "type": "registry:component",
  "files": ["components/SNewComponent/component.tsx"]
}
```

3. **Push Updates**:

```bash
git add .
git commit -m "feat: Add SNewComponent to registry"
git push origin main
```

#### **Schema Updates**

When component props change:

1. Update corresponding `schema.json`
2. Update `example.tsx` with new usage patterns
3. Test with V0 to ensure proper generation

---

## 🚨 **Phase 7: Troubleshooting**

### Common Issues & Solutions

#### **Issue 1: V0 Can't Access Registry**

```
Error: "Failed to load custom registry"
```

**Solution**:

- Verify GitHub repository is public
- Check raw URL accessibility
- Ensure index.json is valid JSON

#### **Issue 2: Components Not Generating Correctly**

```
Error: "Unknown component SButton"
```

**Solution**:

- Verify component is listed in index.json
- Check schema.json has correct metadata
- Ensure stng-react dependency is properly declared

#### **Issue 3: Props Not Working**

```
Error: "Property 'variant' does not exist"
```

**Solution**:

- Review schema.json prop definitions
- Ensure enum values match component implementation
- Update example.tsx with correct usage

### Debug Commands

```bash
# Validate registry JSON
jq empty index.json && echo "Valid JSON" || echo "Invalid JSON"

# Check component schemas
for dir in components/*/; do
  component=$(basename "$dir")
  echo "Checking $component..."
  jq empty "$dir/schema.json" && echo "✓ Valid" || echo "✗ Invalid"
done

# Test registry URL
curl -f https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/index.json > /dev/null && echo "Registry accessible" || echo "Registry not accessible"
```

---

## 🎉 **Phase 8: Success Metrics**

### What Success Looks Like:

1. **Registry Discovery**: V0 can load and parse your registry
2. **Component Recognition**: All 8 components appear in V0's component list
3. **Accurate Generation**: V0 generates syntactically correct code using your components
4. **Proper Imports**: Generated code includes correct stng-react imports
5. **Dependency Management**: V0 automatically adds stng-react to package.json
6. **Type Safety**: Generated TypeScript code passes type checking
7. **Functional Output**: Generated components work without modification

### Performance Indicators:

- **Response Time**: Registry loads within 2-3 seconds
- **Accuracy Rate**: 95%+ of generated code compiles successfully
- **Component Coverage**: All 8 components generate correctly
- **Prompt Understanding**: V0 correctly interprets component-specific prompts

---

This comprehensive integration ensures your STNG registry works seamlessly with V0, enabling rapid, AI-powered development with your custom component library!
