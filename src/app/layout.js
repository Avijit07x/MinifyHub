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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
