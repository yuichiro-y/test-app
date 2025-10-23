import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
    <header className="flex justify-between p-5 font-bold bg-neutral-800 font-sans text-white">
      <div><Link to="/">Blog</Link></div>
      <div><Link to="/Contact">お問い合わせ</Link></div>
    </header>

    </>
  );
}