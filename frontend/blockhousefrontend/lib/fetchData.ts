export const fetchData = async (endpoint: string) => {
  const res = await fetch(`http://127.0.0.1:8000/api/${endpoint}/`);
  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}: ${res.statusText}`);
  }
  return res.json();
};
