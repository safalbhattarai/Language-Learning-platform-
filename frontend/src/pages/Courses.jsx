import english from "../assets/english.jpg";
import japanese from "../assets/japanese.jpg";
import korean from "../assets/korean.jpg";

function Courses() {
  const courses = [
    {
      title: "English Mastery",
      image: english,
      level: "Beginner to Advanced"
    },
    {
      title: "Japanese JLPT",
      image: japanese,
      level: "N5 to N1"
    },
    {
      title: "Korean TOPIK",
      image: korean,
      level: "Beginner to Advanced"
    }
  ];

  return (
    <div className="container">
      <h1>Our Language Courses</h1>

      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} />

            <div className="course-body">
              <h3>{course.title}</h3>
              <p>{course.level}</p>

              <button>Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;