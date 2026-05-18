import { getFullAddress } from '../people/helpers';
import { getChance } from '../utils';
import type { Company, GetCompanyOptions } from '../types';

const chance = getChance();

function generateCompanyName(): string {
    const buildingNumber = Math.floor(Math.random() * 10000);
    const companyName = chance.company();

    return `${companyName} ${buildingNumber}`;
}

export function getCompany(options: GetCompanyOptions = {}): Company {
    const companyName = generateCompanyName();
    const address = getFullAddress(options.country ?? '');

    return { name: companyName, ...address };
}
