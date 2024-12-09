import { Search } from "lucide-react";
import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";
import posts from "../../assets/posts";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container border-t-black border-y-4 border-b-black">
        <h1 className="heading rounded-md">
          PITCH YOUR STARTUP CONNECT WITH ENTREPRENEURS
        </h1>
        <p className="sub-heading !max-w-3xl">
          Showcase Your Ideas: Stand Out and Shine in Our Online Competition!
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p>No Projects Available. </p>
          )}
        </ul>
      </section>
    </>
  );
}
