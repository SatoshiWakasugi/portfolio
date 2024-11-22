import { Card } from "./Card";
import { InnerHTMLContent } from "./InnerHTMLContent";
import { Head } from "./Head";
import { Heading } from "./Heading";
import { HeadSubscript } from "./HeadSubscript";
import { LinkItem } from "./LinkItem";
import type { Link } from "~/types/Link";

type Props = {
  introduction: string;
  skill: string;
  interest: string;
  contact: string;
  introText: string;
  catchPhrase: string;
  links: Link[];
};

export const Profile: React.FC<Props> = ({
  introduction,
  skill,
  interest,
  contact,
  links,
  introText,
  catchPhrase,
}) => {
  return (
    <Card>
      <div className="max-w-4xl mx-auto p-6">
        <header className="text-center mb-10">
          <Head>{introText}</Head>
          <HeadSubscript>{catchPhrase}</HeadSubscript>
        </header>

        <section className="mb-12">
          <InnerHTMLContent contentString={introduction} />
        </section>

        <section className="mb-12">
          <Heading className="text-center mb-4">スキル・得意分野</Heading>
          <InnerHTMLContent contentString={skill} />
        </section>

        <section className="mb-12">
          <Heading className="text-center mb-4">趣味・興味</Heading>
          <InnerHTMLContent contentString={interest} />
        </section>

        <section className="text-center mb-12">
          <Heading className="text-center mb-4">連絡先</Heading>
          <InnerHTMLContent contentString={contact} />
        </section>

        <section className="text-center mb-12">
          <Heading className="text-center mb-4">リンク</Heading>
          <ul className="flex justify-center mt-4 space-x-6">
            {links.map((link) => {
              return (
                <LinkItem
                  href={link.url}
                  key={link.name}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.name}
                </LinkItem>
              );
            })}
            <LinkItem
              className="text-blue-600"
              href="/career"
              rel="noreferrer"
              target="_blank"
            >
              職務経歴書
            </LinkItem>
          </ul>
        </section>
      </div>
    </Card>
  );
};
