import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "nickname";

export const CustomerTitle = (record: TCustomer): string => {
  return record.nickname || String(record.id);
};
