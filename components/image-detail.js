export function ImageDetail({ image }) {
  return (
    <img
      src={`/${image}.jpeg`}
      className="object-cover w-1/2 rounded shadow-lg h-2/3"
    />
  );
}
