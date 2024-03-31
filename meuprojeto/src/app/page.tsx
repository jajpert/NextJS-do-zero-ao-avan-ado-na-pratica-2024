import { OwnerRepo } from "@/components/OwnerRepo";

interface DataProps {
	id: number;
	name: string;
	full_name: string;
	owner: {
		login: string;
		id: number;
		avatar_url: string;
		url: string;
	};
}

async function delayFetch(url: string, delay: number) {
	await new Promise((resolve) => setTimeout(resolve, delay));
	const response = await fetch(url, { next: {revalidate: 60} });
	return response.json();
}

/*
async function getData() {
	// https://api.github.com/users/jajpert/repos
	const response = await fetch("https://api.github.com/users/jajpert/repos");

	return response.json();
}
*/

async function getData() {
	const data = await delayFetch(
		"https://api.github.com/users/jajpert/repos",
		2500
	);
	return data;
}

export default async function Home() {
	const data: DataProps[] = await getData();

	return (
		<main>
			<h1>Página home</h1>
			<br />

			<h2>Meus repositórios</h2>
			{data.map((item) => (
				<div key={item.id}>
					<strong>Repositório: </strong>
					<a>{item.name}</a>
					<br />
					<OwnerRepo
						avatar_url={item.owner.avatar_url}
						name={item.owner.login}
					/>
					<br />
				</div>
			))}
		</main>
	);
}
