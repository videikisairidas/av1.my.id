// const Card = ({ data }) => {
//   const { title, status, description, stack, live, dev, login } = data;

//   return (
//   <div className="card">
//     <h3>{title}</h3>
//     <h6>{status}</h6>

//     <div class="progress-bar">
//         <div class="progress-fill" style="width: 100%"></div>
//     </div>
//     <div>
//       {stack.map((tech, index) => (
//         <li key={index}>{tech}</li>
//       ))}
//     </div>

//     {info && Object.keys(info).length > 0 && (
//       <ul className="info-list">
//         {Object.entries(info).map(([label, value], index) => (
//           <li key={index}>
//             <strong>{label}:</strong>{' '}
//             {value ? (
//               value.startsWith('http') ? (
//                 <a href={value} target="_blank" rel="noopener noreferrer">Link</a>
//               ) : (
//                 value
//               )
//             ) : (
//               <em>N/A</em>
//             )}
//           </li>
//         ))}
//       </ul>
//     )}
//     <p>{description}</p>
    

//   </div>
//   );
// };

// export default Card;