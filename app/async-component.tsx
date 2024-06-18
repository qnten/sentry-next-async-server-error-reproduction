export async function AsyncComponent() {
	await new Promise((resolve) => setTimeout(resolve, 1000));

    throw new Error("This is an async error");
	return <div>Async Component</div>;
}
