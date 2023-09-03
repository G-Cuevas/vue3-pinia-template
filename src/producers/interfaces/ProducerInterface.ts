import type { Company } from '@/producers/interfaces/CompanyInterface';

export enum IsForeign {
    Maquila = "Maquila",
    Propia = "Propia",
}

export interface Producer {
    id:                 number;
    code:               string;
    name:               string;
    rfc:                string | null;
    address:            string | null;
    municipality:       string | null;
    state:              string | null;
    country:            string | null;
    zipCode:            string | null;
    phoneNumber:        string | null;
    managerName:        string | null;
    managerPhoneNumber: string | null;
    isForeign:          IsForeign;
    isActive:           boolean;
    company:            Company;
}