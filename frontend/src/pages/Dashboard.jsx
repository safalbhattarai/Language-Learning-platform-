function Dashboard() {
  return (
    <div style={{padding:"50px"}}>

      <h1>Welcome Back Safal 👋</h1>

      <div
        style={{
          display:"flex",
          gap:"20px",
          marginTop:"30px"
        }}
      >

        <div className="box">
          <h3>Courses Enrolled</h3>
          <p>3</p>
        </div>

        <div className="box">
          <h3>Lessons Completed</h3>
          <p>18</p>
        </div>

        <div className="box">
          <h3>Progress</h3>
          <p>65%</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;