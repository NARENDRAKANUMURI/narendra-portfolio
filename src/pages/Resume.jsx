function Resume() {
  return (
    <div className="p-10 text-center">

      <h1 className="text-3xl font-bold mb-6">My Resume</h1>

      <a
        href="/resume.pdf"
        download
        className="bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Download Resume
      </a>

    </div>
  );
}

export default Resume;
