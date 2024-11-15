import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CategoryPage from "./pages/CategoryPage.tsx";
import AdCreationPage from "./pages/AdCreationPage.tsx";
import AdPage from "./pages/AdPage.tsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";

const client = new ApolloClient({
	uri: 'http://localhost:3000/',
	cache: new InMemoryCache()
  });


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <HomePage />},
			{ path: "/ads/:adId", element: <AdPage />},
			{ path: "/ads/new", element: <AdCreationPage />},
			{ path: "/categories/:catId", element: <CategoryPage />},
		],
	},
]);

// biome-ignore lint/style/noNonNullAssertion: There *must* be a #root element for my whole page to work, this has no meaning otherwise
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ApolloProvider client={client}>
			<RouterProvider router={router} />
		</ApolloProvider>
	</StrictMode>,
);
