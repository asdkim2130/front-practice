import Header from "@/components/header";
import Link from "next/link";

const assignments = [
  {
    order: 1,
    path: "product-list",
    title: "상품 목록 만들기",
    description: "object 형식의 데이터를 이용해서 상품 목록 만들기",
  },
  {
    order: 2,
    path: "profile-card",
    title: "프로필 카드 만들기",
    description:
      "object 형식의 데이터를 만들고 그것을 이용해서 프로필 카드 만들기",
  },
  {
    order: 3,
    path: "counter",
    title: "카운터",
    description: "클라이언트 컴포넌트를 이용해서 카운터 만들기",
  },
  {
    order: 4,
    path: "posts",
    title: "카페보드",
    description: "컴포넌트 분리를 이용해서 게시물 데이터 보이게 만들기",
  },
  {
    order: 5,
    path: "like",
    title: "좋아요",
    description: "sateStatus 이용해서 좋아요 기능 만들기",
  },
  {
    order: 6,
    path: "login",
    title: "로그인",
    description: "로그인 기능 만들기",
  },
];

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col relative overflow-hidden">
      <Header title={"Frontend 과제"} />
      <main className="w-full h-full flex flex-col overflow-y-auto py-5 px-5 gap-5">
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            title={`${assignment.order}. ${assignment.title}`}
            href={`/assignments/${assignment.path}`}
            description={assignment.description}
          />
        ))}
      </main>
    </div>
  );
}

function Assignment({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description?: string;
}) {
  return (
    <Link
      href={href}
      className="bg-white border rounded-md p-5 flex flex-col hover-bg-stone-100"
    >
      <div className="font-bold mb-2">{title}</div>
      {description && (
        <div className="text-sm text-stone-500">{description}</div>
      )}
    </Link>
  );
}
