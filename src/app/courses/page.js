import CourseList from "./CourseList";

export const metadata = {
  title: "NextJS Course",
  description: "Explore our courses",
};
async function getCourses() {
  const res = await fetch("https://codepion.com/api/courses", {
    // cache: "force-cache", //SSG
    next: { revalidate: 60 }, //ISR
    // cache: "no-store", //SSR
  });
  if (!res.ok) throw new Error("Failed to fetch courses");
  return res.json();
}

export default async function CoursesPage() {
  const courses = await getCourses();
  return (
    <section className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-6"> 📚 Available Courses</h1>
      <CourseList courses={courses} />
    </section>
  );
}
