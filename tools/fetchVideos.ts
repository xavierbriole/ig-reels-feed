type Params = {
  hostUrl: string;
};

export type Video = {
  url: string;
  name: string;
  description: string;
};

export default async function fetchVideos({
  hostUrl,
}: Params): Promise<Video[]> {
  try {
    const response = await fetch(`${hostUrl}/videos`);

    if (!response.ok) {
      throw new Error(`Erreur réseau: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des vidéos:", error);
    return [];
  }
}
