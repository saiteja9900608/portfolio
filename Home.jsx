import React from 'react';
import profile from '../assets/profile.jpg';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100">
      <div className="text-center">
        <img src={profile} alt="SaiTeja Vemula" className="w-40 h-40 rounded-full mx-auto" />
        <h1 className="text-4xl font-bold mt-4">SaiTeja Vemula</h1>
        <p className="mt-2 text-lg">Software Engineer | DevOps Engineer | Cloud Enthusiast</p>
        <div className="mt-4 space-x-4">
          <a href="https://github.com/saiteja9900608" className="text-blue-600 underline">GitHub</a>
          <a href="https://www.linkedin.com/in/saiteja-vemula-116638207/" className="text-blue-600 underline">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};
export default Home;
