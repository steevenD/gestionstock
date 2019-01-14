import {Component, Inject, OnInit} from '@angular/core';
import {Produit} from '../../model/Produit';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-description-modal',
  templateUrl: './description-modal.component.html',
  styleUrls: ['./description-modal.component.css']
})
export class DescriptionModalComponent implements OnInit {

  produit: Produit;

  constructor(
    public dialogRef: MatDialogRef<DescriptionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit() {
    this.produit = this.data.produitToDisplay;
  }

}
