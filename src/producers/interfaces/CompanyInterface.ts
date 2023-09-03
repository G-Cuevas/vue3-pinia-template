export interface Company {
    id:                   number;
    code:                 string;
    name:                 string;
    password:             string;
    email:                string;
    rfc:                  string;
    address:              string;
    country:              string;
    state:                string;
    municipality:         string;
    zipCode:              string;
    phoneNumber:          string | null;
    managerName:          string | null;
    managerPhoneNumber:   string | null;
    assistantName:        string | null;
    assistantPhoneNumber: string | null;
    isActive:             boolean;
}