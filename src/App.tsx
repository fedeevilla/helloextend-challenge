import { FormEvent, useEffect, useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import FavoriteIcon from "./components/FavoriteIcon/FavoriteIcon";
import List from "./components/List/List";
import { api } from "./services/api";

import "./App.css";

function App() {
  const [text, setText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dogList, setDogList] = useState<string[]>([]);
  const [favoriteDogList, setFavoriteDogList] = useState<string[]>(
    JSON.parse(localStorage.getItem("favoriteDogList") || "[]")
  );

  const handleSearch = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (text !== "") {
      setIsLoading(true);
      const { message } = await api.fetch(text);

      setDogList(message);
      setIsLoading(false);
    }
  };

  const handleClick = (dog: string) => {
    !favoriteDogList.includes(dog)
      ? setFavoriteDogList(() => favoriteDogList.concat(dog))
      : setFavoriteDogList(() =>
          favoriteDogList.filter((item) => item !== dog)
        );
  };

  useEffect(
    () =>
      localStorage.setItem("favoriteDogList", JSON.stringify(favoriteDogList)),
    [favoriteDogList]
  );

  return (
    <div className="App">
      <h1 className="title">Dog Breeds</h1>
      <SearchBar onChange={setText} onSubmit={handleSearch} />
      {isLoading ? (
        <h1 className="spinner">Loading...</h1>
      ) : dogList.length > 0 ? (
        <List
          favoriteDogList={favoriteDogList}
          items={dogList.slice(0, 10)}
          onClick={handleClick}
        />
      ) : (
        <h1 className="title">No results</h1>
      )}
      <div className="divider" />
      {favoriteDogList.length > 0 ? (
        <>
          <h1 className="title">
            <FavoriteIcon isFilled /> Favorites
          </h1>
          <List
            favoriteDogList={favoriteDogList}
            items={favoriteDogList}
            onClick={handleClick}
          />
        </>
      ) : (
        <h1 className="title">No favorites</h1>
      )}
    </div>
  );
}

export default App;
