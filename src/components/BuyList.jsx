import React, { useState, useEffect } from 'react';

function List({ arr2 }) {
  console.log(arr2,'sdfsdfdddddddddddddddddd');
  const [socks, setSocks] = useState(arr2);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [shareLink, setShareLink] = useState('');

  const deleteHandler = async (elem) => {
    const response = await fetch(`/buy/${elem}`, { method: 'delete' });
    if (response.status === 200) {
      setSocks((prev) => prev.filter((sock) => sock.sock_id !== elem));
    }
  };
  useEffect(() => {
    if (selectedId) {
      console.log(selectedId);
      fetch('/buy', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedId }),
      })
        .then((res) => res.json())
        .then((data) => {
          setShareLink(data.link);
          setShowModal(true);
        })
        .catch((error) => console.log(error));
    }
  }, [selectedId]);

  const handleShareClick = (sockId) => {
    setSelectedId(sockId);
  };

  return (
    <>
      <div>
        {socks.map((elem) => {
          console.log(elem, '///////////////////////////');

          return (
            <div key={elem.sock_id}>
              <div className="favorite-links">
                <button
                  className="favorite-link"
                  type="button"
                  onClick={() => handleShareClick(elem.sock_id)}
                >
                  Купить
                </button>
                <button
                  className="favorite-link"
                  type="button"
                  onClick={() => deleteHandler(elem.sock_id)}
                >
                  Удалить
                </button>
              </div>

              <div
                style={{
                  position: 'relative',
                  width: '400px',
                  height: '400px',
                  backgroundColor: `${elem.color}`,
                }}
              >
                <img
                  style={{ position: 'absolute', width: '400px', height: '400px' }}
                  src={`${elem.pattern}`}
                />
                <img
                  style={{ position: 'absolute', width: '400px', height: '400px' }}
                  src={`${elem.picture}`}
                />
                <img
                  style={{ position: 'absolute', width: '400px', height: '400px' }}
                  src={`./../images/originSock.png`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;

// import React, { useState, useEffect } from 'react';
// import OneSock from './OneSock';

// function List({ arr2 }) {
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
//           {arr2.length > 0 &&
//             arr2.map((el) => (
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
