import Image from "next/image";
import { Pencil, Building2, MapPin, Link as LinkIcon } from "lucide-react";

type ProfileProps = {
  name: string;
  username: string;
  followers: number;
  following: number;
  company: string;
  location: string;
};

export default function Profile({
  name,
  username,
  followers,
  following,
  company,
  location,
}: ProfileProps) {
  return (
    <aside className="flex flex-col gap-4 w-full">
      {/* Avatar */}
      <div className="w-[260px] h-[260px] flex-shrink-0 mx-auto lg:mx-0">
        <Image
          className="rounded-full object-cover ring-2 ring-border"
          src="/profile.jpg"
          alt={`${name}'s profile picture`}
          width={260}
          height={260}
        />
      </div>

      {/* Name and edit */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <h1 className="font-semibold text-2xl text-foreground text-balance">{name}</h1>
          <button
            className="flex items-center justify-center border border-border rounded-md bg-background-secondary hover:bg-background-tertiary hover:border-border-hover transition-colors w-8 h-8 cursor-pointer"
            aria-label="Edit profile"
          >
            <Pencil size={14} className="text-foreground-muted" />
          </button>
        </div>
        <p className="text-foreground-muted text-lg">{username}</p>
      </div>

      {/* Followers */}
      <div className="flex items-center gap-1 text-sm">
        <span className="text-foreground font-semibold">{followers}</span>
        <span className="text-foreground-muted">followers</span>
        <span className="text-foreground-muted mx-1">{"·"}</span>
        <span className="text-foreground font-semibold">{following}</span>
        <span className="text-foreground-muted">following</span>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1.5 text-sm">
        <div className="flex items-center gap-2 text-foreground-muted">
          <Building2 size={16} className="flex-shrink-0" />
          <span className="text-foreground">{company}</span>
        </div>
        <div className="flex items-center gap-2 text-foreground-muted">
          <MapPin size={16} className="flex-shrink-0" />
          <span className="text-foreground">{location}</span>
        </div>
        <div className="flex items-center gap-2 text-foreground-muted">
          <LinkIcon size={16} className="flex-shrink-0" />
          <a
            className="text-foreground hover:text-accent transition-colors hover:underline"
            href="https://www.figma.com/@viviangraton"
            target="_blank"
            rel="noopener noreferrer"
          >
            figma.com/@viviangraton
          </a>
        </div>
        <div className="flex items-center gap-2 text-foreground-muted">
          <LinkIcon size={16} className="flex-shrink-0" />
          <a
            className="text-foreground hover:text-accent transition-colors hover:underline"
            href="https://www.linkedin.com/in/vivian-graton-a3b451253/"
            target="_blank"
            rel="noopener noreferrer"
          >
            in/vivian-graton-a3b451253
          </a>
        </div>
      </div>

      {/* Divider + Organizations */}
      <div className="border-t border-border pt-4 mt-2">
        <h2 className="font-semibold text-sm text-foreground">Organizations</h2>
      </div>
    </aside>
  );
}
