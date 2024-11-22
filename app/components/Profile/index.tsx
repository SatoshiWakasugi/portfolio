import { Card } from "./Card";
import { Heading } from "./Heading";

type Props = {
  introduction: string;
  skill: string;
  interest: string;
  contact: string;
};

export const Profile: React.FC<Props> = ({
  introduction,
  skill,
  interest,
  contact,
}) => {
  return (
    <Card>
      <div className="max-w-4xl mx-auto p-6">
        <header className="text-center mb-10">
          <h1 className="font-semibold">
            こんにちは、若杉 智史（ワカスギ サトシ）です！
          </h1>
          <p className=" text-gray-600 mt-2">
            フロントエンドエンジニア | バックエンドエンジニア
          </p>
        </header>

        <section className="mb-12">
          <div
            className="text-lg leading-relaxed mx-24"
            dangerouslySetInnerHTML={{ __html: introduction }}
          />
        </section>

        <section className="mb-12">
          <Heading className="text-center mb-4">スキル・得意分野</Heading>
          <div
            className="text-lg leading-relaxed mx-24"
            dangerouslySetInnerHTML={{ __html: skill }}
          />
        </section>

        <section className="mb-12">
          <Heading className="text-center mb-4">趣味・興味</Heading>
          <div
            className="text-lg leading-relaxed mx-24"
            dangerouslySetInnerHTML={{ __html: interest }}
          />
        </section>

        <section className="text-center mb-12">
          <Heading className="text-center mb-4">連絡先</Heading>
          <div
            className="text-lg leading-relaxed mx-24"
            dangerouslySetInnerHTML={{ __html: contact }}
          />
        </section>

        <section className="text-center mb-12">
          <Heading className="text-center mb-4">リンク</Heading>
          <ul className="flex justify-center mt-4 space-x-6">
            <li>
              <a
                className="text-blue-600"
                href="https://github.com/SatoshiWakasugi"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="text-blue-600"
                href="https://qiita.com/waka0628s"
                rel="noreferrer"
                target="_blank"
              >
                Qiita
              </a>
            </li>
            <li>
              <a
                className="text-blue-600"
                href="https://www.wantedly.com/id/satoshi_wakasugi_e"
                rel="noreferrer"
                target="_blank"
              >
                Wantedly
              </a>
            </li>
            <li>
              <a className="text-blue-600" href="/career" target="_blank">
                職務経歴書
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Card>
  );
};
