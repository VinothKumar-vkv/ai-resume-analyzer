// routes/resumeIndex.tsx
import { redirect } from "react-router";

export async function loader() {
    return redirect("/");
}

export default function ResumeIndex() {
    return null; // never rendered because of redirect
}
