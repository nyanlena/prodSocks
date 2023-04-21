import React, { useState, useEffect } from 'react';

function List({ arr2 }) {
  console.log(arr2, 'sdfsdfdddddddddddddddddd');
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
      <div
        style={{
          backgroundImage:
            'url(https://www.meme-arsenal.com/memes/05b5860399c7b64e72d6f76ef3c14731.jpg)',
          minHeight: '100vh',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {socks.map((elem) => {
          console.log(elem, '///////////////////////////');

          return (
            <div key={elem.sock_id} style={{ margin: '20px' }}>
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
