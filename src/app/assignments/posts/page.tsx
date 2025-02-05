import Link from "next/link";
import styles from "./page.module.css";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const today = new Date();

  // 날짜가 같은지 확인 (연, 월, 일이 모두 같은지)
  const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  if (isToday) {
    // 오늘 작성된 글이면 시간만 표시 (24시간제)
    return date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  } else {
    // 다른 날짜면 년. 월. 일. 표시
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }
}

function TableRow(props: any) {
  return (
    <tr>
      <td>
        <Link href={`/posts/${props.id}`}>
          <span>{props.title}</span>
          <span className={styles.commentCount}>[{props.commentCount}]</span>
        </Link>
      </td>
      <td className={styles.writer}>{props.writer}</td>
      <td className={styles.date}>{props.createdAt}</td>
      <td className={styles.viewCount}>{props.viewCount}</td>
    </tr>
  );
}

export default function Page() {
  const posts = [
    {
      id: 22,
      title: "꿈비 범퍼 침대",
      writer: "ahn_sum87",
      createdAt: "2025-02-03T10:52:30",
      viewCount: 133,
      commentCount: 3,
    },
    {
      id: 11,
      title: "검정치마 콘서트 스탠딩석 구해요",
      writer: "중앙지검검사",
      createdAt: "2025-02-03T10:25:30",
      viewCount: 111,
      commentCount: 3,
    },
    {
      id: 33,
      title: "인테리어 4단선반(나눔완료)",
      writer: "Abanera",
      createdAt: "2025-02-03T09:56:30",
      viewCount: 170,
      commentCount: 6,
    },
  ];

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <TableRow
              id={post.id}
              title={post.title}
              writer={post.writer}
              createdAt={post.createdAt}
              viewCount={post.viewCount}
              commentCount={post.commentCount}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
