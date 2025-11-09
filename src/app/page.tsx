import RepositoryCard from "../app/components/RepositoryCard/card";
import Header from "../app/components/Header/header";
import Profile from "../app/components/Profile/profile";

export default function Home() {
  const profile = {
    name: "Vivian Graton",
    username: "vigraton",
    followers: 11,
    following: 16,
    location: "SP, Brasil",
    company: "Valint Group Brasil",
  };

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
      updatedAt: "4 months ago",
    },
    {
      id: 3,
      title: "Momomo",
      language: "Java",
      updatedAt: "Updated now",
    },
  ];

  return (
    <>
      <Header />

      <div className="grid grid-cols-2 mt-2 px-3">
        <Profile {...profile} />
        <div className="flex flex-row gap-[12px]">
          {repos.map((repo) => (
            <RepositoryCard key={repo.id} {...repo} />
          ))}
        </div>
      </div>
    </>
  );
}
