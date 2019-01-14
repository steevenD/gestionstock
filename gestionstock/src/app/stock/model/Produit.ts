export class Produit {
  constructor (
    public id: number,
    public nom: string,
    public fournisseur: string,
    public emailFournisseur: string,
    public ingredients: string[],
    public description: string,
    public age: number,
    public condition: string,
    public prix: number){

  }
}

const p1: Produit = new Produit(0,'stylo', 'Jean', 'jean@orange.fr', ['encre', 'plastique'], 'Soleo saepe ante oculos ponere, idque libenter crete', 2,'condition 99', 1);
const p2: Produit = new Produit(1,'papier', 'Roux', 'roux@gmail.com', ['arbre', 'encre'], 'Soleo saepe ante oculos ponere, idque libenter omnis ', 8,'condition 89',385);
const p3: Produit = new Produit(2,'souris', 'Oliver', 'olivier@orange.fr', ['fil', 'plastique'], 'Soleo saepe ante oculos ponere, idque li', 6,'condition 3',555);
const p4: Produit = new Produit(3,'clavier', 'Deport', 'deport@gmail.com', ['acier', 'plastique', 'lettres'], 'Soleo saepe ante oculos ', 25,'condition 4',6823);
const p5: Produit = new Produit(4,'téléphone', 'Albert', 'albert@orange.fr', ['pen', 'boutton', 'ecran'], 'Soleo saepe ante oculos omnis nostrorum im', 12, 'condition 5',59908);

export const produits = [
  p1, p2, p3, p4, p5
];
