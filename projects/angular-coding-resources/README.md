Angular Coding Resources
========================
Library für den Angular Programmier Kurs von Jürg Danuser. 

[Dokumentation](https://tschuegge.github.io/angular-coding-resources/)

Installation
------------
Die Library kann über npm installiert werden: `npm install @tschuegge/angular-coding-resources`

Verwendung
----------
Das Library-Modul kann im Root-Modul geladen werden.

```ts
// Root Module (Datei: src/app.module.ts)

// AngularCodingResourcesModule vom npm-Package importieren
import { AngularCodingResourcesModule } from '@tschuegge/angular-coding-resources';

// AngularCodingResourcesModule im Root-Modul registrieren
@NgModule({
  // ...
  imports: [
    // ...
    AngularCodingResourcesModule // AngularCodingResourcesModule im Array "imports" hinzufügen
  ],
  // ...
})
export class AppModule { }
```

Danach kann beispielsweise die ColoredCircleComponent in den Templates verwendet werden.

```html
<acr-colored-circle [size]="150" [color]="'red'"></acr-colored-circle>
```