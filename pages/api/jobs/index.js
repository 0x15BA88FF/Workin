import clientPromise from "../../../lib/mongobd";

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const client = await clientPromise;
			const db = client.db("workin");
		
			let id = req.query.id || none
			let query = json(req.query.query) || {}
			let sort = json(req.query.sort) || { metacritic: -1 }
			let skip = parseInt(req.query.skip) || 0
			let limit = parseInt(req.query.limit) || 20

			const jobs = await db
				.collection("jobs")
				.find(query)
				.sort(sort)
				.limit(limit)
				.skip(skip)
				.toArray();
		
				res.json(jobs);
		} catch (e) {
			console.error(e);
		}
	} else if (req.method === 'POST') {
		try {
			const client = await clientPromise;
			const db = client.db("posts");
			const { author_id, title, description, type, site, salary, date, location } = req.body;
		
			const job = await db.collection("posts").insertOne({
					author_id,
					title,
					description,
					type,
					site,
					salary,
					location,
					date
			});
		
			res.json(job);
		} catch (e) {
			console.error(e);
			throw new Error(e).message;
		}
	}
}