import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className="container">
      <section className="w-auto md:w-5/6 bg-beige mx-auto">
        <img src="./img/icons/headerLogo.webp" alt="logo" className="mx-auto h-20" />
      </section>
    </div>
  );
}
