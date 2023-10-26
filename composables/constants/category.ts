export const category: Category[] = [
    {
        id: 1,
        name: "CPU",
    },
    {
        id: 2,
        name: "GPU",
    },
    {
        id: 3,
        name: "RAM",
    },
    {
        id: 4,
        name: "Motherboard",
    },
]

export interface Category {
    id?: number,
    name?: string,
}