export interface heroe {
    id?: number;
    nombre: string;
    superpoderes?: string;
}

export const HEROES: heroe[] = [
    {
        id: 1,
        nombre: 'Superman',
        superpoderes: 'Superfuerza, supervisión y supervelocidad'
    },
    {
        id: 2,
        nombre: 'Spiderman',
        superpoderes: 'Sentido arácnido'
    },
    {
        id: 3,
        nombre: 'Scarlet Witch',
        superpoderes: 'Poderes mentales y mágicos'
    },
    {
        id: 4,
        nombre: 'SuperLópez'
    },
    {
        id: 5,
        nombre: 'Batman',
        superpoderes: 'Traje con accesorios y dinero'
    },
    {
        id: 6,
        nombre: 'Black Widow'
    }
];