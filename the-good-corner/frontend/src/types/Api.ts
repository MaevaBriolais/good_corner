export type Ad = {
    id:number,
    title: string,
    description?: string,
    owner: string,
    price: number,
    picture: string,
    location: string,
    createdAt: Date,
    category: Category,
    tags:Tag[]
}

export type Category = {
    id:number,
    name: string
}

export type Tag = {
    id:number,
    name: string
}

