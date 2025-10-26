import RepositoryCard from "../app/components/RepositoryCard/card";
import Header from "../app/components/Header/header";
import Profile from "../app/components/Profile/profile";

export default function Home() {
  const profile = {
    name: "Vivian Graton",
    username: "vigraton",
    followers: 11,
    following: 16,
    location: "SP, Brasil"
  }

  const repos = [
    {
      id: 1,
      title: "GitHub Redesign",
      language: "TypeScript",
      updatedAt: "2 minutes ago",
    },
    {
      id: 2,
      title: "Mimimi",
      language: "Go",
      updatedAt: "4 months ago"
    },
    {
      id: 3,
      title: "Momomo",
      language: "Java",
      updatedAt: "Updated now"
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center min-h-screen">
        <Header />
        <div className="flex flex-row gap-4 translate-x-40">
          {repos.map((repo) => (
            <RepositoryCard key={repo.id} {...repo} />
          ))}
        </div>
      </div>
      <div className="absolute justify-start px-[12%] py-[8.5%] top-0">
        {/* <Profile /> */}
      </div>
    </>
  );
}
