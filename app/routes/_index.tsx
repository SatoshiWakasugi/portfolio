import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Profile } from "~/components/Profile";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import type { MetaFunction } from "@remix-run/node";
import type { Link } from "~/types/Link";
import type { MicroCMSContents } from "~/types/MicroCMS";
import type { Profile as ProfileType } from "~/types/Profile";

export const meta: MetaFunction = () => {
  return [
    { title: "ポートフォリオ" },
    { name: "description", content: "Satoshi Wakasugi 's Portfolio" },
  ];
};

export const loader = async () => {
  const apiUrl = process.env.MICRO_CMS_URL;
  const apiKey = process.env.MICRO_CMS_API_KEY;

  const profileRes = await fetch(`${apiUrl}/profile`, {
    headers: {
      "X-API-KEY": apiKey || "",
    },
  });

  const linksRes = await fetch(`${apiUrl}/links`, {
    headers: {
      "X-API-KEY": apiKey || "",
    },
  });

  const profile: ProfileType = await profileRes.json();
  const links: MicroCMSContents<Link> = await linksRes.json();

  return json({ profile, links });
};

export default function Index() {
  const data: { profile: ProfileType; links: MicroCMSContents<Link> } =
    useLoaderData<typeof loader>();

  const {
    profile,
    links: { contents: links },
  } = data;

  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-blue-950">
        <div className="flex flex-col items-center gap-16">
          <header className="flex flex-col items-center gap-9">
            <h1 className="leading text-2xl font-bold text-yellow-200 dark:text-gray-100">
              {profile.heading}
            </h1>
            <Avatar className="w-72 h-72 rounded-full group-hover:blur-sm">
              <AvatarImage src={profile.icon.url} />
              <AvatarFallback />
            </Avatar>
          </header>
          <a className="p-4 text-center" href="#profile">
            <img
              alt="arrow"
              src="/stat_minus_2_48dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.svg"
            />
          </a>
        </div>
      </div>
      <section
        className="p-4 flex min-h-screen items-center justify-center bg-blue-950"
        id="profile"
      >
        <Profile
          catchPhrase={profile.catchPhrase}
          contact={profile.contact}
          interest={profile.interest}
          introText={profile.introText}
          introduction={profile.introduction}
          links={links}
          skill={profile.skill}
        />
      </section>
    </div>
  );
}
