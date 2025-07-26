import React from 'react';

const projects = [
  {
    title: 'Virtual Mouse',
    description: 'Gesture recognition using MediaPipe, OpenCV, PyAutoGUI & Pynput.',
  },
  {
    title: 'Cyber Bullying Detection',
    description: 'Classification of user comments using Logistic Regression, SVM, Naive Bayes.',
  },
  {
    title: 'AI‑Powered Personal Finance Manager',
    description: 'Built with Next.js, Supabase, Gemini OCR, Prisma. Achieved 94% accuracy.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="mt-2 text-gray-700">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
