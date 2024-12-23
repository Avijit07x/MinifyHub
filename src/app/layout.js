import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "MinifyHub",
	description:
		"Optimize your code with MinifyHub! Minify HTML, CSS, and JavaScript to increase site speed, improve performance, and reduce page load times in one click.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<meta
				name="google-site-verification"
				content="GK-i-SrOMyVSmwQQuEQiEtKGzhiCA9f1AgZT-nB0TMw"
			/>
			<meta
				name="keywords"
				content="minify, html minifier, css minifier, javascript minifier, code minifier, html minify, css minify, javascript minify, code minify, avijit07x, avijit dey, avijitdey, avijit dey portfolio, space remover from code"
			/>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
