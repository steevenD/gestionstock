import { Component, OnInit } from '@angular/core';
import {Produit, produits} from './model/Produit';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StockService} from './service/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  produits : Array<Produit> = produits;

  produitToDisplay : Produit;

  displayForm = true;

  produitForm: FormGroup;

  nomControl: FormControl;
  fournisseurControl: FormControl;
  ageControl: FormControl;
  descriptionControl: FormControl;

  constructor(private stockService: StockService, private fb: FormBuilder) {
    // this.idControl = this.fb.control('', [Validators.required]);
    this.nomControl = this.fb.control('', [Validators.required]);
    this.ageControl = this.fb.control('', [Validators.required, Validators.pattern('^[0-9]+$')]);
    this.descriptionControl = this.fb.control('', [Validators.required]);
    this.fournisseurControl = this.fb.control('', [Validators.required]);

    this.produitForm = this.fb.group({
      nomC: this.nomControl,
      fournisseurC: this.fournisseurControl,
      ageC: this.ageControl,
      descC: this.descriptionControl,
    });
  }


  ngOnInit() {
    this.produits = this.stockService.getAllProduits();
  }

  getDescription(nom: string){
    this.produitToDisplay = this.stockService.getProduit(nom);
  }

  displayDescription(description: string){
    return description.substring(0, 20);
  }

  addProduit(){
    const newProduit : Produit = {
      id: produits.length,
      nom: this.produitForm.value.nomC,
      fournisseur: this.produitForm.value.fournisseurC,
      emailFournisseur: null,
      ingredients: null,
      description: this.produitForm.value.descC,
      age: this.produitForm.value.ageC,
      condition: null,
      prix: null
    };
    this.stockService.addProduit(newProduit);
    this.produitForm.reset();
  }

  deleteProduit(nom: string){
    this.stockService.deleteProduit(nom);
  }


}
