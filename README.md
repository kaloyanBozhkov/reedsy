# reedsy

To install dependencies:

```bash
bun install
```

To run:

```bash
bun dev:server
bun dev:client

or

bun dev:both
```

# Fun Fact

```
Deploying Express API to vercel does not require building the server. Vercel reads the .js or .ts files upon request, and handles the transpilation and all that cool stuff. Because of this, do not run build for server.

This means client can be deployed normally.
```
