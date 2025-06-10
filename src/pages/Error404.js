import React from "react";

function Error404() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Strona nie znaleziona</h1>
      <p style={styles.text}>
        Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
      </p>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Page not found"
        style={styles.image}
      />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "0 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#e91e63",
  },
  text: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    color: "#555",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

export default Error404;
