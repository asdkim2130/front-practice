import Header from "@/components/header";

export default function LoginPage() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const rawFormData = {
      id: formData.get("id"),
      password: formData.get("password"),
    };

    console.log({ ...rawFormData });
  }

  return (
    <>
      <Header title={"로그인페이지"} hasBack={true} />
      <br></br>
      <form action={handleSubmit}>
        <label>아이디 </label>
        <input
          type="text"
          name="id"
          required
          placeholder="아이디"
          className="border border-black"
        />
        <br></br>
        <label> 패스워드 </label>
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          className="border border-black"
        />
        <br></br>
        <button>로그인</button>
      </form>
    </>
  );
}
