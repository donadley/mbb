// db.ts
export interface Customer {
    id?: number;
    email: string;
    firstName: string;
    date: string;
  }

  let dbInstance: IDBDatabase | null = null;

  export function openDatabase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      // If the database instance already exists, return it
      if (dbInstance) {
        resolve(dbInstance);
        return;
      }

      // Open the database
      const request = indexedDB.open("CustomerDB", 1);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        db.createObjectStore("customers", { keyPath: "id", autoIncrement: true });
      };

      request.onsuccess = (event) => {
        dbInstance = (event.target as IDBOpenDBRequest).result;
        resolve(dbInstance);
      };

      request.onerror = (event) => {
        reject((event.target as IDBOpenDBRequest).error);
      };
    });
  }

  // Function to add a customer to the database
  export async function addCustomerData(customer: Customer): Promise<void> {
    const db = await openDatabase();
    const transaction = db.transaction("customers", "readwrite");
    const store = transaction.objectStore("customers");

    store.add(customer);

    transaction.oncomplete = () => {
      console.log("Customer data added:", customer);
      alert("Customer data saved for offline use!");
    };

    transaction.onerror = (event) => {
      console.error("Error saving customer data:", (event.target as IDBRequest).error);
    };
  }

  export async function getAllCustomers(): Promise<Customer[]> {
    const db = await openDatabase();
    const transaction = db.transaction("customers", "readonly");
    const store = transaction.objectStore("customers");
    const request = store.getAll();

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = (event) => {
        reject((event.target as IDBRequest).error);
      };
    });
  }
