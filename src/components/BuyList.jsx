import React, { useState, useEffect } from 'react';
import axios from 'axios';

function List({ arr2 }) {

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

  const handleShareClick = async(sockId) => {
    const res = await axios.post('buy/send',socks);
    console.log(res)
    if (res.status === 200) {
      window.location = '/';
    }
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
        

          return (
            <div key={elem.sock_id} style={{ margin: '20px' }}>
              <div className="favorite-links">
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={() => handleShareClick(elem.sock_id)}
                >
                  Купить
                </button>
                <button
                  className="btn btn-danger"
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
                  display:'flex'
                }}
              >
                <img
                  style={{ position: 'absolute', width: '300px', height: '300px' }}
                  src={`${elem.pattern}`}
                />
                <img
                  style={{ position: 'absolute', width: '60px', height: '60px', marginLeft:'125px', marginTop:'50px' }}
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
