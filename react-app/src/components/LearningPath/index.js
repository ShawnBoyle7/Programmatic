import { useSelector} from 'react-redux'
import AspirationsDiv from "../AspirationsDiv"

function LearningPath() {
  const sessionUser = useSelector(state => state.session?.user)
  const aspirations = sessionUser?.aspirations.sort((a, b) => {
    return a.id - b.id
  });

    const aspirationComponents = aspirations?.map((aspiration) =>
        <div key={aspiration.id}>
          <AspirationsDiv aspiration={aspiration} />
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
