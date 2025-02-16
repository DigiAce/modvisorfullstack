import { useState } from "react";
import axios from "axios";

const Discription = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    // subject: "",
    resume: null,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleForm = () => setShowForm(!showForm);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("number", formData.number);
    formDataToSend.append("email", formData.email);
    // formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);
    if (formData.resume) {
      formDataToSend.append("resume", formData.resume);
    }

    try {
      setLoading(true);
      setError(null);

      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(
        "https://modvisorfullstack-seven.vercel.app/", // Updated endpoint
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Handle success`
      alert("Your application has been submitted successfully!");
      setFormData({
        name: "",
        number: "",
        email: "",
        // subject: "",
        resume: null,
        message: "",
      });
    } catch (err) {
      // Handle error
      setError("There was an issue with your submission. Please try again.");
      console.error("Error during form submission:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-16 mb-12 mt-12 sm:mb-16">
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
      >
        Join <span className="font-semibold">Today</span>
      </a>
      <h1 className="mx-auto max-w-4xl font-display text-3xl font-bold tracking-normal text-slate-900 sm:text-4xl">
        Are you a driven, ambitious financial modeller with an MBA from a
        reputed institute?
      </h1>
      <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
        Do you thrive in dynamic environments with flexible hours? At ModVisor,
        we’re seeking individuals with strong Excel skills (bonus points for
        VBA/Macros knowledge!) who are motivated, determined, and ready to make
        an impact. If this sounds like you, let’s shape the future of financial
        modelling together!
      </p>
      <div>
        <p className="text-slate-700 mb-6">
          Send us your CV and a cover letter that showcases what makes you the
          perfect match for us.
        </p>
        <p className="text-slate-700 mb-4">
          Share your CV to this email:{" "}
          <span className="font-semibold text-blue-500">
            devasheesh.pant@modvisor
            <span className="break-on-small-device">
              <br />
            </span>
            businessconsultants.com
          </span>
        </p>
      </div>
      <button
        className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
        onClick={toggleForm}
      >
        Join Our Team →
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={toggleForm}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Join Our Team
            </h2>

            {error && <div className="text-red-500 mb-4">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone No
                </label>
                <input
                  type="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              {/* <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter subject"
                />
              </div> */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Resume (PDF/Word only)
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept=".pdf, .doc, .docx"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Message (optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Discription;
