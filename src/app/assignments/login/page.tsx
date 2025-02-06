export default function LoginPage() {
  return (
    <div>
      <h1>로그인페이지</h1>
      <form>
        <label>아이디</label>
        <input type="text" className="border border-black" />
        <label>패스워드</label>
        <input type="password" className="border border-black" />
        <button>로그인</button>
      </form>
    </div>
  );
}
