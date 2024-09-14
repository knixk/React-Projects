import { useEffect, useState } from "react";
import Loading from "./components/Loading";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchAPI = await fetch(url);
      const res = await fetchAPI.json();
      setTours(res);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    // fetchData();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return <h2>Tours Starter</h2>;
};
export default App;
