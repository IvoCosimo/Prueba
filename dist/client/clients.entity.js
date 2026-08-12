export class Client {
    constructor(name, surname, email, doc, type_doc, password, birth_date, type_user, id) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.doc = doc;
        this.type_doc = type_doc;
        this.password = password;
        this.birth_date = birth_date;
        this.type_user = type_user;
        this.id = id;
        // Al usar modificadores de acceso (public, private, protected) 
        // en los parámetros del constructor, TypeScript hace la asignación 
        // automáticamente por debajo. 
        // Ya no necesitás escribir "this.id = id;", el código queda más limpio.
    }
}
//# sourceMappingURL=clients.entity.js.map