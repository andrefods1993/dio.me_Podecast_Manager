import * as http from "http";
import { Routes } from "./routes/routes";

import { getListEpisodes, getFilterEpisodes } from "./controllers/podcasts-controller";
import { HttpMethod } from "./utils/http-methods";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
	const baseUrl = req.url?.split("?")[0];

	if (req.method === HttpMethod.GET && baseUrl === Routes.List) {
		await getListEpisodes(req, res);
	}

	if (req.method === HttpMethod.GET && baseUrl === Routes.Episodes) {
		await getFilterEpisodes(req, res);
	}
};
