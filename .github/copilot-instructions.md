# Development Guidelines

Guidelines for developing the **testing-data** npm library - a TypeScript package for generating random vehicle and user data for testing purposes.

> For detailed code review guidelines, see [coderabbit.md](./coderabbit.md)

## Quick Reference

| Item | Convention      |
|------|-----------------|
| Indentation | 4 spaces        |
| Quotes | Single          |
| Semicolons | Always          |
| Package Manager | pnpm            |
| Build | `tsc` to `lib/` |

## Project Structure

```
src/
├── index.ts              # Main entry (re-exports all modules)
├── interfaces.d.ts       # Global type definitions
├── utils.ts              # Shared utilities (Chance.js factory)
├── people/               # Person data generation
├── vehicles/             # Vehicle data generation
└── company/              # Company data generation
```

## Development Scripts

```bash
pnpm build      # Compile TypeScript to lib/
pnpm test       # Run Jest tests
pnpm coverage   # Run tests with coverage
pnpm lint       # Run ESLint
pnpm fix        # ESLint with auto-fix
```

## Code Patterns

### Function Style

```typescript
// Use function declarations with explicit return types
export function getVehicle(vehicle): Vehicle {
    const vehicleObject = _.find(vehicleBrands, { brand: vehicle?.brand }) || getRandomBrand();
    // ...
    return { brand: vehicleObject.brand, model, vin, engine, numberPlate };
}
```

### Imports

```typescript
// External imports first
import _ from 'lodash';
import moment from 'moment';

// Local imports
import { vehicleBrands } from './seeds';
import { getChance } from '../utils';
```

### Chance.js Usage

```typescript
import { getChance } from '../utils';

const chance = getChance();
const email = chance.email({ domain: 'test.com' });
const name = chance.name({ gender: 'male' });
```

### Batch Functions

Always use `safeguardNumber()` and ensure uniqueness:

```typescript
export function getVehicles(vehicle = { quantity: 1 }): Vehicle[] {
    const { quantity } = vehicle;
    const vehicles: Vehicle[] = [];
    const revisedQuantity = safeguardNumber(quantity);

    for (let i = 0; i < revisedQuantity; i++) {
        const vehicle = getVehicle({});
        const vehicleExists = _.some(vehicles, { vin: vehicle.vin });

        if (!vehicleExists) {
            vehicles.push(vehicle);
        }
    }

    return vehicles;
}
```

### Re-exports

```typescript
// Module index.ts files re-export public API
export * from './person';
export * from './helpers';
```

## API Reference

### People

| Function | Returns |
|----------|---------|
| `getFirstName(gender?)` | `string` |
| `getLastName()` | `string` |
| `getFullName(gender?)` | `string` |
| `createEmail(options?)` | `string` |
| `createRandomEmail()` | `string` |
| `getMultipleEmails(options)` | `string[]` |
| `getPerson(options?)` | `Person` |
| `getPeople(options)` | `Person[]` |
| `getPhoneNumbers()` | `PhoneNumbers` |

### Vehicles

| Function | Returns |
|----------|---------|
| `getRandomVin()` | `string` |
| `getVehicle(options?)` | `Vehicle` |
| `getVehicles(options)` | `Vehicle[]` |

### Company

| Function | Returns |
|----------|---------|
| `getCompany(country?)` | Company object with address |

## Dependencies

| Package | Purpose |
|---------|---------|
| `chance` | Random data generation |
| `lodash` | Array/object utilities |
| `moment` | Date manipulation |

## Troubleshooting

**Build errors**: Run `pnpm install`, check TypeScript output

**Test failures**: Run single file with `pnpm test path/to/file.test.ts`

**Lint errors**: Try `pnpm fix` first for auto-fixable issues
