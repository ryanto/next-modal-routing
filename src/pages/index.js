import Link from "next/link";
import { useRouter } from "next/router";
import { ImageDetail } from "../components/image-detail";
import { Modal } from "../components/modal";

export default function Home() {
  let router = useRouter();
  return (
    <div>
      {router.query.image && (
        <Modal
          onClose={() => {
            router.push("/");
          }}
        >
          <ImageDetail image={router.query.image} />
        </Modal>
      )}
      <div className="grid w-screen h-screen grid-cols-3 grid-rows-2">
        <Link href="/?image=1" as="/1">
          <a>
            <img src="/1.jpeg" className="object-cover w-full h-full" />
          </a>
        </Link>
        <Link href="/?image=2" as="/2">
          <a>
            <img src="/2.jpeg" className="object-cover w-full h-full" />
          </a>
        </Link>
        <Link href="/?image=3" as="/3">
          <a>
            <img src="/3.jpeg" className="object-cover w-full h-full" />
          </a>
        </Link>
        <Link href="/?image=4" as="/4">
          <a>
            <img src="/4.jpeg" className="object-cover w-full h-full" />
          </a>
        </Link>
        <Link href="/?image=5" as="/5">
          <a>
            <img src="/5.jpeg" className="object-cover w-full h-full" />
          </a>
        </Link>
        <Link href="/?image=6" as="/6">
          <a>
            <img src="/6.jpeg" className="object-cover w-full h-full" />
          </a>
        </Link>
      </div>
    </div>
  );
}
