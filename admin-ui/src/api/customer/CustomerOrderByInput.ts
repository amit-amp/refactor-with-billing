import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  nickname?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
  addressId?: SortOrder;
};
