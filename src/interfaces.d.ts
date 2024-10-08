interface VehicleBrands {
    brand: string,
    models: string[],
    vinBase: string
}

interface Person {
    firstName: string
    lastName: string
    fullName: string
    email: string
    gender: string
    birthdate: string
    age: number
    street?: string
    streetNumber?: number
    country?: string
    zip?: string
}

interface Vehicle {
    brand: string,
    model: string,
    vin: string,
    engine: string,
    numberPlate: string
}
