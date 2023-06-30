import clientPromise from "../../../lib/mongobd";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
	const { id } = req.query;
	if (req.method === 'GET') {
		try {
			const client = await clientPromise;
			const db = client.db("workin");

			const profiles = await db
				.collection("companies")
				.find({_id: new ObjectId(id)})
				.toArray();

				res.json(profiles[0]);
		} catch (e) {
			console.error(e);
		}
	}
}