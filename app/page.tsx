import BlogList from "@/components/BlogList";
import ProfileSection from "@/components/ProfileSection";
import ProjectList from "@/components/ProjectList";
export default function Page() {

  return (

    <main className= "flex-col items-center min-h-screen py-20 gap-12  bg-gray-100">
      <ProfileSection/>
      <ProjectList/>
      <BlogList/>
    </main>
  );
}