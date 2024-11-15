import { Link } from "react-router-dom";
import Search from "../molecules/Search";
import { gql, useQuery } from "@apollo/client";

const GET_CATEGORIES = gql`
  query Query {
    getCategories {
      id
      name
    }
  }
`;

function Header() {

  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <header className="header">
      <div className="main-menu">
        <h1>
          <Link to="/" className="button logo link-button">
            <span className="mobile-short-label">TGC</span>
            <span className="desktop-long-label">THE GOOD CORNER</span>
          </Link>
        </h1>
        <Search />
        <Link to="/ads/new" className="button link-button">
          <span className="mobile-short-label">Publier</span>
          <span className="desktop-long-label">Publier une annonce</span>
        </Link>
      </div>
      <nav className="categories-navigation">
        {data.getCategories.map((cat, id) => (
          <span key={cat.id}>
            {id > 0 && "•"}
            <Link
              to={`/categories/${cat.id}`}
              className="category-navigation-link"
            >
              {cat.name}
            </Link>
          </span>
        ))}
      </nav>
    </header>
  );
}

export default Header;
