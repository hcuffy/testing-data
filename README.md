This module generates basic user and vehicle data. The data can be used for testing purposes.

##Installing

Using npm:

`$ npm install testing-data --save-dev`

Using yarn:

`$ yarn add testing-data -D`

## Example

```
import { getVehicles, getPeople } from 'testing-data';

const vehicles = getVehicles({})

/* getVehicles will return an array of vehicle objects. See example below.
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

/* getPeople will return an array of person object. See example below.
  [
      {
        firstName: 'Vinnie',
        lastName: 'Thomas',
        fullName: 'Vinnie Thomas',
        email: 'VinnieThomas@test.com''
      }
    ]
*/

```
## Available Functions

### People:
`getFirstName({gender: 'male'})`: arguments::`gender` 'male'|'female'|NONE  

`getLastName({})` : arguments:: NONE   

`getFullName({gender: 'male'})` : arguments::`gender` 'male'|'female'|NONE   

`createEmail({firstName: 'male', lastName: 'test.com', domain: 'test.com' })` : arguments:: `firstName` optional, `lastName` optional, `domain` optional  

`createRandomEmail({})` : arguments:: NONE

`getMultipleEmails({quantity: 1, domain: 'test.com'})` : arguments:: `quantity` Number `domain` optional

`getPerson({gender: 'male', domain: 'test.com'})` : arguments:: `gender` 'male'|'female'|NONE, `domain` optional    

`getPeople({quantity: 1})` : arguments:: `quantity` Number 

### Vehicles:

`getRandomVin({})` : arguments:: NONE   

`getVehicle({brand: 'Honda'})` : arguments:: `brand` optional

`getVehicles({quantity: 1})` : arguments:: `quantity` Number 
