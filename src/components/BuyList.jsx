
// import React, { useState, useEffect } from 'react';
// import OneSock from './OneSock';

// function List({ buy }) {
//   const [selectedIds, setSelectedIds] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [shareLink, setShareLink] = useState('');

//   const handleBuy = () => {
//     fetch('/buy', {
//       method: 'post',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ ids: selectedIds }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setShareLink(data.link);
//         setShowModal(true);
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleDelete = () => {
//     fetch(`/buy/${selectedIds[0]}`, { method: 'delete' }).then(() => {
//       window.location.href = '/buy';
//     });
//   };

//   return (
//     <div>
//       <h1>Корзина</h1>
//       <main>
//         <ul className="buy">
//           {buy.length > 0 &&
//             buy.map((el) => (
//               <OneSock
//                 key={el.id}
//                 el={el}
//                 selectedIds={selectedIds}
//                 setSelectedIds={setSelectedIds}
//               />
//             ))}
//           <li className="buy-link">
//             <button
//               className="buy-link"
//               type="button"
//               disabled={!selectedIds.length}
//               onClick={handleBuy}
//             >
//               Купить
//             </button>
//           </li>
//         </ul>
//         <div className="delete-container">
//           <button
//             className="buy-link"
//             type="button"
//             disabled={!selectedIds.length}
//             onClick={handleDelete}
//           >
//             Удалить
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default List;
