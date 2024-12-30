import s from "./style.module.css";

export function Logo(propos) {
  return (
    <>
      <div className={s.container}>
        {propos.image && <img className={s.img} src={propos.image} alt="logo" />}
        <h1 className={s.title}>{propos.title}</h1>
      </div>
      <h2 className={s.subtitle}>{propos.subtitle}</h2>
    </>
  );
}
