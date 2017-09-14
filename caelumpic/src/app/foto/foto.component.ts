import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent {
  @Input() url: String;
  @Input() title: String;
}
