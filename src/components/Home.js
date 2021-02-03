import UserRecipes from "./UserRecipes"

const Home = ({ user }) => {
  return (
    <>
      <UserRecipes user={user} />
    </>
  );
};

export default Home;
