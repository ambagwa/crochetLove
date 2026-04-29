import { Button } from "@/components/ui/button";
import { useFavorites } from "@/context/FavoritesContext";
import { useFetch } from "@/hooks/useFetch";
import { BASE_URL } from "@/services/api";

export const Wishlist = () => {
  const { favIds, toggle, clearAll } = useFavorites();
  const { data, error, loading } = useFetch("/products/fetchAllProducts");

  const favoriteProducts =
    data?.products?.filter((p) => favIds.has(p._id)) || [];

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center mt-5">Something went wrong</p>;

  return (
    <div className="ps-2 md:ps-0 pt-10 mx-4 lg:mx-40">
      {/** Header */}
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Wishlist</h1>
        <Button variant="orange" className="" onClick={clearAll}>
          Delete All
        </Button>
      </div>

      {/** Products */}

      <div className="flex-1 overflow-y-auto px-6 pb-4">
        {favoriteProducts.length === 0 ? (
          <p className="text-center text-gray-500">No favorites yet</p>
        ) : (
          favoriteProducts.map((p) => {
            const imageUrl =
              p.images?.length > 0
                ? `${BASE_URL}/api/images/${p.images[0]}`
                : "https://via.placeholder.com/400x500?text=No+Image";

            return (
              <div
                className="grid grid-cols-3 sm:grid-cols-4 gap-2 my-2"
                key={p._id}
              >
                {/* Image */}
                <div className="my-2">
                  <img
                    src={imageUrl}
                    alt={p.name}
                    className="w-20 h-auto rounded-lg"
                  />
                </div>

                {/* Title, buttons and price on mobile */}
                <div className="col-span-2 sm:col-span-2 gap-2 flex flex-col">
                  <div className="p-2">
                    <p className="font-medium">{p.name}</p>
                  </div>

                  {/* Price — visible only on mobile */}
                  <div className="px-2 sm:hidden">
                    <p className="text-2xl font-bold">sh. {p.price}</p>
                  </div>

                  <div className="p-2">
                    <Button
                      variant="orange"
                      size="xs"
                      className="hover:cursor-pointer"
                    >
                      Move to Cart
                    </Button>
                    <button
                      onClick={() => toggle(p._id)}
                      className="text-blue-500 hover:text-blue-600 ms-5 hover:cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* Price — visible only on sm and above */}
                <div className="hidden sm:block p-2">
                  <p className="text-2xl font-bold">sh. {p.price}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
