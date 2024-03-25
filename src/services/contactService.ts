import { Contact } from "@entities/contact";

const API_BASE_URL = "https://66018a8487c91a11641b15d2.mockapi.io";

export const create = async (contact: Contact): Promise<void> => {
  const res = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data: create");
  }

  return await res.json();
};

const contactService = {
  create,
};
export default contactService;
