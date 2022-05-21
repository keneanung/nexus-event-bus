---
authors: keneanung
---

# Developer Experience: v0.4.0

This release focuses mainly on the developer experience and only has a minor change for users.

## Error messages now include callback name and event name

If a callback errors, error messages would simply print the error message and a stacktrace. This has been enhanced to include the callback and event names.

## Developer experience changes

To improve the developer experience, the following changes have been made:

- The TypeScript code allows the usage of the latest syntax. The code is then transpiled to older JavaScript compatibility using Babel.
- Explicitly define the supported browsers. Most notably, Internet Explorer 11 is not supported as it increases the code size immensely and is not officially supported by Microsoft anymore.
- Configure StrykerJS. This is a tool that can find holes in your test coverage by mutating your code with common programming mistakes and making sure your tests catch those.

If you find bugs, would like to see more features and discuss particular design choices, feel free to [create a new issue](https://github.com/keneanung/nexus-event-bus/issues/new) to get in touch.

If you like my work and want to support me, please consider [sponsoring me](https://github.com/sponsors/keneanung).
