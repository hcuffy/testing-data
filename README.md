This module generates basic user and vehicle data. The data can be used for testing purposes.

##Installing

Using npm:

`$ npm install testing-data --save-dev`

Using yarn:

`$ yarn add testing-data -D`

## Example

```
import { getVehicles } from 'testing-data';

const vehicles = getVehicles()

/* getVehicles will return an array of vehicle. See example below.
  [
      {
        brand: 'Jaguar',
        model: 'F-TYPE',
        vin: 'SAJWA0HP2DM,522159',
        engine: 'autogas'
      }
    ]
*/

```
