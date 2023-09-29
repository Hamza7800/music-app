import { useState } from "react";
import InputField from "../InputField";
import Button from "../Button";

const CreateSong = () => {
  const [artist, setArtist] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [filePath, setFilePath] = useState("");
  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log({ name, artist, coverPhoto, filePath, genre });
  };

  return (
    <form action="" onSubmit={submitHandler} className="form">
      <InputField
        name="artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        id="artist"
        type="text"
        placeholder="Artist"
      />
      <InputField
        className="input"
        required
        name="coverPhoto"
        value={coverPhoto}
        onChange={(e) => setCoverPhoto(e.target.value)}
        id="coverPhoto"
        type="text"
        placeholder="CoverPhoto"
      />
      <InputField
        className="input"
        required
        name="filePath"
        value={filePath}
        onChange={(e) => setFilePath(e.target.value)}
        id="filePath"
        type="text"
        placeholder="FilePath"
      />
      <InputField
        className="input"
        required
        name="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        id="genre"
        type="text"
        placeholder="Genre"
      />
      <InputField
        className="input"
        required
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
        type="text"
        placeholder="Song Name"
      />
      <Button iconOnly>Create</Button>
    </form>
  );
};

export default CreateSong;
