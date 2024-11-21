export interface Customer {
    id?: number;
    email: string;
    firstName: string;
    date: string;
}
export declare function openDatabase(): Promise<IDBDatabase>;
export declare function addCustomerData(customer: Customer): Promise<void>;
export declare function getAllCustomers(): Promise<Customer[]>;
