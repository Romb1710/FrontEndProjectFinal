/* Rom Basson 313416489 */
/* Shiraz Messer 318971637 */
export class idb {
    constructor(dbConnection) {
        this.db = dbConnection;
    }
    // Opens a connection to the IndexedDB database or creates it if it doesn't exist.
    // Returns a promise that resolves with an instance of 'idb' when the database is ready.
    static async openCostsDB(CostsManagerDB, version) {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(CostsManagerDB, version);

            // Handles the successful opening of the database.
            request.onsuccess = (event) => {
                const db = event.target.result;
                //console.log("Database opened successfully:", db);
                resolve(new idb(db));
            };

            request.onerror = (event) => {
                console.error("Error opening database:", event.target.error);
                reject(event.target.error);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                //console.log("test");
                // Create the "costs" object store if it doesn't exist
                if (!db.objectStoreNames.contains("costs")) {
                    db.createObjectStore("costs", { keyPath: "id", autoIncrement: true });
                }

            };
        });
    }

    // Adds a new cost item to the "costs" object store.
    async addCost(item) {
        const transaction = this.db.transaction("costs", "readwrite");
        const store = transaction.objectStore("costs");
        store.add(item);
    }

    // Retrieves all cost items from the "costs" object store.
    async getCost() {

        const transaction = this.db.transaction("costs", "readonly");
        const store = await transaction.objectStore("costs");
        const result = await store.getAll();
        return new Promise((resolve, reject) => {
            result.onsuccess = (event) => {
                const res2 = event.target.result;
                resolve(res2);
            };
            result.onerror = (event) => {
                console.error("Error opening database:", event.target.error);
                reject(event.target.error);
            };
        })
    }

}