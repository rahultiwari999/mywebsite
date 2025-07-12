import React from 'react';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}

      <nav className="fixed w-full bg-white shadow z-10">
  <div className="w-full px-2 py-2 flex justify-between items-center">
    <div className="flex items-center space-x-4">
  {/* Logo 1 */}
  <img src="/logo.png" alt="Logo 1" className="h-25 w-20 rounded-full" />

  {/* Logo 2 */}
  <img src="/logo2.png" alt="Logo 2" className="h-10 w-50 " />

  {/* Brand Name */}
  <span className="text-2xl font-bold text-indigo-700 ml-4"></span>
</div>

    <div className="space-x-5 text-sm md:text-base font-medium">
      <a href="#home" className="hover:text-indigo-600">Home</a>
      <a href="#about" className="hover:text-indigo-600">About</a>
      <a href="#register" className="hover:text-indigo-600">Registration</a>
      <a href="#contact" className="hover:text-indigo-600">Contact Us</a>
    </div>
  </div>
</nav>



      {/* Home Section */}
      <section id="home" className="min-h-screen bg-cover bg-center bg-no-repeat py-20 px-6 text-white" style={{ backgroundImage: 'url(/background.jpg)' }}>
  <div className="max-w-4xl mx-auto bg-black bg-opacity-60 p-8 rounded-2xl shadow-lg">
    <h1 className="text-4xl font-bold mb-6 text-center">Greetings Future Innovators!</h1>
    <p className="text-lg mb-4">
      We hope this message finds you in great spirits, ready to embark on another exciting chapter of your academic journey.
    </p>
    <blockquote className="italic text-center text-yellow-300 mb-6">
      “The future belongs to those who believe in the beauty of their dreams.” – Eleanor Roosevelt
    </blockquote>
    <p className="text-lg mb-4">
      With this inspiring thought in mind, we are delighted to announce that registrations for the academic year <strong>2025-26</strong> at the <strong>UPES Cloud Security Alliance (CSA)</strong> are now officially open!
    </p>
    <p className="text-lg mb-4">
      At UPES-CSA, we believe that every dream fueled by passion and purpose holds the potential to shape a remarkable future. Our chapter is dedicated to nurturing those dreams by providing a platform where innovation, ambition, and collaboration come together to empower students in the ever-evolving landscape of cloud security.
    </p>
    <p className="text-lg mb-4">
      We are incredibly proud to highlight that UPES CSA holds the distinction of being the <strong>first student chapter of the international Cloud Security Alliance research organization in Uttarakhand</strong>. This unique position places us at the forefront of a global movement, empowering young, enthusiastic minds to actively shape and promote the essential best practices for a secure cloud computing future.
    </p>
    <h2 className="text-2xl font-semibold mt-8 mb-4 text-yellow-400">Why is UPES CSA Your Next Big Opportunity?</h2>
    <p className="text-lg mb-4">
      Your time at UPES CSA will be a transformative experience, designed to accelerate your personal and professional growth. We lead the charge through strategic partnerships with industry giants like <strong>Azure Developers Community, Dehradun</strong> and <strong>Give My Certificate</strong>.
    </p>
    <p className="text-lg mb-4">
      These collaborations offer exclusive insights, networking opportunities, and a competitive edge. Certificates provided hold a credible <strong>15-year validation</strong>—a major boost to your professional profile.
    </p>
    <p className="text-lg mb-4">
      Elevate your technical prowess through tailored <strong>workshops, seminars, and webinars</strong>—from resume polishing to deep dives into advanced cloud security. High performers get <strong>priority access to internships</strong> through our strong network.
    </p>
    <p className="text-lg mb-4">
      Our flagship events include:
    </p>
    <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
      <li><strong>Cloud 4 Career:</strong> Google’s first visit to our campus, promoting cloud computing as a profession.</li>
      <li><strong>Azure Cloudscape:</strong> Hands-on Azure learning to empower future tech professionals.</li>
      <li><strong>Hackathon 4.0:</strong> Supported by Azure Developers Community with winning teams receiving internships.</li>
    </ul>
    <p className="text-lg mb-4">
      Whether you're refining soft skills or mastering cutting-edge tech, UPES CSA offers a rich, holistic growth environment. Your uniqueness is our strength.
    </p>
    <h2 className="text-2xl font-semibold mt-8 mb-4 text-yellow-400">Become an Integral Part of Our Visionary Team:</h2>
    <p className="text-lg mb-4">
      Join one of our dynamic teams based on your interests and strengths:
    </p>
    <ul className="list-disc list-inside ml-4 mb-6 space-y-1">
      <li>Editorial Team</li>
      <li>Events Team</li>
      <li>Technical Team</li>
      <li>Design and VFX Team</li>
      <li>Public Relations and Sponsorship Team</li>
      <li>Social Media Team</li>
      <li>Photography Team</li>
      <li>Registration Team</li>
      <li>Logistics Team</li>
    </ul>
    <p className="text-lg mb-6">
      This is your moment to join a legacy. Be part of a tech-savvy, innovation-driven community that prepares you for success.
    </p>
    <div className="text-center">
      <a href="https://upescsa.in/register" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition duration-300">
        Secure Your Spot for 2025–26
      </a>
    </div>
  </div>
</section>


      {/* About Section */}
    <section id="about" className="relative min-h-screen py-20 px-6 text-white">
  {/* Background Layer */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-gray-900 opacity-60 z-0"></div>
  <div className="absolute inset-0 bg-cover bg-center z-[-1]" style={{ backgroundImage: "url('/about-bg.png')" }}></div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto bg-black bg-opacity-60 p-8 rounded-2xl shadow-lg">
    <div className="text-center mb-10">
      <h2 className="text-5xl font-extrabold text-yellow-400 tracking-wide mb-2">About Us</h2>
      <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
    </div>

    <h3 className="text-4xl font-bold text-center mb-6">Step into the Future with CSA</h3>
    <p className="text-lg mb-4">
      Welcome to a high-energy committee where <strong>innovation meets intelligence</strong>! The <strong>Cloud Security Alliance (CSA)</strong> invites all enthusiasts, leaders, innovators, and creative thinkers to harness their power and solve real-world challenges. This is your arena to experiment, learn, and shine. From smart campuses to social good — if you can imagine it, you can build it.
    </p>
    <p className="text-lg mb-4">
      CSA is the <strong>premier global community</strong> for computing professionals, students, and researchers...
    </p>
    <blockquote className="italic text-center text-yellow-300 my-6">
      “The future belongs to those who believe in the beauty of their dreams.” – Eleanor Roosevelt
    </blockquote>
    <p className="text-lg mb-4">
      We are incredibly proud to highlight that <strong>UPES CSA</strong> holds the distinction...
    </p>
    <p className="text-lg">
      <strong>This is your platform to learn, lead, and level up. 💻🚀</strong>
    </p>
  </div>
</section>





      {/* Registration Section */}
      <section id="register" className="min-h-screen flex items-center justify-center bg-white px-4 py-10"style={{ backgroundImage: 'url(/regestration.jpg)' }}>
        <div className="max-w-xl text-center">
         <h2 className="text-4xl font-bold text-yellow-400 mb-6">Registration</h2>
    <p className="text-lg mb-6 text-white">Click below to register through our official Google Form.</p>

    {/* Replace the href with your Google Form link */}
    <a
      href="https://forms.gle/AqQSZwK5eBbw9qxN7"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold transition duration-300"
    >
      Fill the Form
    </a>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-200 px-4 py-10"style={{ backgroundImage: 'url(/contact.jpg' }}>
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-white text-lg mb-2">E-mail: <a href="mailto:upescsa123@gmail.com" className="text-white">csi1217@gmail.com</a></p>
          <p className="text-white text-lg">Contact: 1234567890</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-800 text-white py-4 text-center text-sm">
        Copyright © <a href="https://www.upescsa.com" className="underline">www.upescsahackathon.com</a>. All rights reserved!
      </footer>
    </div>
  );
}

export default App;
