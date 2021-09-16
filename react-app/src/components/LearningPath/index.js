import { useSelector} from 'react-redux'
import AspirationsDiv from "../AspirationDiv"

function LearningPath() {
  const sessionUser = useSelector(state => state.session?.user)
  const aspirationsArr = sessionUser?.aspirations.sort((a, b) => {
    return a.id - b.id
  });

  const getCourseIds = () => {
    for(let i = 0; i < aspirationsArr.length; i++) {
      let aspiration = aspirationsArr[i];
      let courseIdArr = [];
        //check if the course id is already in arr
      if(!courseIdArr.includes(aspiration.courseId)){
        courseIdArr.push(aspiration.courseId)
      }
    }
    return courseIdArr;
  }

  let aspByCourseArr = []
  courseIdArr.forEach(courseId => {
    let allAspInCourse = aspirationsArr.filter(asp => asp.couseId === courseId)
    aspByCourseArr.push(allAspInCourse)
  });



  //check aspiration.courseId
    //if haven't encountered, create a new array/div
    //else add to array/div already created

    const aspirationComponents = aspirationsArr?.map((aspiration) =>
        <div key={aspiration.id}>
          {/* <AspirationsDiv aspiration={aspiration} /> */}
          <div>{separateByCourse}</div>
        </div>
    );

  return (
    <>
      <h1>Learning Path: </h1>
      <div>{aspirationComponents}</div>

    </>
  );
}

export default LearningPath;
