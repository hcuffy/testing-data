export type Gender = 'male' | 'female';

export interface PhoneNumbers {
    landline: string;
    mobileNumber: string;
    phoneCountry: string;
    phoneCountryCode: string;
}

export interface Person extends PhoneNumbers {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    gender: Gender;
    birthdate: string;
    age: number;
    address: string;
    city: string;
    street: string;
    streetNumber: number;
    country: string;
    zip: string;
}

export interface Vehicle {
    brand: string;
    model: string;
    vin: string;
    engine: string;
    numberPlate: string;
}

export interface Company {
    name: string;
    address: string;
    street: string;
    streetNumber: number;
    city: string;
    country: string;
    zip: string;
}

export interface VehicleBrand {
    brand: string;
    models: string[];
    vinBase: string;
}

export interface CreateEmailOptions {
    firstName?: string;
    lastName?: string;
    customText?: string;
    domain?: string;
}

export interface GetMultipleEmailsOptions {
    quantity?: number;
    domain?: string;
}

export interface GetPersonOptions {
    gender?: Gender | '';
    domain?: string;
    country?: string;
    customText?: string;
}

export interface GetPeopleOptions {
    quantity?: number;
}

export interface GetVehicleOptions {
    brand?: string;
}

export interface GetVehiclesOptions {
    quantity?: number;
}

export interface GetCompanyOptions {
    country?: string;
}
