"use client";

export default function CourseList({ courses }) {
  return (
    <ul className="space-y-4">
      {courses.map((course) => (
        <li
          key={course.id}
          className="border rounded-lg p-4 hover:bg-gray-50 transition"
        >
          <h2 className="text-lg font-medium">{course.title}</h2>
          <p className="text-gray-600 text-sm mt-1">{course.description}</p>
        </li>
      ))}
    </ul>
  );
}
