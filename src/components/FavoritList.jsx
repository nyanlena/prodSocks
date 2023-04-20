import React, { useState, useEffect } from 'react';

function List({ arr1 }) {
  const [socks, setSocks] = useState(arr1);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [shareLink, setShareLink] = useState('');

  const deleteHandler = async (elem) => {
    console.log(elem, '[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[');
    const response = await fetch(`/favorites/${elem}`, { method: 'delete' });
    if (response.status === 200) {
      console.log(socks);
      setSocks((prev) => prev.filter((sock) => sock.sock_id !== elem));
    }
  };
  useEffect(() => {
    if (selectedId) {
      console.log(selectedId);
      fetch('/favorites', {
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
                  Поделиться
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
