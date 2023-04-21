import React, { useState, useEffect } from 'react';

function List({ arr1 }) {
  const [socks, setSocks] = useState(arr1);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [shareLink, setShareLink] = useState('');

  const deleteHandler = async (elem) => {
  
    const response = await fetch(`/favorites/${elem}`, { method: 'delete' });
    if (response.status === 200) {

      setSocks((prev) => prev.filter((sock) => sock.sock_id !== elem));
    }
  };
  const handleShareClick = (sockId) => {
    setSelectedId(sockId);
    fetch('/favorites', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: sockId }),
    })
      .then((res) => res.json())
      .then((data) => {
        setShareLink(data.link);
        setShowModal(true);
      })
      .catch((error) => console.log(error));
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

  return (
    <>
      <div
        style={{
          backgroundImage:
            'url(https://www.meme-arsenal.com/memes/05b5860399c7b64e72d6f76ef3c14731.jpg)',
          minHeight: '100vh',
          display: 'flex',
          flexWrap: 'wrap',
          padding: '20px',
        }}
      >
        {socks.map((elem) => {
          console.log(elem, '///////////////////////////');

          return (
            <div key={elem.sock_id} style={{ margin: '20px' }}>
              <div className="favorite-links">
                <button
                  class="btn btn-success"
                  type="button"
                  onClick={() => handleShareClick(elem.sock_id)}
                >
                  Поделиться
                </button>
                <button
                  class="btn btn-danger"
                  type="button"
                  onClick={() => deleteHandler(elem.sock_id)}
                >
                  Удалить
                </button>
              </div>

              <div
                style={{
                  position: 'relative',
                  width: '300px',
                  height: '300px',
                  backgroundColor: `${elem.color}`,
                  display: 'flex',
                }}
              >
                <img
                  style={{ position: 'absolute', width: '300px', height: '300px' }}
                  src={`${elem.pattern}`}
                />
                <img
                  style={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    marginLeft: '125px',
                    marginTop: '50px',
                  }}
                  src={`${elem.picture}`}
                />
                <img
                  style={{ position: 'absolute', width: '300px', height: '300px' }}
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
