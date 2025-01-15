import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DOCESI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-5">
        {/* Header Section */}
        <div className="bg-blue-600 text-center text-white font-bold text-2xl py-4">
          DOCESI ... Exams, Courses, Summaries & more
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* ICD Section */}
          <div className="border-r border-b border-gray-700 p-4">
            <p className="text-xl font-bold">ICD</p>
            <hr className="my-2 border-gray-700" />
            <p className="text-lg">CURSUS</p>
            <a
              href="https://bit.ly/3Mj81fX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary my-2"
            >
              Cursus
            </a>
            <br />
            <p className="text-lg mt-4">COURSES</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://bit.ly/3DJVL3J"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S1
              </a>
              <a
                href="https://bit.ly/2WKvqlB"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S2
              </a>
              <a
                href="https://bit.ly/3B0GpFH"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S3
              </a>
              <a
                href="https://bit.ly/3wVhqSS"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S4
              </a>
              <a
                href="https://bit.ly/3G0bzAE"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S5 GDC
              </a>
              <a
                href="https://bit.ly/3pid2fI"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S5 GDV
              </a>
            </div>
            <p className="text-lg mt-4">SUMMARIES</p>
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-primary" disabled>
                S1
              </button>
              <a
                href="https://bit.ly/3qF9pjN"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S2
              </a>
              <button className="btn btn-primary" disabled>
                S3
              </button>
              <button className="btn btn-primary" disabled>
                S4
              </button>
              <button className="btn btn-primary" disabled>
                S5
              </button>
            </div>
            <p className="text-lg mt-4">EXAMS & CONTROLES</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://bit.ly/3yJS0Yr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S1
              </a>
              <a
                href="https://bit.ly/3wRLSgA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S2
              </a>
              <a
                href="https://bit.ly/38GxpJL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S3
              </a>
              <a
                href="https://bit.ly/3wTJLZz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S4
              </a>
              <a
                href="https://bit.ly/3Bj7vtl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S5 GDV
              </a>
              <a
                href="https://bit.ly/3sVaGnh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S5 GDC
              </a>
            </div>
            <p className="text-lg mt-4">INTERNSHIP REPORTS</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://bit.ly/3yLRvwO"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                1st year's
              </a>
              <a
                href="https://bit.ly/3kQVIKX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                2nd year's
              </a>
              <a
                href="https://bit.ly/3h11yrU"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                3rd year's
              </a>
            </div>
          </div>

          {/* ICSD Section */}
          <div className="border-r border-b border-gray-700 p-4">
            <p className="text-xl font-bold">ICSD</p>
            <hr className="my-2 border-gray-700" />
            <p className="text-lg">COURSES</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://bit.ly/3DM2YRq"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S1
              </a>
              <a
                href="https://bit.ly/3D4fI6I"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S2
              </a>
              <a
                href="https://bit.ly/couresi-s3-icsd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S3
              </a>
              <a
                href="https://bit.ly/couresi-s4-icsd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S4
              </a>
              <a
                href="https://bit.ly/couresi-s5-icsd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S5
              </a>
            </div>
            <p className="text-lg mt-4">SUMMARIES</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://bit.ly/resumesi-s1-icsd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S1
              </a>
              <a
                href="https://bit.ly/resumesi-s2-icsd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S2
              </a>
              <button className="btn btn-primary" disabled>
                S3
              </button>
              <button className="btn btn-primary" disabled>
                S4
              </button>
              <button className="btn btn-primary" disabled>
                S5
              </button>
            </div>
            <p className="text-lg mt-4">EXAMS & CONTROLES</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://bit.ly/3iUJt2U"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S1
              </a>
              <a
                href="https://bit.ly/3D5ODQB"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S2
              </a>
              <button className="btn btn-primary" disabled>
                S3
              </button>
              <button className="btn btn-primary" disabled>
                S4
              </button>
              <button className="btn btn-primary" disabled>
                S5
              </button>
            </div>
          </div>

          {/* ISSIC Section */}
          <div className="border-b border-gray-700 p-4">
            <p className="text-xl font-bold">ISSIC</p>
            <hr className="my-2 border-gray-700" />
            <p className="text-lg">COURSES</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://bit.ly/couresi-s1-issic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S1
              </a>
              <a
                href="https://bit.ly/couresi-s2-issic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S2
              </a>
              <a
                href="https://bit.ly/couresi-s3-issic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S3
              </a>
              <a
                href="https://bit.ly/couresi-s4-issic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S4
              </a>
              <a
                href="https://bit.ly/couresi-s5-issic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                S5
              </a>
            </div>
            <p className="text-lg mt-4">EXAMS & CONTROLES</p>
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-primary" disabled>
                S1
              </button>
              <button className="btn btn-primary" disabled>
                S2
              </button>
              <button className="btn btn-primary" disabled>
                S3
              </button>
              <button className="btn btn-primary" disabled>
                S4
              </button>
              <button className="btn btn-primary" disabled>
                S5
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DOCESI;