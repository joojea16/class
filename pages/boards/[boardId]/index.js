import { useRouter } from "next/router";

export default function BoardIdPage() {
  const router = useRouter();
  return (
    <>
      <div>동적페이지입니다.</div>;
      <div>게시글아이다:{router.query.boardId}</div>
    </>
  );
}
