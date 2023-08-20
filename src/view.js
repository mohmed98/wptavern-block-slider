import SliderComponent from "./components/SliderComponent";

async function fetchData() {
  try {
    const response = await fetch('https://wptavern.com/wp-json/wp/v2/posts/');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();

export function App() {
  const [posts, setPosts] = React.useState([]);
  // fetch data from API and display it as list
  React.useEffect(() => {
    fetch('https://wptavern.com/wp-json/wp/v2/posts/')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  // display list of posts as slidshow 
  return (
    <div>
      <SliderComponent posts={posts} />
    </div>
  );

}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.querySelector('#root'),
  )
})