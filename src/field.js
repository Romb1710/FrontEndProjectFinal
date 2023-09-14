/* Rom Basson 313416489 */
/* Shiraz Messer 318971637 */

//represents a field in a form
class Field {

    constructor(label, type, name, options=[] ,required = false) {
        this.label = label;
        this.type = type;
        this.name = name;
        this.required = required;
        this.options = options;
    }

}

export default Field;
