import React, { useState } from 'react';
import axios from 'axios';

export default function Generator({ allColor, allPicture, allPattern, user }) {
  const [colors, setColors] = useState(allColor);
  const [pictures, setPictures] = useState(allPicture);
  const [patterns, setPatterns] = useState(allPattern);
  const [sock, setSock] = useState({
    color: '#FFFFFF',
    pattern: '',
    picture: '',
  });
  console.log('user', user);
  const colorClickHandler = (e) => {
    const col = e.target.value;
    setSock((prev) => ({ ...prev, color: col }));
  };
  const pictureClickHandler = (e) => {
    const pic = e.target.src.slice(21);
    const result = './..' + pic;
    setSock((prev) => ({ ...prev, picture: result }));
  };
  const patternClickHandler = (e) => {
    const pic = e.target.src.slice(21);
    const result = './..' + pic;
    setSock((prev) => ({ ...prev, pattern: result }));
  };
  const addToFavoritesHandler = async (e) => {
    const curId = user.id;
    const obj = { ...sock, curId };
    await axios.post('/generator/favorite', obj);
  };
  const addToBascketHandler = async (e) => {
    const curId = user.id;
    const obj = { ...sock, curId };
    await axios.post('/generator/basket', obj);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>
            <h5>Выбери узор</h5>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {pictures.map((elem) => {
                return (
                  <div key={elem.id}>
                    <button
                      value={`${sock.picture}`}
                      onClick={pictureClickHandler}
                      style={{ border: 'none' }}
                    >
                      <img style={{ width: '150px', height: '150px' }} src={`${elem.name}`} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h5>Выбери изображение</h5>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {patterns.map((elem) => {
                return (
                  <div key={elem.id}>
                    <button
                      value={`${sock.pattern}`}
                      onClick={patternClickHandler}
                      style={{ border: 'none' }}
                    >
                      <img style={{ width: '150px', height: '150px' }} src={`${elem.name}`} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            {user && (
              <button onClick={addToFavoritesHandler} class="btn btn-info">
                В избранное
              </button>
            )}
            {user && (
              <button onClick={addToBascketHandler} class="btn btn-success">
                В корзину
              </button>
            )}
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            width: '400px',
            height: '400px',
            backgroundColor: `${sock.color}`,
            display: 'flex',
          }}
        >
          <img
            style={{ position: 'absolute', width: '400px', height: '400px' }}
            src={`${sock.pattern}`}
          />
          {sock.picture && (
            <img
              style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                marginLeft: '165px',
                marginTop: '80px',
              }}
              src={`${sock.picture}`}
            />
          )}

          <img
            style={{ position: 'absolute', width: '400px', height: '400px' }}
            src={`./../images/originSock.png`}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>
            <h5>Выбери цвет</h5>
            {colors.map((elem) => {
              return (
                <button
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: `${elem.name}`,
                  }}
                  key={elem.id}
                  name="color"
                  value={`${elem.name}`}
                  onClick={colorClickHandler}
                ></button>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}></div>
    </>
  );
}
//   return(<>
//     <div>
//       <h1>Дизайн твоего носка:</h1>
//       <div style ={{position:'relative', width:'400px', height:'400px',backgroundColor:`${sock.color}`}}>
//           <img style={{position:'absolute',width:'400px', height:'400px'}} src={`${sock.pattern}`}/>
//           <img style={{position:'absolute',width:'400px', height:'400px'}} src={`${sock.picture}`}/>
//           <img style={{position:'absolute',width:'400px',height:'400px'}} src={`./../images/originSock.png`}/>
//       </div>
//     </div>
//     <div>
//         <h5>Выбери цвет:</h5>
//         {colors.map((elem)=>{return <button style={{width:'20px',height:'20px',borderRadius:'50%', backgroundColor:`${elem.name}`}} key={elem.id} name='color' value={`${elem.name}`} onClick={colorClickHandler} ></button>})}
//     </div>
//     <div>
//       <h5>Выбери узор</h5>
//       {pictures.map((elem)=>{return <div key={elem.id}><button value={`${sock.picture}`} onClick={pictureClickHandler} style={{border:'none'}}><img style={{width:'200px', height:'200px'}} src={`${elem.name}`}/></button></div>})}
//     </div>
//     <div>
//       <h5>Выбери изображение</h5>
//       {patterns.map((elem)=>{return <div key={elem.id}><button value={`${sock.pattern}`} onClick={patternClickHandler} style={{border:'none'}}><img style={{width:'200px', height:'200px'}} src={`${elem.name}`}/></button></div>})}
//     </div>
//     <div>
//       {user && <button onClick={addToFavoritesHandler}>В избранное</button>}
//       {user && <button onClick={addToBascketHandler}>В корзину</button>}

//     </div>
//   </>);
// }



