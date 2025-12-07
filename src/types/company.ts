type CompanyName = {
  en: string;
  kr: string;
  in: string;
}

type CompanyCEO = {
  kr: string;
  en: string;
}

type CompanyCIN = {
  kr: string;
  in: string;
}

type CompanyAddress = {
  kr: string;
  in: string;
}

export interface Company {
  name: CompanyName;
  ceo: CompanyCEO;
  jargon: string;
  phone: string;
  email: string;
  CIN: CompanyCIN;
  address: CompanyAddress;
}

