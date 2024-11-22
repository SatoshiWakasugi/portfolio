import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { Profile } from "~/components/Profile";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Profile as ProfileType } from "~/types/Profile";

export const meta: MetaFunction = () => {
  return [
    { title: "ポートフォリオ" },
    { name: "description", content: "Satoshi Wakasugi 's Portfolio" },
  ];
};

export const loader = async () => {
  const apiUrl = process.env.MICRO_CMS_URL;
  const apiKey = process.env.MICRO_CMS_API_KEY;
  const response = await fetch(`${apiUrl}/profile`, {
    headers: {
      "X-API-KEY": apiKey || "",
    },
  });

  return json(await response.json());
};

export default function Index() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringText1, setIsHoveringText1] = useState(false);
  const [isHoveringText2, setIsHoveringText2] = useState(false);
  const [isHoveringText3, setIsHoveringText3] = useState(false);
  const [isHoveringText4, setIsHoveringText4] = useState(false);

  const data: ProfileType = useLoaderData<typeof loader>();

  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-blue-950">
        <div className="flex flex-col items-center gap-16">
          <header className="flex flex-col items-center gap-9">
            <h1 className="leading text-2xl font-bold text-yellow-200 dark:text-gray-100">
              🍕 Welcome to my portfolio
            </h1>
            <div
              className="relative w-72 h-72 rounded-full group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Avatar className="w-full h-full group-hover:blur-sm">
                <AvatarImage src="/icon.jpg" />
                <AvatarFallback>SW</AvatarFallback>
              </Avatar>

              <svg
                className={`absolute inset-0 rounded-full w-full h-full ${
                  isHovering ? "animate-spin-slow paused" : "animate-spin-slow"
                }`}
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path
                    d="M 150, 150 m -130, 0 a 130,130 0 1,1 260,0 a 130,130 0 1,1 -260,0"
                    fill="none"
                    id="outerCirclePath"
                  />
                </defs>
                <a
                  href="https://qiita.com/waka0628s"
                  onMouseEnter={() => setIsHoveringText1(true)}
                  onMouseLeave={() => setIsHoveringText1(false)}
                  rel="noopener noreferrer"
                  style={{
                    padding: "0px 20px",
                    display: "inline-block",
                  }}
                  target="_blank"
                >
                  <text
                    className="hover:fill-cyan-400"
                    fill="white"
                    fontSize="18"
                    textAnchor="middle"
                  >
                    <textPath href="#outerCirclePath" startOffset="10%">
                      Visit Qiita ...
                    </textPath>
                  </text>
                </a>
                <a
                  href="/career"
                  onMouseEnter={() => setIsHoveringText3(true)}
                  onMouseLeave={() => setIsHoveringText3(false)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <text
                    className="hover:fill-cyan-400"
                    fill="white"
                    fontSize="18"
                    textAnchor="middle"
                  >
                    <textPath href="#outerCirclePath" startOffset="35%">
                      Career history resume ...
                    </textPath>
                  </text>
                </a>
                <a
                  href="https://github.com/SatoshiWakasugi"
                  onMouseEnter={() => setIsHoveringText2(true)}
                  onMouseLeave={() => setIsHoveringText2(false)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <text
                    className="hover:fill-cyan-400"
                    fill="white"
                    fontSize="18"
                    textAnchor="middle"
                  >
                    <textPath href="#outerCirclePath" startOffset="60%">
                      Check GitHub ...
                    </textPath>
                  </text>
                </a>
                <a
                  href="https://www.wantedly.com/id/satoshi_wakasugi_e"
                  onMouseEnter={() => setIsHoveringText4(true)}
                  onMouseLeave={() => setIsHoveringText4(false)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <text
                    className="hover:fill-cyan-400"
                    fill="white"
                    fontSize="18"
                    textAnchor="middle"
                  >
                    <textPath href="#outerCirclePath" startOffset="85%">
                      Visit Wantedly ...
                    </textPath>
                  </text>
                </a>
              </svg>

              <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white text-2xl text-center">
                {isHoveringText1 && <p>Qiita</p>}
                {isHoveringText2 && <p>GitHub</p>}
                {isHoveringText3 && <p>職務経歴書</p>}
                {isHoveringText4 && <p>Wantedly</p>}
              </div>
            </div>
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
          contact={data.contact}
          interest={data.interest}
          introduction={data.introduction}
          skill={data.skill}
        />
      </section>
    </div>
  );
}
