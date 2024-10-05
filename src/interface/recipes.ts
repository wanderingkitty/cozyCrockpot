import { ObjectId } from "mongodb";

export interface Recipe {
	_id: ObjectId, 
	id: number,
	title: string,
	ingrediens: string[],
	cookingInstructions: string,
	year: number
}