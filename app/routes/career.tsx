import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";
import { Resume } from "~/components/Resume";
import { type MicroCMSContents } from "~/types/MicroCMS";
import { type Project } from "~/types/Project";

export const meta: MetaFunction = () => {
  return [
    { title: "職務経歴書" },
    { name: "description", content: "Career history resume" },
  ];
};

export const loader = async () => {
  const apiUrl = process.env.MICRO_CMS_URL;
  const apiKey = process.env.MICRO_CMS_API_KEY;
  const response = await fetch(`${apiUrl}/career?orders=start_date`, {
    headers: {
      "X-API-KEY": apiKey || "",
    },
  });

  return json(await response.json());
};

export default function Career() {
  const data: MicroCMSContents<Project> = useLoaderData<typeof loader>();
  const { contents } = data;

  return (
    <ClientOnly fallback={<div>読み込み中...</div>}>
      {() => <Resume projects={contents} />}
    </ClientOnly>
  );
}
