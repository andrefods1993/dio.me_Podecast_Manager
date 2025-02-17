import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "..", "data", "podcasts.json");

export const dataPodCast = async (podcastName?: string): Promise<PodcastModel[]> => {
	const rowData = fs.readFileSync(pathData, "utf-8");
	let jsonFile = JSON.parse(rowData);

	if (podcastName) {
		jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
	}

	return jsonFile;
};
