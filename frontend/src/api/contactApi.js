// contactApi.js
export const sendContact = async (data) => {
  const res = await fetch("https://ecomus-3udj.onrender.com/api/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  return res.json();
};
