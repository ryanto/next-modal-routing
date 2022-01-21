export function ImageDetail({ image }) {
  return (
    <img
      src={`/${image}.jpeg`}
      className="object-cover rounded shadow-lg h-2/3"
    />
  );
}
