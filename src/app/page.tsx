import Link from "next/link";

function HomePage() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto">
        <div>
          <h1>
            Dan's computer <br />
            Repair shop
          </h1>

          <address>
            555 Gateway Lane <br />
            Kansas City, KS 55555
          </address>

          <p>Open daily: 9am to 5pm</p>
          <Link className="hover:underline" href="tel:5555555555">
            555-555-5555
          </Link>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
