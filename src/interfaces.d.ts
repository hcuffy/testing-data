type Gender = 'male' | 'female';

interface VehicleBrands {
    brand: string;
    models: string[];
    vinBase: string;
}

interface PhoneNumbers {
    landline: string;
    mobileNumber: string;
    phoneCountry: string;
    phoneCountryCode: string;
}

interface Person extends PhoneNumbers {
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

interface Vehicle {
    brand: string;
    model: string;
    vin: string;
    engine: string;
    numberPlate: string;
}

interface Company {
    name: string;
    address: string;
    street: string;
    streetNumber: number;
    city: string;
    country: string;
    zip: string;
}

interface CreateEmailOptions {
    firstName?: string;
    lastName?: string;
    customText?: string;
    domain?: string;
}

interface GetMultipleEmailsOptions {
    quantity?: number;
    domain?: string;
}

interface GetPersonOptions {
    gender?: Gender | '';
    domain?: string;
    country?: string;
    customText?: string;
}

interface GetPeopleOptions {
    quantity?: number;
}

interface GetVehicleOptions {
    brand?: string;
}

interface GetVehiclesOptions {
    quantity?: number;
}

interface GetCompanyOptions {
    country?: string;
}
