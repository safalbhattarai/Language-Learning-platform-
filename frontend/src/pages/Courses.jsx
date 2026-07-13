function Courses() {
  const courses = [
    {
      title: "English Mastery",
      level: "Beginner to Advanced"
    },
    {
      title: "Japanese JLPT",
      level: "N5 to N1"
    },
    {
      title: "Korean TOPIK",
      level: "Beginner to Advanced"
    }
  ];

  return (
    <div style={{ padding: "60px" }}>
      <h1>Our Courses</h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "30px"
        }}
      >
        {courses.map((course, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,.1)"
            }}
          >
            <h3>{course.title}</h3>
            <p>{course.level}</p>
            <button>View Course</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;