import { Injectable } from '@angular/core';
import {Produit, produits} from '../model/Produit';

@Injectable()
export class StockService {

  constructor() { }

  getAllProduits(): Produit[]{
    return produits;
  }

  getProduit(nom: string): Produit{
    for (let p of produits){
      if (p.nom === nom){
        return p;
      }
    }
  }

  addProduit(produit : Produit){
    produits.push(produit);
  }

  deleteProduit(nom: string){
    for (let i=0; i < produits.length; i++){
      if(nom === produits[i].nom){
        produits.splice(i, 1);

      }
    }
  }

}
