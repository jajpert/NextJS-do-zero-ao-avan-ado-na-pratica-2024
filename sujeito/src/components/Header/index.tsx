import styles from "./styles.module.scss";
import logo from "@/../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
	const router = useRouter();
	const { pathname } = router;

	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<Link href="/" legacyBehavior>
					<a>
						<Image src={logo} alt="Sujeito Programador Logo"></Image>
					</a>
				</Link>

				<nav className={styles.navNav}>
					<Link href="/">
						<p className={pathname === "/" ? "active" : ""}>Home</p>
					</Link>
					<Link href="/posts">
						<p className={pathname === "/posts" ? "active" : ""}>Conteúdos</p>
					</Link>
					<Link href="/sobre">
						<p className={pathname === "/sobre" ? "active" : ""}>Quem somos?</p>
					</Link>
				</nav>

				<a
					className={styles.readyButton}
					type="button"
					href="https://sujeitoprogramador.com"
				>
					COMEÇAR
				</a>
			</div>
		</header>
	);
}
