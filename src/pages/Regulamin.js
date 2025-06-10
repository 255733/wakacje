import React, { useEffect } from "react";
import M from "materialize-css";
import "../styles/regulamin.css";

function Regulamin() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
 <div className="container regulations">
      <h2 className="center-align pink-text text-darken-2">Regulamin Biura Podróży Wędrowcy</h2>
      <div className="card white no-shadow">
        <section className="section">
        <h5>§1 Postanowienia ogólne</h5>
        <p>
          1. Niniejszy regulamin określa zasady świadczenia usług turystycznych przez Biuro
          Podróży Wędrowcy, zwane dalej „Organizatorem”.<br />
          2. Zakup oferty oznacza akceptację warunków niniejszego regulaminu.
        </p>
      </section>

      <section className="section">
        <h5>§2 Rezerwacja i płatność</h5>
        <p>
          1. Rezerwacji można dokonać online, telefonicznie lub osobiście w biurze.<br />
          2. W celu potwierdzenia rezerwacji wymagane jest uiszczenie zaliczki w wysokości
          minimum 30% wartości wycieczki.<br />
          3. Pełna płatność powinna zostać dokonana najpóźniej na 30 dni przed datą wyjazdu.
        </p>
      </section>

      <section className="section">
        <h5>§3 Rezygnacja i zmiany</h5>
        <p>
          1. Rezygnacja z wycieczki musi być dokonana w formie pisemnej (e-mail lub listem
          poleconym).<br />
          2. W przypadku rezygnacji obowiązują następujące opłaty manipulacyjne:
        </p>
        <ul className="browser-default">
          <li>• do 45 dni przed wyjazdem – 10%</li>
          <li>• od 44 do 30 dni – 30%</li>
          <li>• od 29 do 15 dni – 60%</li>
          <li>• mniej niż 15 dni – 100%</li>
        </ul>
        <p>
          3. Możliwa jest zmiana uczestnika podróży nie później niż 7 dni przed wyjazdem.
        </p>
      </section>

      <section className="section">
        <h5>§4 Obowiązki Organizatora</h5>
        <p>
          1. Organizator zobowiązuje się do zapewnienia świadczeń zgodnych z opisem
          zawartym w ofercie.<br />
          2. Organizator nie ponosi odpowiedzialności za opóźnienia lotów, działanie siły
          wyższej ani nieprzewidziane zmiany wynikające z decyzji lokalnych władz.
        </p>
      </section>

      <section className="section">
        <h5>§5 Obowiązki uczestnika</h5>
        <p>
          1. Uczestnik jest zobowiązany do posiadania ważnych dokumentów podróży:
          paszportu, wizy, ubezpieczenia.<br />
          2. Uczestnik powinien stosować się do poleceń pilota i przepisów obowiązujących w
          kraju docelowym.<br />
          3. Za szkody wyrządzone w trakcie wyjazdu uczestnik ponosi odpowiedzialność
          materialną.
        </p>
      </section>

      <section className="section">
        <h5>§6 Reklamacje</h5>
        <p>
          1. Wszelkie reklamacje należy zgłaszać pisemnie w terminie 14 dni od zakończenia
          imprezy turystycznej.<br />
          2. Organizator ma 30 dni na rozpatrzenie reklamacji i udzielenie odpowiedzi.
        </p>
      </section>

      <section className="section">
        <h5>§7 Ochrona danych osobowych</h5>
        <p>
          1. Administratorem danych osobowych uczestników jest Biuro Podróży Wędrowcy.<br />
          2. Dane będą przetwarzane wyłącznie w celu realizacji usług turystycznych oraz
          zgodnie z przepisami RODO.<br />
          3. Uczestnik ma prawo dostępu, poprawiania i żądania usunięcia swoich danych.
        </p>
      </section>

      <section className="section">
        <h5>§8 Postanowienia końcowe</h5>
        <p>
          1. W sprawach nieuregulowanych w niniejszym regulaminie mają zastosowanie
          przepisy Kodeksu Cywilnego oraz ustawy o imprezach turystycznych.<br />
          2. Regulamin wchodzi w życie z dniem publikacji na stronie internetowej.<br />
          3. Organizator zastrzega sobie prawo do jego zmiany, o czym poinformuje
          uczestników.
        </p>
      </section>
        <div className="card-action center-align">
          <a href="/kontakt" className="btn pink darken-1 waves-effect waves-light">
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </div>
  );
}

export default Regulamin;