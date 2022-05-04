---
authors: keneanung
---

# Random Values: v0.2.0

The new Nexus client will be available on multiple platforms, using React Native. During testing, people noticed that the Web API for generating cryptographically secure random numbers are not available and thus the UUID package we depend on was unable to load.

A proper polyfill is curently impossible as we can not ship Java modules in Nexus packages. Luckily, the UUID package allows to supply a cusom function for generating the required random values. As a workaround, this functionality was used in connection with Math.random to supply the needed information.

That means however, that our UUIDs are not as random as they usually are. But for our use case of generating random names, this should be good enough.
