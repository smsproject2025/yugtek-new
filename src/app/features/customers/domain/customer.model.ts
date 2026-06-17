export type CustomerStatus = 'active' | 'inactive';

export interface Customer {
  id: string;
  fullName: string;
  email: string;
  status: CustomerStatus;
}

export interface CustomerDto {
  id: string;
  full_name: string;
  email: string;
  status: CustomerStatus;
}
