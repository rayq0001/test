import { HiAnime, HiAnimeError } from '../../../../aniwatch-main/src';
import { NextResponse } from 'next/server';

export async function GET() {
  const scraper = new HiAnime.Scraper();
  const results: Record<string, any> = {};
  let hasError = false;
  let errorDetails = {};

  // بيانات تجريبية
  const animeId = 'steinsgate-3';
  const episodeId = 'steinsgate-3?ep=230';
  const genre = 'shounen';
  const producer = 'toei-animation';
  const searchQuery = 'monster';
  const category = 'subbed-anime';
  const date = '2025-06-09';
  const sortOption = '0-9';

  try {
    results.getInfo = await scraper.getInfo(animeId);
    results.getCategoryAnime = await scraper.getCategoryAnime(category);
    results.getEpisodes = await scraper.getEpisodes(animeId);
    results.getEpisodeSources = await scraper.getEpisodeSources(episodeId);
    results.getGenreAnime = await scraper.getGenreAnime(genre);
    results.getProducerAnimes = await scraper.getProducerAnimes(producer);
    results.search = await scraper.search(searchQuery);
    results.searchSuggestions = await scraper.searchSuggestions(searchQuery);
    results.getEpisodeServers = await scraper.getEpisodeServers(episodeId);
    results.getEstimatedSchedule = await scraper.getEstimatedSchedule(date);
    results.getNextEpisodeSchedule = await scraper.getNextEpisodeSchedule(animeId);
    results.getHomePage = await scraper.getHomePage();
    results.getAZList = await scraper.getAZList(sortOption);
    results.getQtipInfo = await scraper.getQtipInfo(animeId);
  } catch (error) {
    hasError = true;
    errorDetails = error instanceof HiAnimeError ? { message: error.message, status: error.status } : { message: String(error) };
  }

  return NextResponse.json({ success: !hasError, results, error: errorDetails });
}
