import { getImageUrl } from './utils.jsx'

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{
//           name:'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//   );
// }

// function Avatar({ person, size }) {
//   return (
//     <img
//       className="Avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }

export default function Profile() {
  return (
    <img 
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherin Johnson"
    />
  );
}