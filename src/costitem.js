//Rom Basson 313416489
// Shiraz Messer 318971637

// Set default values in case of empty fields
class CostItem {
    constructor(Category, Quantity, Description, Sum, Date)
    {
        this.Category = setDefaultCategory(Category);
        this.Quantity = Quantity || 1;
        this.Description = Description || "No description";
        this.Sum = Sum;
        this.Date = Date || setDefaultDate();
    }

    // Onchange event in the form
    copyConstructor(obj) {
        Object.assign(this, obj);
    }

}

// Function to set default date (today's date) when no date is provided
const setDefaultDate = () => {
    return new Date().toISOString().slice(0, 10);
}

// Function to set default category (other)
const setDefaultCategory = (word) => {
    if (word === undefined)
        return "OTHER";
}

export { CostItem, setDefaultCategory };

