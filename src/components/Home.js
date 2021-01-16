import UserRecipes from "./UserRecipes"
import recipes from "../recipes.json"

const Home = ({ user }) => {
  return (
    <>
      <h1>Welcome {user.displayName}</h1>
      <UserRecipes user={user} />
    </>
  );
};

export default Home;
