import ActionBar from "../components/ActionBar";
import PlayListHeader from "../components/PlayListHeader";
import Songs from "../components/Songs";
import Divider from "../components/Divider";

const LikedSongsPage = () => {
  return (
    <div style={{ width: "100%" }}>
      <PlayListHeader />
      <Divider />
      <ActionBar />
      <Divider />
      <Songs />
    </div>
  );
};

export default LikedSongsPage;
