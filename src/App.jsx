import { fetchPhotos } from "./api/mediaApi";

const App = () => {

  function getPhotos (query) {
    fetchPhotos(query)
      .then((data) => {
        console.log("Unsplash response", data);
      })
      .catch((error) => {
        console.error("Error fetching photos", error);
      });
  }

  return (
    <div className="bg-gray-800 min-h-screen flex gap-6 items-center justify-center">
      <h1 className="text-3xl font-bold underline   text-white flex items-center justify-center">
        Hello world!
      </h1>
      <button onClick={() => getPhotos('cat')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
        Get Photos
      </button>
    </div>
  );
};

export default App;
