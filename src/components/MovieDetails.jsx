import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setDialogClose } from "../features/movieDetailsSlice";

function MovieDetails()
{   
    const { selectedMovie } = useSelector((state) => state.movieDetails);
    const dispatch = useDispatch();

    if(!selectedMovie) return null;

    return (    
        <>
            <Dialog open={Boolean(selectedMovie)}>
                <DialogContent className=" bg-gray-900 text-white p-4 rounded-lg">
                <div className="flex flex-col">
                    <DialogTitle className="text-center">{selectedMovie.Title} ({selectedMovie.Year})</DialogTitle>
                    <div className="flex flex-row items-center">
                        <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="w-41 h-63 rounded-md m-auto" />   
                        <div className="flex flex-col justify-baseline items-baseline gap-4 m-auto pl-5">
                            <p className="text-1.5xl">{selectedMovie.Plot}</p>
                            <p><span className="font-bold">Genre:</span> {selectedMovie.Genre}</p>
                            <p><span className="font-bold">Director:</span> {selectedMovie.Director}</p>
                            <p><span className="font-bold">Cast:</span> {selectedMovie.Actors}</p>
                            <p><span className="font-bold">Runtime:</span> {selectedMovie.Runtime}</p>
                        </div>
                    </div>
                </div>
                </DialogContent>
            <button onClick={() => dispatch(setDialogClose())} className="bg-gray-900 cursor-pointer hover:bg-gray-700 transition">Close</button>
            </Dialog>
        </>
    );
}

export default MovieDetails;