import { useState } from "react";

export const Contact = ()=> { 

  // フォームの入力値を保持
  const [values ,setValues] = useState({
    name: "",
    email: "",
    body: ""
  });

  // 入力欄のエラーメッセージを保持
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    body: ""
  });

  // 送信ボタン押下時の処理
  const handleSubmit = (e) => {
    e.preventDefault();
    // エラー内容の初期化
    const newErrors = {name: "", email: "", body: ""};

    // 未入力の場合エラーメッセージをセット
    if (!values.name.trim()) newErrors.name = "お名前は必須です。";
    if (!values.email.trim()) newErrors.email = "メールアドレスは必須です。";
    if (!values.body.trim()) newErrors.body = "本文は必須です。";

    setErrors(newErrors); // state更新（赤字表示される）

    // ALL OKで送信
    const hasError = Object.values(newErrors).some((v)=>v);
    if (hasError) return;

    alert("送信しました。")

  }

  // 入力中に state を更新する処理
  const handleChange = (e) => {
    const { name, value } = e.target;

    // 更新
    setValues((prev) => ({ ...prev, [name]: value }));
    // 入力されるとエラーを消す
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // クリアボタン
  const handleClear = () =>{
    setValues({name:"",email:"",body:""});
    setErrors({name:"",email:"",body:""});
  }

  return (
  <>
    <main className="max-w-2xl mx-auto my-10 px-2 text-left">
      <h1 className="font-bold text-2xl mb-5">お問い合わせフォーム</h1>
      <form noValidate onSubmit={handleSubmit}>

        {/* お名前 */}
        <div className="mb-5">
          <div className="items-center flex justify-between">
            <label className="w-[240px]" htmlFor="name">お名前</label>
            <div className="w-full">
              <input id="name" name="name" type="text" 
                className={`p-3 w-full rounded-lg border border-gray-300 ${errors.name ? "border-red-400" : "border-gray-300"}`}
                value={values.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
              />
              {errors.name && (
              <p id="name-error" className="text-sm text-red-500 flex ">
                {errors.name}
              </p>
              )}
            </div>
          </div>

        </div>

        {/* メールアドレス */}
        <div className="mb-5">
          <div className="items-center flex justify-between">
            <label className="w-[240px]" htmlFor="email">メールアドレス</label>
            <div className="w-full">
              <input 
                id="email"
                name="email"
                type="email"
                className={`p-3 w-full rounded-lg border border-gray-300 ${errors.email ? "border-red-400" : "border-gray-300"}`}
                value={values.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

        </div>

        {/* 本文 */}
        <div className="mb-5">
          <div className="items-center flex justify-between">
            <label className="w-[240px]" htmlFor="body">本文</label>
            <div className="w-full">
              <textarea 
                id="body"
                name="body"
                type="text"
                className={`p-3 w-full rounded-lg border border-gray-300 ${errors.body ? "border-red-400" : "border-gray-300"}`}
                value={values.body}
                onChange={handleChange}
                aria-invalid={!!errors.body}
                aria-describedby="body-error"
              />

              {errors.body && (
                <p id="body-error" className="text-sm text-red-500">
                  {errors.body}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ボタン */}
        <div className="flex justify-center mt-10">
          <button 
            type="submit"
            className="mr-3 py-2 px-3 font-bold rounded-lg bg-black text-gray-50 border border-black"
          >送信</button>
          <button 
            type="button"
            className="py-2 px-3 font-bold rounded-lg bg-gray-300 text-black border "
            onClick={handleClear}
          >クリア</button>
        </div>
      </form>

    </main>
  </>
); 
}