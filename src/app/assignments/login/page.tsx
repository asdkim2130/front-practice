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
    <div>
      <h1>로그인페이지</h1>
      <br></br>
      <form action={handleSubmit}>
        <label>아이디 </label>
        <input type="text" name="id" className="border border-black" />
        <br></br>
        <label> 패스워드 </label>
        <input
          type="password"
          name="password"
          className="border border-black"
        />
        <br></br>
        <button>로그인</button>
      </form>
    </div>
  );
}
