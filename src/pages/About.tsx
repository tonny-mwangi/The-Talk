
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 pb-16">
        {/* Our Story Section - two columns, sharp corners, image first on mobile */}
        <section className="flex flex-col-reverse md:flex-row bg-white mb-10 mt-8">
          {/* Text Section */}
          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            <div>
              <h2 className="text-2xl font-playfair font-semibold text-black mb-4">Our Story</h2>
              <p className="text-gray-600 font-inter leading-relaxed">
                Welcome to The Talk, your ultimate destination for captivating blogs, fascinating ideas, and stories drawn from all walks of life. 
                Our passionate team of writers and creators is dedicated to exploring and sharing experiences that spark curiosity and inspire conversation.
              </p>
              <p className="text-gray-600 font-inter leading-relaxed mt-4">
                Whether you seek inspiration, in-depth insights, or a fresh perspective, The Talk is your home for intriguing content—from lifestyle and technology, to travel, art, and beyond. 
                Join us and discover the stories that make every day extraordinary.
              </p>
            </div>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 flex items-center justify-center p-0">
            <img
              src="https://images.unsplash.com/photo-1749539546214-ab2e69e23ced?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Community of bloggers"
              className="w-full object-cover h-full min-h-[320px] md:min-h-[400px] max-h-[500px] md:max-w-none"
              style={{ borderRadius: 0 }}
            />
          </div>
        </section>
      </main>
      <Separator className="mb-0" />
      <footer className="text-center text-sm text-black/70 py-8 bg-white">
        &copy; {new Date().getFullYear()} The Talk.
      </footer>
    </div>
  );
};

export default About;
