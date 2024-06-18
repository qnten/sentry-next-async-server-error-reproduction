export const dynamic = "force-dynamic";

export default function PageWithError() {
	throw new Error("This is a page level error");
}
