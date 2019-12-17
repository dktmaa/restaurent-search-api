import mongoose from 'mongoose'
import { Menu,  Restaurent } from './interfaces'
import { ENGINE_METHOD_DIGESTS } from 'constants'
const { Schema, model } = mongoose

const menuSchema = new Schema<Menu>({
    _id: {type: Schema.Types.ObjectId},
    name: {type: Schema.Types.String, required: true},
    price: {type: Schema.Types.String},
    isAvailable: {type: Schema.Types.Boolean}
})

const restaurentSchema = new Schema<Restaurent>({
    
    name: {
        type: Schema.Types.String, 
        required: true
    },
    location: {
        type: {
            type: Schema.Types.String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Schema.Types.Number],
            required: true
        }
    },
    city: {
        type: Schema.Types.String,
        required: true
    },
    menues : [menuSchema],
    cousines: [{type: Schema.Types.String}],
    budget: {type: Schema.Types.String},
    ratings: {type: Schema.Types.String}
})
 restaurentSchema.index({'location': '2dsphere'})

export default model<Restaurent & mongoose.Document>('restaurents', restaurentSchema)




