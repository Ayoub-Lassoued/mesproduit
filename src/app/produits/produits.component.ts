import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
  produits: string[];
  constructor() {
    this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
  }

}
