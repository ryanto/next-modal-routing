import { useRouter } from "next/router";

export default function ImagePage() {
  let router = useRouter();
  let image = router.query.image;

  return (
    <div>
      <a className="h-screen w-screen bg-gray-800 relative block">
        <div className="absolute h-full w-full">
          <div className="flex flex-col items-center justify-center h-screen">
            <img
              src={`/${image}.jpeg`}
              className="w-1/2 h-2/3 shadow-lg rounded object-cover"
            />
          </div>
        </div>
      </a>
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { image: "1" } },
      { params: { image: "2" } },
      { params: { image: "3" } },
      { params: { image: "4" } },
      { params: { image: "5" } },
      { params: { image: "6" } },
    ],
    fallback: "blocking",
  };
}

export function getStaticProps(context) {
  return {
    props: {
      image: context.params.image,
    },
  };
}
