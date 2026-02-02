import { Client, Account, Databases, ID, Query } from "appwrite";
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;
const client = new Client()
    .setEndpoint("https://nyc.cloud.appwrite.io/v1")
    .setProject(PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);
const updateSearchCount = async (searchTerm, movie) => {
    // 1. Use Appwrite SDK to check if the search term exists in the database
    try {
        const result = await databases.listDocuments(
            DATABASE_ID,
            TABLE_ID,
            [Query.equal("searchTerm", searchTerm)]
        )
        if (result.documents.length > 0) {
            // 2. If the search term exists, update the count
            const existingDocument = result.documents[0];
            const newCount = (existingDocument.count || 0) + 1;
            await databases.updateDocument(
                DATABASE_ID,
                TABLE_ID,
                existingDocument.$id,
                {
                    count: newCount
                }
            );
        } else {
            // 3. If the search term doesn't exist, create a new document with count as 1
            await databases.createDocument(
                DATABASE_ID,
                TABLE_ID,
                ID.unique(),
                {
                    searchTerm,
                    count: 1,
                    movie_id: movie.id || null,
                    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}` || null
                }
            );
        }
    } catch (error) {
        console.error("Error updating search count:", error);
    }
}

const getTrendingMovies = async () => {
    try {
        const result = await databases.listDocuments(
            DATABASE_ID,
            TABLE_ID,
            [
                Query.limit(5),
                Query.orderDesc("count"),
            ]
        );
        return result.documents;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        return [];
    }
};

export { client, account, databases, getTrendingMovies, updateSearchCount };