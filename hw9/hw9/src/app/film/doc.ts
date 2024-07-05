import { Genre } from "./genre";
import { Country } from "./country";
import { ReleaseYear } from "./release-year";
import { ExternalId } from "./external-id";
import { Name } from "./name";
import { Logo } from "./logo";
import { Poster } from "./poster";
import { Backdrop } from "./backdrop";
import { Rating } from "./rating";
import { Votes } from "./votes";

export interface Doc {
    internalNames: string[]
    name: string
    alternativeName: string
    enName: string
    year: number
    genres: Genre[]
    countries: Country[]
    releaseYears: ReleaseYear[]
    id: number
    externalId: ExternalId
    names: Name[]
    type: string
    description: string
    shortDescription: string
    logo?: Logo
    poster: Poster
    backdrop: Backdrop
    rating: Rating
    votes: Votes
    movieLength: number
    internalRating: number
    internalVotes: number
    isSeries: boolean
    ticketsOnSale: boolean
    totalSeriesLength?: number
    seriesLength: any
    ratingMpaa?: string
    ageRating?: number
    top10: any
    top250?: number
    typeNumber: number
    status?: string
  }