
export interface IMovie {
    movie: {
        genre: string[];
        imageurl: string;
        imdbid: string;
        imdbrating: number;
        language: string[];
        released: number;
        runtime: string;
        streamingAvailability: string;
        synopsis: string;
        title: string;
        type: string;
    }
}