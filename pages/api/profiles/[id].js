import clientPromise from "../../../lib/mongobd";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
	const { id } = req.query
	if (req.method === 'GET') {
		try {
			const client = await clientPromise;
			const db = client.db("workin");

			const profiles = await db
				.collection("profiles")
				.find({_id: new ObjectId(id)})
				.toArray()[0];

				res.json(profiles);
		} catch (e) {
			console.error(e);
		}
	}
}