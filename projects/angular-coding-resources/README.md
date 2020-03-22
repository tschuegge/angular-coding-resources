Angular Coding Resources
========================
Library für den Angular Programmier Kurs von Jürg Danuser.

Installation
------------
Die Library kann über npm installiert werden: `npm install @tschuegge/angular-coding-resources`

Verwendung
----------
Das Library-Modul kann im Root-Modul geladen werden.

```ts
// Root Module (src/app.module.ts)

import { AngularCodingResourcesModule } from '@tschuegge/angular-coding-resources';

// ...
imports: [
  AngularCodingResourcesModule
],
// ...
```

Danach kann beispielsweise die ColoredCircleComponent in den Templates verwendet werden.

```html
<acr-colored-circle [size]="150" [color]="'red'"></acr-colored-circle>
```