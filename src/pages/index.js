import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="grid w-screen h-screen grid-cols-3 grid-rows-2">
        <Link href="/1">
          <a>
            <img src="/1.jpeg" className="object-cover w-full h-full" />
          </a>
        </Link>
        <Link href="/2">
          <a>
            <img src="/2.jpeg" className="object-cover w-full h-full" />
          </a>
        </Link>
        <Link href="/3">
          <a>
            <img src="/3.jpeg" className="object-cover w-full h-full" />
          </a>
        </Link>
        <Link href="/4">
          <a>
            <img src="/4.jpeg" className="object-cover w-full h-full" />
          </a>
        </Link>
        <Link href="/5">
          <a>
            <img src="/5.jpeg" className="object-cover w-full h-full" />
          </a>
        </Link>
        <Link href="/6">
          <a>
            <img src="/6.jpeg" className="object-cover w-full h-full" />
          </a>
        </Link>
      </div>
    </div>
  );
}
