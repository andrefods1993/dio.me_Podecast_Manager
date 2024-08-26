import { dataPodCast } from "../data/podcasts-data";
import { ResponsePodcastModel } from "../models/response-podcast-model";

export const serviceListEpisodes = async (): Promise<ResponsePodcastModel> => {
	let responseFormat: ResponsePodcastModel = {
		statusCode: 0,
		body: [],
	};

	const data = await dataPodCast();

	responseFormat.statusCode = data.length !== 0 ? 200 : 204;

	responseFormat.body = data;

	return responseFormat;
};
