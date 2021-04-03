import UserRecipes from "./UserRecipes"

const Home = ({ user }) => {
  return (
    <div data-testid="home">
      <UserRecipes user={user} />
    </div>
  );
};

export default Home;
