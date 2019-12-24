 import Restaurents from '../search/models'
import { Restaurent, searchQuery, filterQuery } from './interfaces'
import { HTTP404Error, HTTP400Error } from '../../utils/httpErrors'



// Returns list of restaurent on various filter criteria
 export const getFilteredRestaurents = async (searchQuery: searchQuery) => {

  let filterQuery: filterQuery = {}
   if(searchQuery.menueName){
    filterQuery.menues = {$elemMatch :{"name": searchQuery.menueName, "isAvailable": true}}
   }

   if(searchQuery.cousineName){
     filterQuery.cousines =  searchQuery.cousineName 
   }

   if(searchQuery.restaurentName){
     filterQuery.name =  searchQuery.restaurentName
   }

   if(searchQuery.cityName){
    filterQuery.city = searchQuery.cityName
  }

  if(searchQuery.budget){
    filterQuery.budget = searchQuery.budget
  }

  if(searchQuery.rating){
    filterQuery.rating = {$gte: Number(searchQuery.rating)}
  }

  if(searchQuery.restaurentId){
    filterQuery._id = searchQuery.restaurentId
  }

  const result = await Restaurents.find(filterQuery)
  if(!result || result.length === 0 )
    throw new HTTP404Error('No restaurent found')

  return result as Restaurent[]
  }

// Returns list of restuarents located within max distance provided
 export const getRestaurentByDistnace = async (longitude: string, latitude: string, distance: string) => {

  const result = await Restaurents.find({
    location: {
      $near: {
        $maxDistance: (distance),
        $geometry: {
          type: 'Point',
          coordinates: [ parseFloat(longitude), parseFloat(latitude) ]
        }
      }
    }
  }).find()
   return result as Restaurent[]
 }

 






