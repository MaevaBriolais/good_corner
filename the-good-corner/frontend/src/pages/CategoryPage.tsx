import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import AdGallery from "../organisms/AdGallery";

const GET_ADS = gql`
  query GetCategoryById($id: String!) {
    getCategoryById(id: $id) {
      id
      name
      ads {
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
  }
`;

export default function CategoryPage() {
  const { catId } = useParams();
  
  console.log("catId:", catId);
  
  const { loading, error, data } = useQuery(GET_ADS, {
    variables: { id: catId },
    skip: !catId,
  });

  console.log("Data:", data);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  console.log("DATA", data?.getCategoryById);

  return (
    <AdGallery
      title={`Annonces de la catégorie ${
        data?.getCategoryById?.name || "Non défini"
      }`}
      ads={data?.getCategoryById?.ads || []}
    />
  );
}
