import Container from "@/components/ui/container";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Container>
        <Link href="/">
          <p>Store</p>
        </Link>
        Navbar
      </Container>
    </div>
  );
};

export default Navbar;
