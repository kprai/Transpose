/* export interface Translation {
  english: string;
  productid : number;
  sku : string;
  productname: string;
  category: string;
  childsku: string;
  price:number;
}
 */

export interface Translation {
  english: string;
  basicinfo: string;
  productid : number;
  sku : string;
  productname: string;
  category: string;
  childsku: string;
  price:number;
  salesandmedia: string;
  mainimage: string;
  additionalimage: string;
  mandatoryattributes : string;
  model:string;
  os:string;
  optionalinformation :string;
  screensize:string;
  condition:string;

}

 
 
 
 /* export interface Translation {
   english: string;
   ProductName: string;
   category: string;
   childsku: string;
 }
*/

export interface Language {
  name: string;
  greeting: any;
}


export interface TransposedRow {
  language: string;
  [index: string]: string;
}
