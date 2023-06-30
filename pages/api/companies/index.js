import clientPromise from "../../../lib/mongobd";

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const client = await clientPromise;
			const db = client.db("workin");
		
			let query = req.query.query || {}
			let sort = req.query.sort || { metacritic: -1 }
			let skip = parseInt(req.query.skip) || 0
			let limit = req.query.limit || 20

			const profiles = await db
				.collection("companies")
				.find(query)
				.sort(sort)
				.limit(limit)
				.skip(skip)
				.toArray();
		
				res.json(profiles);
		} catch (e) {
			console.error(e);
		}
	}
}