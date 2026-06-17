import { Customer, CustomerDto } from './customer.model';

export const customerMapper = {
  fromDto(dto: CustomerDto): Customer {
    return {
      id: dto.id,
      fullName: dto.full_name,
      email: dto.email,
      status: dto.status
    };
  },

  toDto(customer: Customer): CustomerDto {
    return {
      id: customer.id,
      full_name: customer.fullName,
      email: customer.email,
      status: customer.status
    };
  }
};
