export function ComponentWithError() {
    throw new Error("This is an error in a component");
	return <div>Async Component</div>;
}
