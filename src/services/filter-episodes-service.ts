import { dataPodCast } from "../data/podcasts-data";
import { ResponsePodcastModel } from "../models/response-podcast-model";

export const serviceFilterEpisodes = async (queryString: string | undefined): Promise<ResponsePodcastModel> => {
	let responseFormat: ResponsePodcastModel = {
		statusCode: 0,
		body: [],
	};

	const podcastName = queryString?.split("?p=")[1] || "";
	const data = await dataPodCast(podcastName);

	responseFormat.statusCode = data.length !== 0 ? 200 : 204;

	responseFormat.body = data;

	return responseFormat;
};
