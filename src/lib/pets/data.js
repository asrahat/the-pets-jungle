export const fetchPets = async (searchTerm = '') => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets?search=${searchTerm}`);
  const data = await res.json();
  return data || [];
};
export const fetchFeaturedPets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);
  const data = await res.json();
  return data || [];
};

export const fetchPet = async (id, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pets/${id}`,
    // {
    //   headers: {
    //     authorization: token
    //       ? `Bearer ${token}`
    //       : "",
    //   },

    //   cache: "no-store",
    // }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch pet");
  }

  return res.json();
};