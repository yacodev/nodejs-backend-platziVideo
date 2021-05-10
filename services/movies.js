//const {moviesMock} = require('../utils/mocks/movies');
const MongoLib = require('../lib/mongo');

class moviesService{
    constructor(){
        this.collection = 'movies';
        this.mongDB = new MongoLib;
    }
    async getMovies({tags}){
        const query = tags &&{tags:{$in:tags}};//IF ternario
        const movies = await this.mongDB.getAll(this.collection,query);
        return movies || [];
    }
    async getMovie({movieId}){
        const movie = await this.mongDB.get(this.collection,movieId);
        return movie||{};
    }
    async createMovie({movie}){
        const createdMovieId = await this.mongDB.create(this.collection,movie);
        return createdMovieId;
    }
    async updateMovie({movieId, movie}={}){
        const updatedMovieId = await this.mongDB.update(this.collection,movieId,movie);
        return updatedMovieId;
    }
    async deleteMovie({movieId}){
        const deletedMovieId = await this.mongDB.delete(this.collection,movieId);
        return deletedMovieId;
    }
    async partialUpdateMovie(){
        const updatedMovieId = await Promise.resolve(moviesMock[0].id);
        return updatedMovieId;
    }
}
module.exports = moviesService;