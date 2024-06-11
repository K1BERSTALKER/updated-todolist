export default function Logo({ href }: { href: string }) {
  return (
    <a
      href={href || "/"}
      className={"bg-black font-bold text-xl p-2 rounded-md text-white"}
    >
      DEV <span className="bg-orange-500 text-black p-1 rounded-md">XUB</span>
    </a>
  );
}
