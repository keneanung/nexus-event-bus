---
authors: keneanung
---

# Initial Release v0.0.3

`Hello World!`

And with that out of the way, I present the first release on my event bus package for the Nexus MUD client.

While there are already implementations of the event bus for the Nexus MUD client (ie as part of the NexSys and NexGUI projects), I wanted to make a package that is not part of a larger project. Instead this project can be installed individually and be used as a dependency for other projects. This should make it easier for the community to adapt a set of lightweight standard packages that still allow the users a large amount of flexibility to use the packages they like.

This release is the minimal viable product and contains the most basic functionality: Registering event handlers, raising events and unregistering event handlers. The [API documentation](https://keneanung.github.io/nexus-event-bus/docs/api) has all the gritty details.

More features may be added in the future. Feel free to [create a new issue](https://github.com/keneanung/nexus-event-bus/issues/new) to discuss further extnsions.

If you like my work and want to support me, please consider [sponsoring me](https://github.com/sponsors/keneanung).

Oh, and why is the initial release version `0.0.3`? Well, I messed up the packaging, so I had to redo it a few times. I'm sorry.
