import Image from "next/image";

export default function Home() {
  const sites = [
    {
      name: "占いサイト",
      description: "毎日占える楽しい占いサイト！",
      url: "#",
      image: "/placeholder-1.png",
    },
    {
      name: "個人ブログ",
      description: "技術や日常についてのブログ。",
      url: "#",
      image: "/placeholder-2.png",
    },
  ];

  return (
    <main className="p-4">
      <header className="bg-blue-500 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Tomoki Sites</h1>
        <p className="text-sm">私が作成したサイト一覧です！</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {sites.map((site, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={site.image}
              alt={site.name}
              width={300}
              height={200}
              className="w-full"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{site.name}</h2>
              <p className="text-gray-600 text-sm">{site.description}</p>
              <a
                href={site.url}
                className="text-blue-500 hover:underline text-sm"
              >
                サイトを見る
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
