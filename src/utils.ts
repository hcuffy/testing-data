import Chance from 'chance';

export function getChance(): Chance.Chance {
    return new Chance();
}

export function safeguardNumber(quantity: number = 3): number {
    const numberAsInteger = Math.floor(Math.abs(quantity));

    return Math.min(numberAsInteger, 50);
}

export function fillUniqueItems<T>(
    targetCount: number,
    createItem: () => T,
    isDuplicate: DuplicateChecker<T>
): T[] {
    const items: T[] = [];
    let attempts = 0;
    const maxAttempts = targetCount * 20;

    while (items.length < targetCount && attempts < maxAttempts) {
        attempts += 1;
        const item = createItem();

        if (!isDuplicate(item, items)) {
            items.push(item);
        }
    }

    return items;
}
