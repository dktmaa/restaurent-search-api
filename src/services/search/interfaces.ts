import { Types } from 'mongoose'
export interface Restaurent {
    _id: string | Types.ObjectId
    location: {
        type: string,
        coordinates: [number]
    },
    city: string,
    restaurentName: string,
    restaurentPhone: string,
    menues: [Menu],
    cousines: [string],

}


export interface Menu {
    name: string,
    price: string,
    isAvailable: boolean
}

export interface searchQuery {
    restaurentName?:  string,
    menueName?: string,
    cousineName?: string,
    leastRating?: string,
    cityName?: string,
    budget?: string,
    rating?: string,
    restaurentId?: string | Types.ObjectId,
}

export interface filterQuery {
    menues?: Object,
    cousines?: Object,
    city?: string,
    name?: string,
    budget?: string,
    rating?: Object,
    _id?: string | Types.ObjectId
}