import { Request, Response } from "express";
import {  getFilteredRestaurents, getRestaurentByDistnace } from "./SearchController";

export default [

  {
    path: "/api/v1/restaurent/search",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const searchQuery = req.query
        const result = await getFilteredRestaurents(searchQuery)
        res.status(200).send(result);
      }
    ]
  },

  {
    path: "/api/v1/restaurent/search/distance",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
      const {longitude, lattitude, distance} = req.query
      console.log(req.query)
      const result = await getRestaurentByDistnace(longitude, lattitude, distance)
      res.status(200).send(result);
      }
    ]
  }

];
