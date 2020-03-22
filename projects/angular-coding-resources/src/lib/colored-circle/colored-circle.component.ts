import { Component, OnInit, Input } from '@angular/core';

/**
 * Zeigt einen Kreis an
 */

@Component({
  selector: 'acr-colored-circle',
  templateUrl: './colored-circle.component.html'
})
export class ColoredCircleComponent {

  /**
   * CSS kompatibler Farbname: https://developer.mozilla.org/de/docs/Web/CSS/Farben#Farbschlüsselwörter
   */
  @Input()
  color = 'lightgray';

  /**
   * Durchmesser in Pixel
   */
  @Input()
  size = 100;

}
