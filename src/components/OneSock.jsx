import React, { useState } from 'react';

export default function OneSock({ el, selectedIds, setSelectedIds }) {
  const handleCheckboxChange = (event, id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((prev) => [...prev].filter((el) => el !== id));
    } else {
      setSelectedIds((prev) => [...prev, id]);
    }
  };
  return (
    <li key={el.id} className="buy">
      <span className="user">{el.user_id}</span>
      <span className="sock">{el.sock_id}</span>
      <ul className="buySocks-lists">
        <li className="buy-link">
          <label>
            <input
              type="checkbox"
              value={el.id}
              checked={selectedIds.includes(el.id)}
              onChange={(event) => handleCheckboxChange(event, el.id)}
            />
            Выбрать для покупки
          </label>
        </li>
      </ul>
    </li>
  );
}
