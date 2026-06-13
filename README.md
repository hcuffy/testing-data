This module generates basic user and vehicle data. The data can be used for testing purposes.

## Installing

Using npm:

`$ npm install testing-data --save-dev`

Using pnpm:

`$ pnpm add testing-data -D`

## Example

```javascript
import { getVehicles, getPeople, getCompany } from 'testing-data';

const vehicles = getVehicles();

// getVehicles will return an array of vehicle objects. See example below.
// [
//   {
//     brand: 'Jaguar',
//     model: 'F-TYPE',
//     vin: 'SAJWA0HP2DM522159',
//     engine: 'autogas',
//     numberPlate: 'XE5607'
//   }
// ]

const people = getPeople();

// getPeople will return an array of person objects. See example below.
// [
//   {
//     firstName: 'Vinnie',
//     lastName: 'Thomas',
//     fullName: 'Vinnie Thomas',
//     email: 'VinnieThomas@test.com',
//     gender: 'male',
//     birthdate: '1981-09-28',
//     age: 40,
//     address: '1961 Bivve Circle',
//     street: 'Kezu Boulevard',
//     streetNumber: 23,
//     country: 'Italy',
//     city: 'Milan',
//     zip: '42376',
//     landline: '01897359870',
//     mobileNumber: '07446417720',
//     phoneCountry: 'uk',
//     phoneCountryCode: '44'
//   }
// ]

const company = getCompany();

// getCompany will return a company object. See example below.
// {
//   name: 'Equitable Resources Inc. 5862',
//   address: '1636 Berwe Avenue',
//   streetNumber: 76,
//   street: 'Kepi Mill',
//   city: 'Munich',
//   country: 'Germany',
//   zip: '67957'
// }
```

## Available Functions

### People:

`getFirstName(gender?)`: arguments:: `gender` 'male'|'female'|optional

`getLastName()` : arguments:: optional

`getFullName(gender?)` : arguments:: `gender` 'male'|'female'|optional

`createEmail({firstName?, lastName?, domain?})` : arguments:: `firstName` optional, `lastName` optional, `domain` optional

`createRandomEmail()` : arguments:: optional

`getMultipleEmails({quantity?, domain?})` : arguments:: `quantity` Number, `domain` optional

`getPerson({gender?, domain?, country?})` : arguments:: `gender` 'male'|'female'|optional, `domain` optional, `country` optional

`getPeople({quantity?})` : arguments:: `quantity` Number

`getPhoneNumbers()` : arguments:: none

### Vehicles:

`getRandomVin()` : arguments:: optional

`getVehicle({brand?})` : arguments:: `brand` optional

`getVehicles({quantity?})` : arguments:: `quantity` Number

### Company:

`getCompany({country?})` : arguments:: `country` optional
