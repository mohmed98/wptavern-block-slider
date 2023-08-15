
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