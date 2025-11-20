// contactApi.js
export const sendContact = async (data) => {
  const res = await fetch(process.env.REACT_APP_API_URL || "http://localhost:5000/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  return res.json();
};
