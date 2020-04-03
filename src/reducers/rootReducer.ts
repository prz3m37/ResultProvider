import Python from "../python.png";
import Cpp from "../beinstein.png";

const initState = {
  posts: [
    {
      id: "1",
      img: Cpp,
      title: "Bose Einstein Condensate",
      body:
        "C++ project, where I am presenting solutions of Gross-Pitaevskii equations for polaritons and excitons in Bose Einstein Condansate"
    },
    {
      id: "2",
      img: Python,
      title: "Tight Binding",
      body:
        "Python project, which was an subject of my Master Diploma at Faculty of Physics. This numerical project is based on Tight Binding method for evaluating electronic band structure for non-periodical structures"
    }
  ]
};

const rootReducer = (state = initState, action: any) => {
  console.log(action);
  return state;
};

export default rootReducer;
