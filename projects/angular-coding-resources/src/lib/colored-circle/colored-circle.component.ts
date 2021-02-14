import { Component, Input } from '@angular/core';

/**
 * Zeigt einen Kreis an
 *
 * @example
 * <acr-colored-circle [size]="150" [color]="'red'"></acr-colored-circle>
 */

@Component({
  selector: 'acr-colored-circle',
  templateUrl: './colored-circle.component.html'
})
export class ColoredCircleComponent {

  /**
   * CSS kompatibler Farbname: https://developer.mozilla.org/de/docs/Web/CSS/Farben#farbschlüsselwörter
   */
  @Input()
  color = 'lightgray';

  /**
   * Durchmesser in Pixel
   */
  @Input()
  size = 100;

}
