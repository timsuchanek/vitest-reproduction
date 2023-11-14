# Vitest OpenAI patching reproduction

Reproduction for https://github.com/vitest-dev/vitest/discussions/4500

When running `yarn start`, you'll see `patched` seeing logged to the console.
However, this does not happen when running `yarn test` or `yarn vitest`.
