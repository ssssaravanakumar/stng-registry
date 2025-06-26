# V0 Integration Guide for STNG Registry

## Step-by-Step V0 Setup

### 1. GitHub Repository Setup

```bash
# Initialize git and push to GitHub
cd /Users/saravanakumar/Documents/CB/POC/STNG_REGISTRY/Stng-registry
git init
git add .
git commit -m "Initial commit: V0-compatible STNG Registry"
git branch -M main
git remote add origin https://github.com/ssssaravanakumar/stng-registry.git
git push -u origin main
```

### 2. V0 Registry Configuration

Once hosted on GitHub, your registry will be available at:

```
https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/index.json
```

### 3. Using Components in V0

In V0 prompts, you can now reference your components:

```
"Create a login form using SButton from stng-react with primary variant"
"Build a dashboard with SCard components using elevated variant"
```

### 4. Component Usage Examples

**SButton Usage:**

```jsx
<SButton variant="primary" size="large" onClick={handleSubmit}>
  Submit Form
</SButton>
```

**SCard Usage:**

```jsx
<SCard
  title="User Profile"
  variant="elevated"
  header={<UserAvatar />}
  footer={<ActionButtons />}
>
  <UserDetails />
</SCard>
```

### 5. Registry Validation

Test your registry with:

```bash
curl https://raw.githubusercontent.com/ssssaravanakumar/stng-registry/main/index.json
```

This should return your complete registry JSON with both components defined.

## Next Steps

1. **Push to GitHub**: Upload your registry to GitHub repository
2. **Test Registry URL**: Verify the raw JSON is accessible
3. **Configure V0**: Add the registry URL to your V0 project settings
4. **Test Components**: Create a test project using your components
5. **Expand Library**: Add more STNG React components as needed
