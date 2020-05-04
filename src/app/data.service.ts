import { Injectable } from '@angular/core';

import { Language, Translation } from './app.types';


/* const nameTranslations: Translation[] = [
  { english: 'Eugene', spanish: 'Eugenio', german: 'Eugen', russian: 'Евгений' },
  { english: 'Mary', spanish: 'Maria', german: 'Maria', russian: 'Мария' },
  { english: 'Matthew', spanish: 'Mateo', german: 'Matthäus', russian: 'Матфей' },
  { english: 'Barbara', spanish: 'Bárbara', german: 'Barbara', russian: 'Барбара' },
  { english: 'John', spanish: 'Juan', german: 'Johann', russian: 'Иван' },
  { english: 'Martha', spanish: 'Marta', german: 'Marta', russian: 'Марта' },
];
 */

/*const nameTranslations: Translation[] = [
  { english: 'A257', ProductName: 'SamsungS10', category: 'Mobile', childsku: 'HHAABC' },
  { english: 'A2577', ProductName: 'LGG10', category: 'Mobile', childsku: 'HHABBC' },
  { english: 'A25777', ProductName: 'ShiomiM10', category: 'Mobile', childsku: 'HHAACC' },
  { english: 'A25757', ProductName: 'LGG6Pro', category: 'Mobile', childsku: 'HHBBAC' },
  { english: 'A25711', ProductName: 'HwaeiMate10', category: 'Mobile', childsku: 'HHEABC' },
  { english: 'A2512', ProductName: 'SamsungNote10', category: 'Mobile', childsku: 'HHAABCE' },
];*/

/* const nameTranslations: Translation[] = [
  { english: '1', productname: 'Samsung S10', category: 'Mobile', childsku: 'HHAABC',price :1100 },
  { english: '2', productname: 'LG G10', category: 'Mobile', childsku: 'HHABBC' ,price :2200},
  { english: '', productname: 'Shiomi M10', category: 'Mobile', childsku: 'HHAACC' ,price :2100},
  { english: '', productname: 'LGG6 Pro', category: 'Mobile', childsku: 'HHBBAC',price :1200 },
  { english: '', productname: 'Hwaei Mate10', category: 'Mobile', childsku: 'HHEABC' ,price :1400},
  { english: '', productname: 'Samsung Note10', category: 'Mobile', childsku: 'HHAABCE' ,price :4100},
];
 */

/* const nameTranslations: Translation[] = [
  { english: '1', basicinfo : '' ,productname: 'Samsung S10',productid: 7631,sku : 'HEH-9131', category: 'Mobile & Tablets', childsku: 'HHAABC',price :1100 
  , salesandmedia : '' ,mainimage: 'TEST IMG1',additionalimage: 'TEST IMG2'
  , mandatoryattributes : '',model: 'S10'},
  { english: '2', basicinfo : '', productname: 'LG G10',productid: 7632,sku : 'HEH-9132', category: 'Mobile & Tablets', childsku: 'HHABBC' ,price :2200
  , salesandmedia : '' ,mainimage: 'TEST IMG1',additionalimage: 'TEST IMG2'
  , mandatoryattributes : '',model: 'G10'},
];
 */
const nameTranslations: Translation[] = [
  { english: '1', basicinfo : '' ,productname: 'Samsung S10',productid: 7631,sku : 'HEH-9131', category: 'Mobile & Tablets', childsku: 'HHAABC',price :1100 
  , salesandmedia : '' ,mainimage: 'TEST IMG1',additionalimage: 'TEST IMG2'
  , mandatoryattributes : '',model: 'S10',os:'Android'
  ,optionalinformation : '',screensize : '10 inch',condition:'GOOD'},
  { english: '2', basicinfo : '', productname: 'LG G10',productid: 7632,sku : 'HEH-9132', category: 'Mobile & Tablets', childsku: 'HHABBC' ,price :2200
  , salesandmedia : '' ,mainimage: 'TEST IMG1',additionalimage: 'TEST IMG2'
  , mandatoryattributes : '',model: 'G10',os:'Android'
  ,optionalinformation : '',screensize : '10 inch',condition:'GOOD'},
];

const languages: Language[] = [
  {
    name: 'English',
    greeting: '1'
  },
  {
    name: 'BasicInformation',
    greeting: '1'
  }, 
  {
    name: 'ProductID',
    greeting: 7631
  },
   {
    name: 'Sku',
    greeting: 'HEH-9131'
  },
  {
    name: 'ProductName',
    greeting: 'SamsungS10'
  },
  {
    name: 'Category',
    greeting: 'Mobile'
  },
  {
    name: 'ChildSku',
    greeting: 'HHAABC'
  },
  {
    name: 'Price',
    greeting: 1100
  },
  {
    name: 'Sales&Media',
    greeting: '1'
  },
  {
    name: 'MainImage',
    greeting: '1'
  },
  {
    name: 'AdditionalImage',
    greeting: '1'
  },
  {
    name: 'MandatoryAttributes',
    greeting: '1'
  },
  {
    name: 'Model',
    greeting: '1'
  },
  {
    name: 'OS',
    greeting: '1'
  },
  ,
  {
    name: 'OptionalInformation',
    greeting: '1'
  },
  ,
  {
    name: 'ScreenSize',
    greeting: '1'
  },
  ,
  {
    name: 'Condition',
    greeting: '1'
  },

];


/* const languages: Language[] = [
  {
    name: 'English',
    greeting: '1'
  },
  {
    name: 'BasicInformation',
    greeting: '1'
  }, 
  {
    name: 'ProductID',
    greeting: 7631
  },
   {
    name: 'Sku',
    greeting: 'HEH-9131'
  },
  {
    name: 'ProductName',
    greeting: 'SamsungS10'
  },
  {
    name: 'Category',
    greeting: 'Mobile'
  },
  {
    name: 'ChildSku',
    greeting: 'HHAABC'
  },
  {
    name: 'Price',
    greeting: 1100
  },
  {
    name: 'Sales&Media',
    greeting: '1'
  },
  {
    name: 'MainImage',
    greeting: '1'
  },
  {
    name: 'AdditionalImage',
    greeting: '1'
  },
  {
    name: 'MandatoryAttributes',
    greeting: '1'
  },
  {
    name: 'Model',
    greeting: '1'
  },
];

 */

/*
const languages: Language[] = [
  {
    name: 'English',
    greeting: 'Hello'
  },
  {
    name: 'Spanish',
    greeting: 'Hola'
  },
  {
    name: 'German',
    greeting: 'Guten Tag'
  },
  {
    name: 'Russian',
    greeting: 'Привет'
  },
];
*/



@Injectable({
  providedIn: 'root'
})
export class DataService {

///nameTranslations: Translation
  getNameTranslations() {
    return [...nameTranslations];
  }
  getLanguages() {
    return [...languages];
  }

}
