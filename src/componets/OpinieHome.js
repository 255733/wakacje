import React from 'react';
import '../styles/OpinieHome.css'; // dodatkowe style

const opinieData = [
  {
    tekst: '“Nigdy tak dobrze się nie bawiłem”',
    imie: 'Adam',
    lokalizacja: 'Ibiza',
    avatar: 'https://i.pravatar.cc/40?img=1',
  },
  {
    tekst: '“Ceny z nieba dzieci zadowolone”',
    imie: 'Anna',
    lokalizacja: 'Kreta',
    avatar: 'https://i.pravatar.cc/40?img=2',
  },
  {
    tekst: '“Wycieczka dała mi oczyszczenie głowy i ciała”',
    imie: 'Mikołaj',
    lokalizacja: 'Oslo',
    avatar: 'https://i.pravatar.cc/40?img=3',
  },
];

const OpinieHome = () => {
  return (
    <div className="container opinie-section">
      <h4 className='opinie-title'>Opinie</h4>
      <div className="row">
        {opinieData.map((opinia, index) => (
          <div key={index} className="col s12 m4">
            <div className="card opinion-card z-depth-1">
              <div className="card-content">
                <p className="quote">{opinia.tekst}</p>
                <div className="user-info">
                  <img src={opinia.avatar} alt="avatar" className="circle avatar" />
                  <div>
                    <div className="user-name">{opinia.imie}</div>
                    <div className="user-location">{opinia.lokalizacja}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="write-opinion-section">
        <div className="row no-margin valign-wrapper section-content">
          <div className="col s12 m6">
            <h4 className="left-align opinion-title"><b>Napisz o nas opinie</b></h4>
          </div>
          <div className="col s12 m6 right-align">
            <a className="btn-large black opinion-button"><b>Napisz opinię</b></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpinieHome;
