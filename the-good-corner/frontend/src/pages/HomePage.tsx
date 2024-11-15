import AdGallery from "../organisms/AdGallery";
import { gql, useQuery } from "@apollo/client";

const GET_ADS = gql`
  query Query {
  getAds {
    id
    title
    description
    owner
    price
    picture
    location
    createdAt
  }
}
`;

export default function HomePage() {

	const { loading, error, data } = useQuery(GET_ADS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return <AdGallery title="Annonces les plus récentes" ads={data.getAds} />;
}