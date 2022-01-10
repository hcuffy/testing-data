This module generates basic user and vehicle data. The data can be used for testing purposes.

## Installing

Using npm:

`$ npm install testing-data --save-dev`

Using yarn:

`$ yarn add testing-data -D`

## Example

```
import { getVehicles, getPeople } from 'testing-data';

const vehicles = getVehicles({})

/// getVehicles will return an array of vehicle objects. See example below.
  [
      {
        brand: 'Jaguar',
        model: 'F-TYPE',
        vin: 'SAJWA0HP2DM522159',
        engine: 'autogas',
        numberPlate: 'XE5607'
      }
    ]
*/

const people = getPeople({})

/// getPeople will return an array of person object. See example below.
  [
      {
        firstName: 'Vinnie',
        lastName: 'Thomas',
        fullName: 'Vinnie Thomas',
        email: 'VinnieThomas@test.com',
        gender: male
        birthdate: '1981/09/28'
        age: 40,
        street: '1299 Todil Point',
        country: 'Croatia',
        zip: '12005'
      }
    ]
    
const company = getCompany()

/// getCompany will return a company object. See example below.
    {
      name: 'Equitable Resources Inc. 5862',
      address: { 
                 street: '992 Icana Center', 
                 country: 'Canada', 
                 zip: '71782' 
               }
    }
    
```
## Available Functions

### People:
`getFirstName({gender: 'male'})`: arguments::`gender` 'male'|'female'|optional  

`getLastName({})` : arguments:: optional   

`getFullName({gender: 'male'})` : arguments::`gender` 'male'|'female'|optional   

`createEmail({firstName: 'female', lastName: 'test.com', domain: 'test.com' })` : arguments:: `firstName` optional, `lastName` optional, `domain` optional  

`createRandomEmail({})` : arguments:: optional

`getMultipleEmails({quantity: 1, domain: 'test.com'})` : arguments:: `quantity` Number `domain` optional

`getPerson({gender: 'male', domain: 'test.com', country: 'Germany'})` : arguments:: `gender` 'male'|'female'|optional , `domain` optional, `country` optional

`getPeople({quantity: 1})` : arguments:: `quantity` Number 

### Vehicles:

`getRandomVin({})` : arguments:: optional   

`getVehicle({brand: 'Honda'})` : arguments:: `brand` optional

`getVehicles({quantity: 1})` : arguments:: `quantity` Number 
