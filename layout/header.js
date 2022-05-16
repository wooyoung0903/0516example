// export default function Header() {
//   return <header>헤더입니다.</header>;
// }

const Header = () => {
  return (
    <header
      style={{
        background: "yellow",
        color: "red",
        fontSize: 20,
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      헤더 컴포넌트
    </header>
  );
};

export default Header;
