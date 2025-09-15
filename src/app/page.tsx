import Link from "next/link";
const mockUrls = ["https://li38l3utb2.ufs.sh/f/0J5Vzlz7TCSgnXkRUngQHfDFzkmhpUjLEsM5I0u7GogC3BaP","https://li38l3utb2.ufs.sh/f/0J5Vzlz7TCSglksOmmUrFI43o70nybmpaGcs1w2Tt96kqRPx","https://li38l3utb2.ufs.sh/f/0J5Vzlz7TCSgEPRbAMIUtsb3l8710fwumWKD2Zrdzhn6iage"]
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));


export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
			  <div className="flex flex-wrap gap-4">{
      mockImages.map((image) => (
        <div key ={image.id} className="w-48">
          <img src={image.url} alt="image" />
        </div>
      ))
    }
    </div>
		</main>
	);
}
