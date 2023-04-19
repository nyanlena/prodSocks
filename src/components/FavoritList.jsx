import React, { useState, useEffect } from 'react';

function List({ favorite }) {
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [shareLink, setShareLink] = useState('');

  const deleteHandler = (favor) => {
    fetch(`/favorites/${favor.id}`, { method: 'delete' }).then(() => {
      window.location.href = '/favorites';
    });
  };

  useEffect(() => {
    if (selectedId) {
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
    <div>
      <h1>Избранное</h1>
      <main>
        <ul className="favorite">
          {favorite.length &&
            favorite.map((el) => (
              <li key={el.id} className="favorite">
                <span className="user">{el.user_id}</span>
                <span className="sock">{el.sock_id}</span>
                <ul className="favSocks-lists">
                  <li className="favorite-link">
                    <button
                      className="favorite-link"
                      type="button"
                      onClick={() => setSelectedId(el.id)}
                    >
                      Поделиться
                    </button>
                    <button
                      className="favorite-link"
                      type="button"
                      onClick={() => deleteHandler(el)}
                    >
                      Удалить
                    </button>
                  </li>
                </ul>
              </li>
            ))}
        </ul>
      </main>
    </div>
  );
}

export default List;
