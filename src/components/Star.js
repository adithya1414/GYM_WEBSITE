
// import React, { useState } from "react";
// import SearchBar from "./SearchBar";
// import CelebrityDetails from "./CelebrityDetails";
// import celebrityData from "./celebrities.json";
//  // Import your CSS for global styles
 


// function Star() {
  

  
//   const [selectedCelebrity, setSelectedCelebrity] = useState(null);

//   const handleSearch = (searchTerm) => {
//     const celebrity = celebrityData.find(
//       (celeb) => celeb.name.toLowerCase() === searchTerm.toLowerCase()
//     );

//     if (celebrity) {
//       setSelectedCelebrity(celebrity);
//     } else {
//       setSelectedCelebrity(null);
//     }
//   }

//   return (
//     <div className="star">
      
//       <div className="search-container">
//         <SearchBar onSearch={handleSearch} />
//       </div>
//       <div className="results-container">
//         {selectedCelebrity ? (
//           <CelebrityDetails celebrity={selectedCelebrity} />
//         ) : (
//           <p className="no-results">No results found</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Star;




// import React, { useState } from 'react';

// // Static celebrity data (you can replace it with an API call)
// const celebrities = [
//   {
//     name: "Celebrity 1",
//     diet: "Diet information for Celebrity 1",
//     exercise: "Exercise information for Celebrity 1",
//   },
//   {
//     name: "Celebrity 2",
//     diet: "Diet information for Celebrity 2",
//     exercise: "Exercise information for Celebrity 2",
//   },
//   // Add more celebrity data
// ];

// const centerContent = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   minHeight: "100vh",
// };

// function StarComponent() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = () => {
//     const results = celebrities.filter(celebrity =>
//       celebrity.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//   };

//   return (
//     <div style={centerContent}>
//       <h1>Celebrity Search App</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Search celebrity name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {searchResults.map((celebrity, index) => (
//         <div key={index} style={centerContent}>
//           <h2>{celebrity.name}</h2>
//           <p><strong>Diet:</strong> {celebrity.diet}</p>
//           <p><strong>Exercise:</strong> {celebrity.exercise}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default StarComponent;





// import React, { useState } from 'react';
// import celebritiesData from './celebrities.json';

// const centerContent = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   minHeight: "100vh",
//   marginTop: "6px",
  
// };
// const excercies={
//   position: "absolute", 
//   left: "552px", 

// };

// const diet={
//   position: "absolute",
//     bottom: "-8px",
// };



// function StarComponent() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResult, setSearchResult] = useState(null);

//   const handleSearch = () => {
//     const foundCelebrity = celebritiesData.find(celebrity =>
//       celebrity.name.toLowerCase() === searchTerm.toLowerCase()
//     );

//     if (foundCelebrity) {
//       setSearchResult(foundCelebrity);
//     } else {
//       setSearchResult(null); // Clear the result if not found
//     }
//   };

//   return (
//     <div style={centerContent}>
//       <h1> Search Here</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Search celebrity name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {searchResult && (
//         <div style={centerContent}>
//           <h2>{searchResult.name}</h2>
//           <div style={excercies}>
//             <h3>Exercises</h3>
//             <ul>
//               {searchResult.exercises.map((exercise, i) => (
//                 <li key={i}>{exercise}</li>
//               ))}
//             </ul>
//           </div>
//           <div style={diet}>
//             <h3>Diet Plan</h3>
//             <ul>
//             {searchResult.dietPlan.map((diet, i) => (
//               <li key={i}>{diet}</li>
// ))}

//             </ul>
//           </div>
//         </div>
//       )}
//       {searchResult === null && (
//         <div style={centerContent}>
//           <p>Celebrity not found</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StarComponent;


// import React, { useState } from 'react';
// import celebritiesData from './celebrities.json';

// const centerContent = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   minHeight: "100vh",
// };

// function StarComponent() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResult, setSearchResult] = useState(null);

//   const handleSearch = () => {
//     const foundCelebrity = celebritiesData.find(celebrity =>
//       celebrity.name.toLowerCase() === searchTerm.toLowerCase()
//     );

//     if (foundCelebrity) {
//       setSearchResult(foundCelebrity);
//     } else {
//       setSearchResult(null); // Clear the result if not found
//     }
//   };

//   return (
//     <div style={centerContent}>
//       <h1> Search Here</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Search celebrity name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {searchResult ? (
//         <div style={centerContent}>
//           <h2>{searchResult.name.toUpperCase()}</h2>
//           <div>
//             <h3>Exercises</h3>
//             <ul>
//               {searchResult.exercises.map((exercise, i) => (
//                 <li key={i}>{exercise}</li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h3>Diet Plan</h3>
//             <ul>
//             {searchResult.exercises.map((exercise, i) => (
//                 <li key={i}>{exercise}</li>
//              ))}
              
//             </ul>
//           </div>
//         </div>
//       ) : (
//         <div style={centerContent}>
//           <p>Celebrity not found</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StarComponent;

import React, { useState } from 'react';
import celebritiesData from './celebrities.json';

const centerContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
};

function StarComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const foundCelebrity = celebritiesData.find(celebrity =>
      celebrity.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundCelebrity) {
      setSearchResult(foundCelebrity);
    } else {
      setSearchResult(null); // Clear the result if not found
    }
  };

  return (
    <div style={centerContent}>
      <h1>Celebrity Search App</h1>
      <div>
        <input
          type="text"
          placeholder="Search celebrity name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResult && (
        <div style={centerContent}>
          {searchResult.name && (
            <h2>{searchResult.name.toUpperCase()}</h2>
          )}
          <div>
            <h3>Exercises</h3>
            <ul>
            {searchResult.exercises.map((exercise, i) => (
  <li key={i}>{exercise}</li>
))}

            </ul>
          </div>
          <div>
            <h3>Diet Plan</h3>
            <ul>
              {searchResult.dietPlan.map((diet, i) => (
  <li key={i}>{diet}</li>
))}
            </ul>
          </div>
        </div>
      )}
      {searchResult === null && (
        <div style={centerContent}>
          <p>Celebrity not found</p>
        </div>
      )}
    </div>
  );
}

export default StarComponent;

