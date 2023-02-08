import { FormEvent } from "react";
import "./searchbar.css";

interface SearchBarProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (ev: FormEvent<HTMLFormElement>) => void;
}

const SearchBar = ({ onSubmit, onChange }: SearchBarProps) => (
  <form className="header" onSubmit={onSubmit}>
    <input
      className="input-search"
      placeholder="Enter a Breed"
      type="text"
      onChange={(ev) => onChange(ev.target.value)}
    />
    <button className="button-search" type="submit">
      Search
    </button>
  </form>
);

export default SearchBar;
