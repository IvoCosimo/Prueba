
// Definimos los tipos permitidos para evitar errores de tipeo en el código
export type TipoDocumento = 'DNI' | 'Pasaporte' ;
export type TipoUsuario = 'Admin' | 'Socio' ;

export class Client {
    constructor(
        public name: string,
        public surname: string,
        public email: string,
        public doc: string,
        public type_doc: TipoDocumento,
        public password: string, 
        public birth_date: Date,
        public type_user: TipoUsuario,
        public id?: number,
    ) {
        // Al usar modificadores de acceso (public, private, protected) 
        // en los parámetros del constructor, TypeScript hace la asignación 
        // automáticamente por debajo. 
        // Ya no necesitás escribir "this.id = id;", el código queda más limpio.
    }
}
