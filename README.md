This module generates basic user and vehicle data. The data can be used for testing purposes.

##Installing

Using npm:

`$ npm install testing-data --save-dev`

Using yarn:

`$ yarn add testing-data -D`

## Example

```
import { getVehicles, getPeople } from 'testing-data';

const vehicles = getVehicles()

/* getVehicles will return an array of vehicle objects. See example below.
  [
      {
        brand: 'Jaguar',
        model: 'F-TYPE',
        vin: 'SAJWA0HP2DM522159',
        engine: 'autogas'
      }
    ]
*/

const people = getPeople()

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
`getFirstName`       : arguments::`gender` 'male'|'female'|NONE  

`getLastName`        : arguments:: NONE   

`getFullName`        : arguments::`gender` 'male'|'female'|NONE   

`createEmail`        : arguments:: `firstName` optional, `lastName` optional, `domain` optional  

`createRandomEmail`  : arguments:: NONE

`getMultipleEmails`  : arguments:: `quantity` Number `domain` optional

`getPerson`          : arguments:: `gender` optional, `domain` optional    

`getPeople`          : arguments:: `quantity` Number 

### Vehicles:

`getRandomVin` : arguments:: NONE   

`getVehicle`   : arguments:: `brand` optional

`getVehicles`  : arguments:: `quantity` Number 
